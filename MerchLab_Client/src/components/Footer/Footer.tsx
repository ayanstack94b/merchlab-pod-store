import { Link } from "react-router-dom";
import { FaGithub } from "react-icons/fa";
import { IoLogoLinkedin } from "react-icons/io5";
import Container from "../Container";

const Footer = () => {
    return (
        <footer className="border-t border-white/10 bg-[#0B0B0B] mt-20">
            <Container>
                <div className="grid gap-10 py-16 md:grid-cols-3">

                    {/* Brand */}

                    <div>
                        <h2 className="text-3xl font-black tracking-widest">
                            Merch<span className="text-[#D4AF37]">Lab</span>
                        </h2>

                        <p className="mt-4 max-w-sm text-sm leading-7 text-gray-400">
                            A Full Stack TypeScript Print-on-Demand sandbox built to test
                            Razorpay and QuickInk integrations before launching the production
                            Vengeance House storefront.
                        </p>
                    </div>

                    {/* Navigation */}

                    <div>
                        <h3 className="mb-4 text-lg font-semibold text-white">
                            Navigation
                        </h3>

                        <ul className="space-y-3 text-gray-400">

                            <li>
                                <Link className="hover:text-[#D4AF37]" to="/">
                                    Home
                                </Link>
                            </li>

                            <li>
                                <Link className="hover:text-[#D4AF37]" to="/shop">
                                    Shop
                                </Link>
                            </li>

                            <li>
                                <Link className="hover:text-[#D4AF37]" to="/about">
                                    About
                                </Link>
                            </li>

                            <li>
                                <Link className="hover:text-[#D4AF37]" to="/contact">
                                    Contact
                                </Link>
                            </li>

                        </ul>
                    </div>

                    {/* Connect */}

                    <div>
                        <h3 className="mb-4 text-lg font-semibold">
                            Connect
                        </h3>

                        <div className="flex gap-4">

                            <a
                                href="https://github.com/ayanstack94b"
                                target="_blank"
                                rel="noreferrer"
                                className="rounded-xl border border-white/10 p-3 transition hover:border-[#D4AF37] hover:text-[#D4AF37]"
                            >
                                <FaGithub size={20} />
                            </a>

                            <a
                                href="https://www.linkedin.com/in/ayon-banerjee-475769340/"
                                target="_blank"
                                rel="noreferrer"
                                className="rounded-xl border border-white/10 p-3 transition hover:border-[#D4AF37] hover:text-[#D4AF37]"
                            >
                                <IoLogoLinkedin size={20} />
                            </a>

                        </div>
                    </div>

                </div>

                <div className="border-t border-white/10 py-6 text-center text-sm text-gray-500">
                    © {new Date().getFullYear()} MerchLab. Built with React & TypeScript.
                </div>
            </Container>
        </footer>
    );
};

export default Footer;