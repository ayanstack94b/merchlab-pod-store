import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { FaGoogle, FaEye, FaEyeSlash } from "react-icons/fa";
import { authClient } from "../../lib/auth-client";
import toast from "react-hot-toast";

const Register = () => {
    const [showPassword, setShowPassword] = useState(false);
    const navigate = useNavigate();


    const handleRegister = async (
        e: React.FormEvent<HTMLFormElement>
    ) => {
        e.preventDefault();

        const formElement = e.currentTarget;
        const form = new FormData(e.currentTarget);
        const name = form.get("name") as string;
        const email = form.get("email") as string;
        const password = form.get("password") as string;

        const { data, error } = await authClient.signUp.email({
            name,
            email,
            password,
        });

        if (error) {
            toast.error(error.message ?? "Registration failed");
            return;
        }

        console.log(data);

        toast.success("Account created successfully!");

        formElement.reset();

        navigate("/login");
    };

    return (
        <section className="flex min-h-[calc(100vh-120px)] items-center justify-center py-12">
            <div className="w-full max-w-md rounded-3xl border border-white/10 bg-[#151515] p-8 shadow-xl">

                <div className="mb-8 text-center">
                    <h1 className="text-4xl font-bold">Create Account</h1>

                    <p className="mt-3 text-gray-400">
                        Join MerchLab and start exploring premium merchandise.
                    </p>
                </div>

                <form onSubmit={handleRegister} className="space-y-5">

                    <div>
                        <label className="mb-2 block text-sm">Full Name</label>

                        <input
                            type="text"
                            name="name"
                            placeholder="Enter your full name"
                            className="input input-bordered w-full bg-[#1E1E1E]"
                            required
                        />
                    </div>

                    <div>
                        <label className="mb-2 block text-sm">Email</label>

                        <input
                            type="email"
                            name="email"
                            placeholder="Enter your email"
                            className="input input-bordered w-full bg-[#1E1E1E]"
                            required
                        />
                    </div>

                    <div>
                        <label className="mb-2 block text-sm">Password</label>

                        <div className="relative">

                            <input
                                type={showPassword ? "text" : "password"}
                                name="password"
                                placeholder="Create a password"
                                className="input input-bordered w-full bg-[#1E1E1E] pr-12"
                                required
                            />

                            <button
                                type="button"
                                onClick={() => setShowPassword(!showPassword)}
                                className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400"
                            >
                                {showPassword ? <FaEyeSlash /> : <FaEye />}
                            </button>

                        </div>
                    </div>

                    <button className="btn w-full border-0 bg-gradient-to-r from-[#D4AF37] via-[#E7C55A] to-[#B8860B] text-black">
                        Create Account
                    </button>

                </form>

                <div className="divider text-gray-500">OR</div>

                <button className="btn w-full border border-white/10 bg-[#1E1E1E] text-white hover:border-[#D4AF37]">
                    <FaGoogle />
                    Continue with Google
                </button>

                <p className="mt-8 text-center text-sm text-gray-400">
                    Already have an account?{" "}
                    <Link
                        to="/login"
                        className="font-semibold text-[#D4AF37]"
                    >
                        Login
                    </Link>
                </p>

            </div>
        </section>
    );
};

export default Register;