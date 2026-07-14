import { Link, NavLink } from "react-router-dom";
import Container from "../Container";
import { Menu } from "lucide-react";
import { authClient } from "../../lib/auth-client";
import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";
import { FaUserCircle } from "react-icons/fa";

const Navbar = () => {

    const navigate = useNavigate();

    const {
        data: session,
        isPending,
    } = authClient.useSession();

    const navLinks = (
        <>
            <li>
                <NavLink
                    to="/"
                    className={({ isActive }) =>
                        `relative px-1 py-2 font-medium transition-all duration-300 after:absolute after:left-0 after:-bottom-1 after:h-[2px] after:w-full after:origin-left after:scale-x-0 after:bg-[#D4AF37] after:transition-transform after:duration-300 hover:text-[#D4AF37] hover:after:scale-x-100 ${isActive
                            ? "text-[#D4AF37] after:scale-x-100"
                            : "text-gray-300"
                        }`
                    }
                >
                    Home
                </NavLink>
            </li>

            <li>
                <NavLink
                    to="/shop"
                    className={({ isActive }) =>
                        `relative px-1 py-2 font-medium transition-all duration-300 after:absolute after:left-0 after:-bottom-1 after:h-[2px] after:w-full after:origin-left after:scale-x-0 after:bg-[#D4AF37] after:transition-transform after:duration-300 hover:text-[#D4AF37] hover:after:scale-x-100 ${isActive
                            ? "text-[#D4AF37] after:scale-x-100"
                            : "text-gray-300"
                        }`
                    }
                >
                    Shop
                </NavLink>
            </li>
            <NavLink to="/items/add">Add Merch</NavLink>
            <li>
                <NavLink
                    to="/about"
                    className={({ isActive }) =>
                        `relative px-1 py-2 font-medium transition-all duration-300 after:absolute after:left-0 after:-bottom-1 after:h-[2px] after:w-full after:origin-left after:scale-x-0 after:bg-[#D4AF37] after:transition-transform after:duration-300 hover:text-[#D4AF37] hover:after:scale-x-100 ${isActive
                            ? "text-[#D4AF37] after:scale-x-100"
                            : "text-gray-300"
                        }`
                    }
                >
                    About
                </NavLink>
            </li>

            <li>
                <NavLink
                    to="/contact"
                    className={({ isActive }) =>
                        `relative px-1 py-2 font-medium transition-all duration-300 after:absolute after:left-0 after:-bottom-1 after:h-[2px] after:w-full after:origin-left after:scale-x-0 after:bg-[#D4AF37] after:transition-transform after:duration-300 hover:text-[#D4AF37] hover:after:scale-x-100 ${isActive
                            ? "text-[#D4AF37] after:scale-x-100"
                            : "text-gray-300"
                        }`
                    }
                >
                    Contact
                </NavLink>
            </li>
        </>
    );

    const handleLogout = async () => {
        const { error } = await authClient.signOut();

        if (error) {
            toast.error(error.message ?? "Logout failed");
            return;
        }

        toast.success("Logged out successfully");

        navigate("/login");
    };

    return (
        <nav className="sticky top-0 z-50 border-b border-white/10 bg-black/50 backdrop-blur-xl">
            <Container>
                <div className="navbar px-0">

                    {/* Mobile Menu */}
                    <div className="navbar-start lg:hidden">
                        <div className="dropdown">
                            <button
                                tabIndex={0}
                                className="rounded-lg border border-white/10 bg-white/5 text-white backdrop-blur-md hover:bg-white/10"
                            >
                                <Menu size={25} className="p-1" />
                            </button>

                            <ul
                                tabIndex={0}
                                className="menu menu-sm dropdown-content z-[100] mt-3 w-64 rounded-xl border border-white/10 bg-[#151515] p-3 shadow-2xl"
                            >
                                {navLinks}

                                <hr className="my-2 border-white/10" />

                                {isPending ? (
                                    <li className="flex justify-center py-2">
                                        <span className="loading loading-spinner loading-sm"></span>
                                    </li>
                                ) : session ? (
                                    <>
                                        <li className="mb-2">
                                            <div className="flex items-center gap-3 rounded-xl border border-white/10 bg-white/5 p-3">

                                                <FaUserCircle className="text-2xl text-[#D4AF37]" />

                                                <div className="min-w-0">
                                                    <h3 className="truncate font-semibold text-white">
                                                        {session.user.name ?? "User"}
                                                    </h3>

                                                    <p className="truncate text-xs text-gray-400">
                                                        {session.user.email ?? ""}
                                                    </p>
                                                </div>
                                            </div>
                                        </li>

                                        <li>
                                            <button
                                                onClick={handleLogout}
                                                className="text-red-400 hover:bg-red-500/10"
                                            >
                                                Logout
                                            </button>
                                        </li>
                                    </>
                                ) : (
                                    <>
                                        <li>
                                            <Link to="/login">Login</Link>
                                        </li>

                                        <li>
                                            <Link
                                                to="/register"
                                                className="text-[#D4AF37]"
                                            >
                                                Register
                                            </Link>
                                        </li>
                                    </>
                                )}
                            </ul>
                        </div>
                    </div>

                    {/* Desktop Logo */}
                    <Link
                        to="/"
                        className="hidden text-3xl font-black tracking-[0.2em] lg:block"
                    >
                        Merch<span className="text-[#D4AF37]">Lab</span>
                    </Link>

                    {/* Mobile Logo */}
                    <div className="flex-1 text-center lg:hidden">
                        <Link
                            to="/"
                            className="text-xl font-bold"
                        >
                            Merch<span className="text-[#D4AF37]">Lab</span>
                        </Link>
                    </div>

                    {/* Desktop Menu */}
                    <div className="navbar-center hidden flex-1 justify-center lg:flex">
                        <ul className="flex items-center gap-8">
                            {navLinks}
                        </ul>
                    </div>

                    {/* Desktop Auth */}
                    <div className="navbar-end hidden lg:flex">

                        {isPending ? (
                            <span className="loading loading-spinner loading-sm"></span>
                        ) : session ? (
                            <div className="flex items-center gap-4">

                                <div className="flex items-center gap-3">

                                    <FaUserCircle className="text-5xl text-[#D4AF37]" />

                                    <div className="leading-tight">
                                        <h3 className="font-semibold text-white">
                                            {session.user.name ?? "User"}
                                        </h3>

                                        <p className="text-sm text-gray-400">
                                            {session.user.email ?? ""}
                                        </p>
                                    </div>

                                </div>

                                <button
                                    onClick={handleLogout}
                                    className="rounded-xl border border-red-500/40 px-5 py-2 text-red-400 transition hover:bg-red-500 hover:text-white"
                                >
                                    Logout
                                </button>

                            </div>
                        ) : (
                            <div className="flex items-center gap-2">

                                <Link
                                    to="/login"
                                    className="rounded-xl border border-white/20 px-5 py-2 transition hover:border-[#D4AF37] hover:text-[#D4AF37]"
                                >
                                    Login
                                </Link>

                                <Link
                                    to="/register"
                                    className="rounded-xl bg-gradient-to-r from-[#D4AF37] via-[#E7C55A] to-[#B8860B] px-6 py-2 font-semibold text-black transition hover:scale-105"
                                >
                                    Register
                                </Link>

                            </div>
                        )}

                    </div>

                </div>
            </Container>
        </nav>
    );
};

export default Navbar;
