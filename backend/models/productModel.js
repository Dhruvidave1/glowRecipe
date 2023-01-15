import mongoose, { mongo } from 'mongoose'
// individual review rating
const reviewSchema = mongoose.Schema(
  {
    name: { type: String, required: true },
    rating: { type: Number, required: true },
    comment: { type: String, required: true },
  },
  {
    timestamps: true,
  }
)
const productSchema = mongoose.Schema(
  {
    user: {
      // want to know which admin created which product, type we want is object ID:
      type: mongoose.Schema.Types.ObjectId,
      required: true,
      ref: 'User',
      //   Adds a relationship between the product and the user
    },
    name: {
      type: String,
      required: true,
    },
    image: {
      type: String,
      required: true,
    },
    brand: {
      type: String,
      required: true,
    },
    category: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
    reviews: [reviewSchema],
    // average of all ratings
    rating: {
      type: Number,
      required: true,
      default: 0,
    },
    numReviews: {
      type: Number,
      required: true,
      default: 0,
    },
    price: {
      type: Number,
      required: true,
      default: 0,
    },
    countInStock: {
      type: Number,
      required: true,
      default: 0,
    },
  },
  {
    // to automatically keep track of createdat and updated at
    timestamps: true,
  }
)

const Product = mongoose.model('Product', productSchema)

export default Product
