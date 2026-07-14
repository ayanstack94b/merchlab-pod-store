import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";
import axiosInstance from "../../services/axios";

const AddMerch = () => {
    const navigate = useNavigate();

    const handleSubmit = async (
        e: React.FormEvent<HTMLFormElement>
    ) => {
        e.preventDefault();

        const formElement = e.currentTarget;
        const form = new FormData(formElement);

        const product = {
            title: form.get("title"),
            shortDescription: form.get("shortDescription"),
            description: form.get("description"),
            category: form.get("category"),
            price: Number(form.get("price")),
            image: form.get("image"),
        };

        try {
            const { data } = await axiosInstance.post(
                "/products",
                product
            );

            if (data.success) {
                toast.success("Merch added successfully!");

                formElement.reset();

                navigate("/items/manage");
            }
        } catch (error) {
            console.error(error);

            toast.error("Failed to add merch.");
        }
    };

    return (
        <section className="py-10">
            <div className="mx-auto max-w-3xl rounded-2xl border border-white/10 bg-[#151515] p-8">

                <h1 className="mb-8 text-3xl font-bold">
                    Add Product
                </h1>

                <form
                    onSubmit={handleSubmit}
                    className="space-y-5"
                >

                    <input
                        name="title"
                        placeholder="Product Title"
                        className="input input-bordered w-full bg-[#1E1E1E]"
                        required
                    />

                    <input
                        name="shortDescription"
                        placeholder="Short Description"
                        className="input input-bordered w-full bg-[#1E1E1E]"
                        required
                    />

                    <textarea
                        name="description"
                        placeholder="Full Description"
                        className="textarea textarea-bordered w-full bg-[#1E1E1E]"
                        rows={5}
                        required
                    />

                    <input
                        name="category"
                        placeholder="Category"
                        className="input input-bordered w-full bg-[#1E1E1E]"
                        required
                    />

                    <input
                        name="price"
                        type="number"
                        placeholder="Price"
                        className="input input-bordered w-full bg-[#1E1E1E]"
                        required
                    />

                    <input
                        name="image"
                        placeholder="Image URL"
                        className="input input-bordered w-full bg-[#1E1E1E]"
                        required
                    />

                    <button className="btn w-full border-0 bg-linear-to-r from-[#D4AF37] via-[#E7C55A] to-[#B8860B] text-black">
                        Add March
                    </button>

                </form>

            </div>
        </section>
    );
};

export default AddMerch;