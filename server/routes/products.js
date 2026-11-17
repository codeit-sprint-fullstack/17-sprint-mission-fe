import { Router } from "express";
import mongoose from "mongoose";
import { Product } from "../models/Product.js";

export const productsRouter = Router();

productsRouter.get("/", async (request, response, next) => {
  try {
    const offset = parseInteger(request.query.offset, 0);
    const limit = Math.min(parseInteger(request.query.limit, 10), 100);
    const orderBy = request.query.orderBy ?? "recent";
    const keyword = String(request.query.keyword ?? "").trim();
    if (!Number.isInteger(offset) || !Number.isInteger(limit) || offset < 0 || limit < 1) return response.status(400).json({ message: "offset과 limit은 유효한 정수여야 합니다." });
    if (orderBy !== "recent") return response.status(400).json({ message: "지원하지 않는 정렬 기준입니다." });

    const filter = keyword
      ? { $or: [{ name: { $regex: escapeRegExp(keyword), $options: "i" } }, { description: { $regex: escapeRegExp(keyword), $options: "i" } }] }
      : {};
    const [documents, totalCount] = await Promise.all([
      Product.find(filter).select("name price createdAt").sort({ createdAt: -1, _id: -1 }).skip(offset).limit(limit),
      Product.countDocuments(filter),
    ]);
    response.json({ list: documents.map((product) => product.toJSON()), totalCount, offset, limit });
  } catch (error) {
    next(error);
  }
});

productsRouter.post("/", async (request, response, next) => {
  try {
    const { name, description, price, tags } = request.body ?? {};
    const product = await Product.create({ name, description, price, tags });
    response.status(201).json(product.toJSON());
  } catch (error) {
    next(error);
  }
});

productsRouter.get("/:id", async (request, response, next) => {
  try {
    if (!mongoose.isValidObjectId(request.params.id)) return response.status(400).json({ message: "상품 ID 형식이 올바르지 않습니다." });
    const product = await Product.findById(request.params.id);
    if (!product) return response.status(404).json({ message: "상품을 찾을 수 없습니다." });
    response.json(product.toJSON());
  } catch (error) {
    next(error);
  }
});

productsRouter.patch("/:id", async (request, response, next) => {
  try {
    if (!mongoose.isValidObjectId(request.params.id)) return response.status(400).json({ message: "상품 ID 형식이 올바르지 않습니다." });
    const allowed = ["name", "description", "price", "tags"];
    const updates = Object.fromEntries(Object.entries(request.body ?? {}).filter(([key]) => allowed.includes(key)));
    if (Object.keys(updates).length === 0) return response.status(400).json({ message: "수정할 상품 정보를 입력해 주세요." });
    const product = await Product.findByIdAndUpdate(request.params.id, updates, { new: true, runValidators: true });
    if (!product) return response.status(404).json({ message: "상품을 찾을 수 없습니다." });
    response.json(product.toJSON());
  } catch (error) {
    next(error);
  }
});

productsRouter.delete("/:id", async (request, response, next) => {
  try {
    if (!mongoose.isValidObjectId(request.params.id)) return response.status(400).json({ message: "상품 ID 형식이 올바르지 않습니다." });
    const product = await Product.findByIdAndDelete(request.params.id);
    if (!product) return response.status(404).json({ message: "상품을 찾을 수 없습니다." });
    response.status(204).end();
  } catch (error) {
    next(error);
  }
});

function parseInteger(value, fallback) {
  if (value === undefined) return fallback;
  const parsed = Number(value);
  return Number.isInteger(parsed) ? parsed : Number.NaN;
}

function escapeRegExp(value) {
  return value.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
}
