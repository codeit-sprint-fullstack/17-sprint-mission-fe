import mongoose from "mongoose";
import { array, integer, object, partial, refine, string, validate } from "superstruct";

const text = (min, max) => refine(string(), "TrimmedText", (value) => {
  const length = [...value.trim()].length;
  return (length >= min && length <= max) || `${min}~${max}자로 입력해주세요.`;
});

const price = refine(integer(), "Price", (value) =>
  (Number.isSafeInteger(value) && value >= 0) || "0 이상의 정수로 입력해주세요."
);

const productInput = object({
  name: text(1, 10),
  description: text(10, 100),
  price,
  tags: array(text(1, 5)),
});
const productPatch = partial(productInput);

export function validateProduct(body, patch = false) {
  const [error, value] = validate(body, patch ? productPatch : productInput);
  if (error) return { error: { field: error.path[0], message: error.message } };
  if (Object.keys(value).length === 0) {
    return { error: { message: "수정할 상품 정보를 입력해주세요." } };
  }

  const data = { ...value };
  if (data.name !== undefined) data.name = data.name.trim();
  if (data.description !== undefined) data.description = data.description.trim();
  if (data.tags !== undefined) data.tags = data.tags.map((tag) => tag.trim());
  return { data };
}

const productSchema = new mongoose.Schema({
  name: { type: String, required: true, trim: true },
  description: { type: String, required: true, trim: true },
  price: { type: Number, required: true, min: 0 },
  tags: { type: [String], required: true },
}, { timestamps: true });

productSchema.index({ createdAt: -1, _id: -1 });

export const Product = mongoose.model("Product", productSchema);
