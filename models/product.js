const mongoose = require('mongoose');
const { ObjectId } = mongoose.Schema;

const productSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      trim: true,
      required: true,
      maxlength: 32,
    },
    description: {
      type: String,
      maxlength: 2000,
    },
    price: {
      type: Number,
      trim: true,
      maxlength: 32,
    },
    category: {
      type: ObjectId,
      ref: 'Category',
    },
    quantity: {
      type: Number,
    },
    url: {
      type: String,
    },
    sold: {
      type: Number,
      default: 0,
    },
    photo: {
      type: String,
      default: ''
    },
    shipping: {
      required: false,
      type: Boolean,
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model('Product', productSchema);
