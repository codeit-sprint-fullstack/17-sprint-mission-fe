import cors from "cors";
import express from "express";
import mongoose from "mongoose";
import { Product, validateProduct } from "./product.js";

function productSummary({ _id, name, price, createdAt }) {
  return { id: String(_id), name, price, createdAt };
}

function productDetail(product) {
  const { description, tags, updatedAt } = product;
  return { ...productSummary(product), description, tags, updatedAt };
}

export function createApp({ origins = [], products = Product } = {}) {
  const app = express();
  app.use(cors({ origin: origins }));
  app.use(express.json());

  app.get("/health", (_request, response) => response.json({ status: "ok" }));

  app.get("/products", async (request, response) => {
    const { page = "1", pageSize = "10", offset, orderBy = "recent", keyword = "" } = request.query;
    const isInteger = (value) =>
      typeof value === "string" && /^\d+$/.test(value) && Number.isSafeInteger(Number(value));
    const limit = Number(pageSize);
    if (
      !isInteger(page) || Number(page) < 1 ||
      !isInteger(pageSize) || limit < 1 || limit > 100 ||
      (offset !== undefined && !isInteger(offset)) ||
      orderBy !== "recent" || typeof keyword !== "string" || keyword.length > 100
    ) {
      return response.status(400).json({ message: "상품 목록 요청 값이 올바르지 않습니다." });
    }

    const skip = offset === undefined ? (Number(page) - 1) * limit : Number(offset);
    if (!Number.isSafeInteger(skip)) {
      return response.status(400).json({ message: "페이지 범위가 올바르지 않습니다." });
    }

    const search = keyword.trim();
    const pattern = new RegExp(RegExp.escape(search), "i");
    const filter = search ? { $or: [{ name: pattern }, { description: pattern }] } : {};
    const [list, totalCount] = await Promise.all([
      products.find(filter).select("name price createdAt")
        .sort({ createdAt: -1, _id: -1 }).skip(skip).limit(limit).lean(),
      products.countDocuments(filter),
    ]);
    response.json({ list: list.map(productSummary), totalCount });
  });

  app.post("/products", async (request, response) => {
    const { error, data } = validateProduct(request.body);
    if (error) return response.status(400).json(error);

    const product = productDetail(await products.create(data));
    response.location(`/products/${product.id}`).status(201).json(product);
  });

  app.param("id", (_request, response, next, id) => {
    if (!mongoose.isObjectIdOrHexString(id)) {
      return response.status(400).json({ message: "상품 ID가 올바르지 않습니다." });
    }
    next();
  });

  app.get("/products/:id", async (request, response) => {
    const product = await products.findById(request.params.id).lean();
    if (!product) return response.status(404).json({ message: "상품이 없습니다." });
    response.json(productDetail(product));
  });

  app.patch("/products/:id", async (request, response) => {
    const { error, data } = validateProduct(request.body, true);
    if (error) return response.status(400).json(error);

    const product = await products.findByIdAndUpdate(
      request.params.id,
      { $set: data },
      { returnDocument: "after", runValidators: true },
    ).lean();
    if (!product) return response.status(404).json({ message: "상품이 없습니다." });
    response.json(productDetail(product));
  });

  app.delete("/products/:id", async (request, response) => {
    const result = await products.deleteOne({ _id: request.params.id });
    if (result.deletedCount === 0) {
      return response.status(404).json({ message: "상품이 없습니다." });
    }
    response.status(204).end();
  });

  app.use((_request, response) => response.status(404).json({ message: "경로가 없습니다." }));
  app.use((error, _request, response, next) => {
    if (response.headersSent) return next(error);
    if (error.type === "entity.parse.failed" || error instanceof mongoose.Error.ValidationError) {
      return response.status(400).json({ message: "요청 본문이 올바르지 않습니다." });
    }
    if (error.status === 413 || error.status === 415) {
      return response.status(error.status).json({ message: "요청 본문을 처리할 수 없습니다." });
    }
    console.error("상품 API 오류", error);
    response.status(500).json({ message: "서버에서 요청을 처리하지 못했습니다." });
  });

  return app;
}
