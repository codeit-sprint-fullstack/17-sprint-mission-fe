import mongoose from "mongoose";
import { createApp } from "./app.js";

const { MONGODB_URI, PORT = "3000", CORS_ORIGINS = "" } = process.env;
const origins = CORS_ORIGINS.split(",").map((origin) => origin.trim()).filter(Boolean);

try {
  if (!MONGODB_URI) throw new Error("MONGODB_URI 환경 변수를 설정해주세요.");
  await mongoose.connect(MONGODB_URI);
  createApp({ origins }).listen(Number(PORT), "0.0.0.0", () => {
    console.log(`상품 API 서버가 포트 ${PORT}에서 실행 중입니다.`);
  });
} catch (error) {
  console.error("상품 API 서버를 시작하지 못했습니다.", error.message);
  process.exitCode = 1;
}
