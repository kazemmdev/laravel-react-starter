import { useSelector } from "react-redux";
import { selectUser } from "../store/userSlice";

const Home = () => {
    const { payload: user } = useSelector(selectUser);

    return (
        <div className="w-full min-h-screen pt-10">
            <div className="max-w-md m-auto p-5 bg-white border rounded">
                <h2 className="text-2xl font-bold">Welcome {user.name} </h2>
                <p className="text-gray-600">
                    This is a Laravel and React starter kit powered by redux and
                    tailwindcss
                </p>
            </div>
        </div>
    );
};

export default Home;
