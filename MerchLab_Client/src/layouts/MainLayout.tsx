import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar/Navbar";
import Footer from "../components/Footer/Footer";


const MainLayout = () => {
    return (
        <div className="min-h-screen bg-[#0B0B0B] text-white">
            <Navbar />
            <main className="px-4 lg:px-6 py-4">
                <Outlet />
            </main>
            <Footer />
        </div>
    );
};

export default MainLayout;