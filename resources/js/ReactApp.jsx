import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import Spinner from "./components/spinner";
import AppRoutes from "./ReactRoutes";
import { fetchUser } from "./services/authService";
import { selectUser } from "./store/userSlice";

const ReactApp = () => {
    const user = useSelector(selectUser);
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        if (!user) {
            setLoading(true);
            fetchUser()
                .then(() => setLoading(false))
                .catch(() => setLoading(false));
        }
    }, []);

    if (loading) return <Spinner />;

    return <AppRoutes />;
};

export default ReactApp;
