import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/navbar";
import Home from "./pages/home";
import Login from "./pages/login";
import Register from "./pages/register";

const ReactRoutes = () => {
    return (
        <BrowserRouter>
            <Navbar />
            <main className="bg-slate-50 h-full w-full">
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/login" element={<Login />} />
                    <Route path="/register" element={<Register />} />
                </Routes>
            </main>
        </BrowserRouter>
    );
};

export default ReactRoutes;
