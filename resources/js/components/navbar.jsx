import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { selectUser } from "../store/userSlice";

const Navbar = () => {
    const user = useSelector(selectUser);

    return (
        <div className="w-full border-b bg-white sticky">
            <div className="max-w-4xl mx-auto p-4 flex justify-between">
                <div className="">
                    <Link
                        className="text-gray-600 hover:text-black transition-colors duration-300"
                        to="/"
                    >
                        Home
                    </Link>
                </div>
                <div className="flex space-x-4">
                    {!user && (
                        <>
                            <Link
                                className="text-gray-600 hover:text-black transition-colors duration-300"
                                to="/login"
                            >
                                Login
                            </Link>
                            <Link
                                className="text-gray-600 hover:text-black transition-colors duration-300"
                                to="/register"
                            >
                                Register
                            </Link>
                        </>
                    )}
                </div>
            </div>
        </div>
    );
};

export default Navbar;
