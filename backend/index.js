import "dotenv/config";
import mongoose from "mongoose";
import app from "./app.js";

const port = Number(process.env.PORT) || 3001;
const mongoUri = process.env.MONGODB_URI;

if (!mongoUri) {
  console.error("MONGODB_URI 환경 변수가 설정되지 않았습니다.");
  process.exit(1);
}

try {
  await mongoose.connect(mongoUri);
  console.log("MongoDB에 연결했습니다.");
  app.listen(port, () => console.log(`API 서버 실행 중: http://localhost:${port}`));
} catch (error) {
  console.error("서버를 시작하지 못했습니다.", error);
  process.exit(1);
}
