import Product from "../models/product.model.js";

const createProduct = async (payload: {
  title: string;
  shortDescription: string;
  description: string;
  category: string;
  price: number;
  image: string;
}) => {
  const product = await Product.create(payload);

  return product;
};

const getAllProducts = async () => {
  const products = await Product.find().sort({ createdAt: -1 });

  return products;
};

const getSingleProduct = async (id: string) => {
  const product = await Product.findById(id);

  return product;
};

const deleteProduct = async (id: string) => {
  const product = await Product.findByIdAndDelete(id);

  return product;
};

export const ProductService = {
  createProduct,
  getAllProducts,
  getSingleProduct,
  deleteProduct,
};