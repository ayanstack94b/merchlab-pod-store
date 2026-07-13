import { Link } from "react-router-dom";
import { FaGithub } from "react-icons/fa";
import Container from "../Container";

const featuredProducts = [
    {
        id: 1,
        name: "Oversized T-Shirt",
        image: "/images/tshirt.png",
    },
    {
        id: 2,
        name: "Classic T-Shirt",
        image: "/images/hoodie.png",
    },
    {
        id: 3,
        name: "Coffee Mug",
        image: "/images/mug.png",
    },
    {
        id: 4,
        name: "Daw Edition",
        image: "/images/daw.png",
    },
];


const Hero = () => {
    return (
        <section className="min-h-[80vh] flex items-center">
            <Container>
                <div className="grid items-center gap-12 lg:grid-cols-2">

                    {/* Left */}

                    <div>
                        <span className="rounded-full border border-[#D4AF37]/40 bg-[#D4AF37]/10 px-4 py-2 text-sm font-medium text-[#D4AF37]">
                            Print-on-Demand Store
                        </span>

                        <h1 className="mt-6 text-5xl font-black leading-tight lg:text-7xl">
                            Create.
                            <br />
                            Customize.
                            <br />
                            Wear.
                        </h1>

                        <p className="mt-6 max-w-xl text-lg leading-8 text-gray-400">
                            Discover premium print-on-demand merchandise, including apparel,
                            accessories, and lifestyle products. Built with a modern shopping
                            experience and secure online payments.
                        </p>

                        <div className="mt-10 flex flex-wrap gap-4">
                            <Link
                                to="/shop"
                                className="rounded-xl bg-gradient-to-r from-[#D4AF37] via-[#E7C55A] to-[#B8860B] px-7 py-3 font-semibold text-black transition hover:scale-105"
                            >
                                Shop Collection
                            </Link>

                            <a
                                href="https://github.com/ayanstack94b/merchlab-pod-store"
                                target="_blank"
                                rel="noreferrer"
                                className="flex items-center gap-2 rounded-xl border border-white/15 px-7 py-3 text-white transition hover:border-[#D4AF37] hover:text-[#D4AF37]"
                            >
                                <FaGithub />
                                Source Code
                            </a>
                        </div>
                    </div>

                    {/* Right */}

                    <div className="flex justify-center">
                        <div className="grid w-full max-w-lg grid-cols-2 gap-5 mt-5">
                            {featuredProducts.map((product) => (
                                <div
                                    key={product.id}
                                    className="group overflow-hidden rounded-2xl border border-white/10 bg-[#1A1A1A] transition-all duration-300 hover:-translate-y-2 hover:border-[#D4AF37] hover:shadow-xl hover:shadow-[#D4AF37]/10"
                                >
                                    <img
                                        src={product.image}
                                        alt={product.name}
                                        className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                                    />

                                </div>
                            ))}
                        </div>
                    </div>

                </div>
            </Container>
        </section>
    );
};

export default Hero;