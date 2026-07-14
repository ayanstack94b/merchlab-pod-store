import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { FaGoogle, FaEye, FaEyeSlash } from "react-icons/fa";
import toast from "react-hot-toast";
import { authClient } from "../../lib/auth-client";

const Login = () => {
    const [showPassword, setShowPassword] = useState(false);
    const navigate = useNavigate();
    const handleLogin = async (
        e: React.FormEvent<HTMLFormElement>
    ) => {
        e.preventDefault();

        const formElement = e.currentTarget;
        const form = new FormData(formElement);

        const email = form.get("email") as string;
        const password = form.get("password") as string;

        const { error } = await authClient.signIn.email({
            email,
            password,
        });

        if (error) {
            toast.error(error.message ?? "Invalid email or password");
            return;
        }

        toast.success("Welcome back!");

        formElement.reset();

        navigate("/");
    };

    return (
        <section className="flex min-h-[calc(100vh-120px)] items-center justify-center py-12">
            <div className="w-full max-w-md rounded-3xl border border-white/10 bg-[#151515] p-8 shadow-xl">

                <div className="mb-8 text-center">
                    <h1 className="text-4xl font-bold">Welcome Back</h1>

                    <p className="mt-3 text-gray-400">
                        Sign in to continue to MerchLab
                    </p>
                </div>

                <form onSubmit={handleLogin} className="space-y-5">

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
                                placeholder="Enter your password"
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

                    <div className="flex justify-end">

                        <button
                            type="button"
                            className="text-sm text-[#D4AF37] hover:underline"
                        >
                            Forgot Password?
                        </button>

                    </div>

                    <button
                        className="btn w-full border-0 bg-gradient-to-r from-[#D4AF37] via-[#E7C55A] to-[#B8860B] text-black"
                    >
                        Login
                    </button>

                </form>

                <div className="divider text-gray-500">OR</div>

                <button className="btn w-full border border-white/10 bg-[#1E1E1E] text-white hover:border-[#D4AF37]">
                    <FaGoogle />
                    Continue with Google
                </button>

                {/* <button className="btn mt-4 w-full border border-[#D4AF37] bg-transparent text-[#D4AF37] hover:bg-[#D4AF37] hover:text-black">
                    Demo Login
                </button> */}

                <p className="mt-8 text-center text-sm text-gray-400">
                    Don't have an account?{" "}
                    <Link
                        to="/register"
                        className="font-semibold text-[#D4AF37]"
                    >
                        Register
                    </Link>
                </p>

            </div>
        </section>
    );
};

export default Login;