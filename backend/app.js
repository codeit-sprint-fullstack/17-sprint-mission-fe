import cors from "cors";
import express from "express";
import { productsRouter } from "./routes/products.js";

const app = express();

const allowedOrigins = (process.env.CLIENT_ORIGIN ?? "http://localhost:5173")
  .split(",")
  .map((origin) => origin.trim());

app.use(cors({ origin: allowedOrigins }));
app.use(express.json({ limit: "1mb" }));
app.use("/api/products", productsRouter);
app.get("/api/health", (_request, response) => response.json({ status: "ok" }));

app.use((_request, response) => response.status(404).json({ message: "요청한 경로를 찾을 수 없습니다." }));

app.use((error, _request, response, _next) => {
  if (error?.type === "entity.parse.failed") return response.status(400).json({ message: "요청 본문 JSON 형식이 올바르지 않습니다." });
  if (error?.name === "ValidationError" || error?.name === "CastError") {
    return response.status(400).json({ message: error.message });
  }
  console.error(error);
  response.status(500).json({ message: "서버 오류가 발생했습니다." });
});

export default app;
