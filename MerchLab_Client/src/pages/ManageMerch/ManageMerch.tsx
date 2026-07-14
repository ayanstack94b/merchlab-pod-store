import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import toast from "react-hot-toast";

import axiosInstance from "../../services/axios";

type Product = {
    _id: string;
    title: string;
    shortDescription: string;
    description: string;
    category: string;
    price: number;
    image: string;
};

const ManageMerch = () => {
    const [products, setProducts] = useState<Product[]>([]);
    const [loading, setLoading] = useState(true);

    const fetchProducts = async () => {
        try {
            const { data } = await axiosInstance.get("/products");

            setProducts(data.data);
        } catch (error) {
            console.error(error);
            toast.error("Failed to load products.");
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        fetchProducts();
    }, []);

    const handleDelete = async (id: string) => {
        const confirmDelete = window.confirm(
            "Are you sure you want to delete this product?"
        );

        if (!confirmDelete) return;

        try {
            const { data } = await axiosInstance.delete(`/products/${id}`);

            if (data.success) {
                toast.success("Product deleted successfully.");

                setProducts((prev) =>
                    prev.filter((product) => product._id !== id)
                );
            }
        } catch (error) {
            console.error(error);
            toast.error("Failed to delete product.");
        }
    };

    if (loading) {
        return (
            <section className="py-10">
                <h2 className="text-center text-2xl font-bold">
                    Loading Products...
                </h2>
            </section>
        );
    }

    return (
        <section className="py-10">

            <div className="mb-8 flex items-center justify-between">

                <h1 className="text-4xl font-bold">
                    Manage Merch
                </h1>

                <Link
                    to="/items/add"
                    className="rounded-xl bg-gradient-to-r from-[#D4AF37] via-[#E7C55A] to-[#B8860B] px-5 py-3 font-semibold text-black"
                >
                    Add New
                </Link>

            </div>

            <div className="overflow-x-auto rounded-2xl border border-white/10 bg-[#151515]">

                <table className="table">

                    <thead>

                        <tr className="text-base text-[#D4AF37]">

                            <th>Image</th>

                            <th>Title</th>

                            <th>Category</th>

                            <th>Price</th>

                            <th>Actions</th>

                        </tr>

                    </thead>

                    <tbody>

                        {products.map((product) => (
                            <tr key={product._id}>

                                <td>
                                    <img
                                        src={product.image}
                                        alt={product.title}
                                        className="h-16 w-16 rounded-lg object-cover"
                                    />
                                </td>

                                <td>
                                    <div>
                                        <h2 className="font-semibold">
                                            {product.title}
                                        </h2>

                                        <p className="max-w-xs text-sm text-gray-400">
                                            {product.shortDescription}
                                        </p>
                                    </div>
                                </td>

                                <td>{product.category}</td>

                                <td>₹ {product.price}</td>

                                <td>

                                    <div className="flex gap-2">

                                        <Link
                                            to={`/shop/${product._id}`}
                                            className="btn btn-sm bg-[#D4AF37] text-black hover:bg-[#E7C55A]"
                                        >
                                            View
                                        </Link>

                                        <button
                                            onClick={() =>
                                                handleDelete(product._id)
                                            }
                                            className="btn btn-sm btn-error"
                                        >
                                            Delete
                                        </button>

                                    </div>

                                </td>

                            </tr>
                        ))}

                    </tbody>

                </table>

            </div>

            {products.length === 0 && (
                <div className="mt-10 text-center">

                    <h2 className="text-2xl font-semibold">
                        No Products Found
                    </h2>

                    <p className="mt-2 text-gray-400">
                        Add your first merch item.
                    </p>

                </div>
            )}

        </section>
    );
};

export default ManageMerch;