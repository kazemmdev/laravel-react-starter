import { useState } from "react";
import { login } from "../services/authService";
import Input from "../components/input";
import { useNavigate } from "react-router-dom";

const Login = () => {
    const navigation = useNavigate();

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const [errors, setErrors] = useState([]);

    const submitHandle = async (e) => {
        e.preventDefault();

        await login({
            email: email,
            password: password,
        })
            .then(() => navigation("/"))
            .catch((error) => setErrors(error.response.data.errors));
    };

    return (
        <div className="w-full min-h-screen pt-10">
            <div className="max-w-md m-auto p-5 bg-white border rounded">
                <h2 className="font-medium text-xl">Login</h2>
                <form className="pt-5" onSubmit={submitHandle}>
                    <Input
                        label="Email"
                        name="email"
                        type="email"
                        value={email}
                        onChange={(v) => setEmail(v.target.value)}
                        error={errors["email"] ?? null}
                    />
                    <Input
                        label="Password"
                        name="password"
                        type="password"
                        value={password}
                        onChange={(v) => setPassword(v.target.value)}
                        error={errors["password"] ?? null}
                    />
                    <button
                        type="submit"
                        className="bg-blue-500 px-4 py-2 rounded-full text-white hover:bg-blue-600 active:bg-blue-700"
                    >
                        Submit
                    </button>
                </form>
            </div>
        </div>
    );
};

export default Login;
