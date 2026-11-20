import "dotenv/config";
import mongoose from "mongoose";
import { Product } from "./models/Product.js";

const TARGET_COUNT = 50;
const categories = [
  { name: "로봇 청소기", price: 1500000, tags: ["가전", "청소기"] },
  { name: "무선 이어폰", price: 89000, tags: ["음향", "이어폰"] },
  { name: "원목 책상", price: 210000, tags: ["가구", "책상"] },
  { name: "커피 머신", price: 135000, tags: ["주방", "커피"] },
  { name: "캠핑 의자", price: 45000, tags: ["캠핑", "의자"] },
  { name: "스마트 워치", price: 179000, tags: ["전자", "시계"] },
  { name: "판다 티셔츠", price: 28000, tags: ["의류", "티셔츠"] },
  { name: "블투 스피커", price: 72000, tags: ["음향", "스피커"] },
  { name: "여행 캐리어", price: 99000, tags: ["여행", "가방"] },
  { name: "기계식 키보드", price: 110000, tags: ["컴퓨터", "키보드"] },
];
const descriptions = [
  "깨끗하게 사용한 상품입니다. 편하게 문의해 주세요.",
  "사용감이 적고 상태가 좋아요. 빠르게 거래하고 싶습니다.",
  "구성품 모두 포함되어 있어요. 사진과 같은 상태입니다.",
  "필요하신 분께 저렴하게 판매합니다. 직거래도 가능합니다.",
  "최근까지 문제없이 사용했으며 꼼꼼히 포장해 드릴게요.",
];

if (!process.env.MONGODB_URI) {
  console.error("backend/.env에 MONGODB_URI를 설정해 주세요.");
  process.exit(1);
}

try {
  await mongoose.connect(process.env.MONGODB_URI);
  const existingCount = await Product.countDocuments();
  const missingCount = Math.max(0, TARGET_COUNT - existingCount);
  const products = Array.from({ length: missingCount }, (_, index) => {
    const category = categories[index % categories.length];
    const sequence = String(existingCount + index + 1).padStart(2, "0");
    return {
      name: `${category.name} ${sequence}`,
      description: descriptions[index % descriptions.length],
      price: category.price + Math.floor(index / categories.length) * 5000,
      tags: category.tags,
    };
  });

  if (products.length) await Product.insertMany(products);
  console.log(`상품 ${products.length}개를 추가했습니다. 현재 총 ${existingCount + products.length}개입니다.`);
} catch {
  console.error("상품을 추가하지 못했습니다. MongoDB 연결과 상품 데이터를 확인해 주세요.");
  process.exitCode = 1;
} finally {
  await mongoose.disconnect().catch(() => {});
}
