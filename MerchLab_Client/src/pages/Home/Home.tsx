import toast from "react-hot-toast";


const Home = () => {
    return (
        <div>
            Home
            <button
                onClick={() => toast.success("Welcome to MerchLab")}
            >
                Test Toast
            </button>
        </div>
    );
};

export default Home;