import { useSelector } from "react-redux";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Navbar from "./components/navbar";
import Home from "./pages/home";
import Login from "./pages/login";
import Register from "./pages/register";
import { selectUser } from "./store/userSlice";

const ReactRoutes = () => {
    const user = useSelector(selectUser);

    return (
        <BrowserRouter>
            <Navbar />
            <main className="bg-slate-50 h-full w-full">
                <Routes>
                    <Route
                        path="/"
                        element={user ? <Home /> : <Navigate to="login" />}
                    />
                    <Route
                        path="/login"
                        element={user ? <Navigate to="/" /> : <Login />}
                    />
                    <Route
                        path="/register"
                        element={user ? <Navigate to="/" /> : <Register />}
                    />
                </Routes>
            </main>
        </BrowserRouter>
    );
};

export default ReactRoutes;
