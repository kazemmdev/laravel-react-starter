import { useEffect } from "react";
import { useSelector } from "react-redux";
import Spinner from "./components/spinner";
import AppRoutes from "./ReactRoutes";
import { fetchUser } from "./services/authService";
import { selectUser } from "./store/userSlice";

const ReactApp = () => {
    const user = useSelector(selectUser);

    useEffect(() => {
        if (!user) fetchUser();
    }, []);

    if (user) return <AppRoutes />;
    else return <Spinner />;
};

export default ReactApp;
