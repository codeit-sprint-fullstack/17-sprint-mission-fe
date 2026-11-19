import mongoose from 'mongoose'

const productSchema = new mongoose.Schema({
  name: {
    type: String,
    trim: true,
    required: [true, '상품명을 입력해 주세요.'],
    maxlength: [100, '상품명은 100자까지 입력할 수 있습니다.'],
  },
  description: {
    type: String,
    trim: true,
    required: [true, '상품 소개를 입력해 주세요.'],
    maxlength: [1000, '상품 소개는 1,000자까지 입력할 수 있습니다.'],
  },
  price: {
    type: Number,
    required: [true, '가격을 입력해 주세요.'],
    validate: {
      validator: (value) => Number.isSafeInteger(value) && value > 0,
      message: '가격은 1 이상의 정수로 입력해 주세요.',
    },
  },
  tags: {
    type: [{
      type: String,
      trim: true,
      required: [true, '빈 태그는 등록할 수 없습니다.'],
      maxlength: [30, '태그는 30자까지 입력할 수 있습니다.'],
    }],
    required: [true, '태그를 배열로 입력해 주세요.'],
    default: undefined,
  },
}, { timestamps: true })

productSchema.index({ createdAt: -1, _id: -1 })

export const Product = mongoose.model('Product', productSchema)
