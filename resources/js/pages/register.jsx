import { useState } from "react";
import { register } from "../services/authService";
import Input from "../components/input";
import { useNavigate } from "react-router-dom";

const Register = () => {
    const navigation = useNavigate();

    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [password_confirmation, setPasswordConfirm] = useState("");

    const [errors, setErrors] = useState([]);

    const submitHandle = async (e) => {
        e.preventDefault();
        await register({
            name: name,
            email: email,
            password: password,
            password_confirmation: password_confirmation,
        })
            .then(() => navigation("/"))
            .catch((error) => setErrors(error.response.data.errors));
    };

    return (
        <div className="w-full min-h-screen pt-10">
            <div className="max-w-md m-auto p-5 bg-white border rounded">
                <h2 className="font-medium text-xl">Register</h2>
                <form className="pt-5" onSubmit={submitHandle}>
                    <Input
                        type="text"
                        name="name"
                        label="Full Name"
                        value={name}
                        onChange={(v) => setName(v.target.value)}
                        error={errors["name"] ?? null}
                    />
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
                    <Input
                        label="Password Confirmation"
                        name="passconf"
                        type="password"
                        value={password_confirmation}
                        onChange={(v) => setPasswordConfirm(v.target.value)}
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

export default Register;
