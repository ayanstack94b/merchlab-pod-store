import { Link, NavLink } from "react-router-dom";
import Container from "../Container";
import { Menu } from "lucide-react";
const Navbar = () => {
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
                                className="menu menu-sm dropdown-content mt-3 z-50 w-56 rounded-xl border border-white/10 bg-[#151515]/95 backdrop-blur-xl p-3 shadow-2xl"
                            >
                                {navLinks}

                                <hr className="my-2 border-white/10" />

                                <li>
                                    <Link
                                        to="/login"
                                        className="font-medium text-gray-300 hover:text-[#D4AF37] transition-all duration-300"
                                    >
                                        Login
                                    </Link>
                                </li>

                                <li>
                                    <Link
                                        to="/register"
                                        className="font-medium text-[#D4AF37] hover:text-white transition-all duration-300"
                                    >
                                        Register
                                    </Link>
                                </li>
                            </ul>
                        </div>
                    </div>

                    {/* Logo */}
                    <Link
                        to="/"
                        className="text-3xl font-black tracking-[0.2em] hidden lg:block"
                    >
                        March<span className="text-[#D4AF37]">Lab</span>
                    </Link>

                    {/* Mobile Logo */}
                    <div className="flex-1 text-center lg:hidden">
                        <Link to="/" className="text-xl font-bold">
                            March<span className="text-[#D4AF37]">Lab</span>
                        </Link>
                    </div>

                    {/* Desktop Menu */}
                    <div className="navbar-center hidden lg:flex flex-1 justify-center">
                        <ul className="flex items-center gap-8">
                            {navLinks}
                        </ul>
                    </div>

                    {/* Right Side */}
                    <div className="navbar-end hidden lg:flex gap-2">
                        <Link
                            to="/login"
                            className="rounded py-1 border border-white/20 bg-transparent px-5 text-white transition-all duration-300 hover:border-[#D4AF37] hover:text-[#D4AF37]"
                        >
                            Login
                        </Link>

                        <Link
                            to="/register"
                            className="rounded py-1 border-0 bg-gradient-to-r from-[#D4AF37] via-[#E7C55A] to-[#B8860B] px-6 font-semibold text-black shadow-lg transition-all duration-300 hover:scale-105 hover:shadow-[#D4AF37]/40"
                        >
                            Register
                        </Link>
                    </div>
                </div>
            </Container>
        </nav>
    );
};

export default Navbar;
