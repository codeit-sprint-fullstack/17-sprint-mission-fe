import mongoose from "mongoose";

const productSchema = new mongoose.Schema(
  {
    name: { type: String, required: true, trim: true, minlength: 1, maxlength: 10 },
    description: { type: String, required: true, trim: true, minlength: 10, maxlength: 100 },
    price: { type: Number, required: true, min: 1 },
    tags: {
      type: [String],
      required: true,
      validate: { validator: (tags = []) => tags.length > 0 && tags.every((tag) => tag.length <= 5), message: "태그를 하나 이상 입력하고 각 태그는 5자 이내로 작성해 주세요." },
    },
  },
  { timestamps: true, versionKey: false },
);

productSchema.set("toJSON", {
  transform: (_document, returned) => {
    returned.id = returned._id.toString();
    delete returned._id;
    return returned;
  },
});

export const Product = mongoose.model("Product", productSchema);
