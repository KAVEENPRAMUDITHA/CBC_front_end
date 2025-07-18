import { useState } from "react";
import axios from "axios";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";

export default function LoginPage() {

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const navigate = useNavigate()

    function handleLogin() {
        console.log("Login button clicked");
        console.log("Email:", email);
        console.log("Password:", password);
        axios.post(import.meta.env.VITE_BACKEND_URL + "/api/user/login", { email, password })
            .then((response) => {
                console.log("Login successful:", response.data);
                toast.success("Login successful!");
                console.log("Successful response:", response);
                localStorage.setItem("token", response.data.token);

                const user = response.data.user;
                if (user.role == "admin") {
                    // Redirect to admin dashboard
                    navigate("/admin/users");
                } else {
                    // Redirect to user dashboard
                    navigate("/");
                }

            })
            .catch((error) => {
                console.error("Login failed:", error.response.data);
                toast.error(error.response.data?.message || "Login failed.");
            });

    }
    return (
        <div className=" w-full h-screen bg-red-700  bg-[url('/loginbg.jpg')] bg-cover bg-center flex">
            <div className=" w-[50%] h-full">

            </div>
            <div className="w-[50%] h-full flex items-center justify-center">
                <div className="w-[450px] h-[600px] backdrop-blur-3xl shadow-xl rounded-xl flex flex-col items-center justify-center ">
                    <input onChange={(e) => { setEmail(e.target.value) }} className="w-[400px] h-[50px] border border-white rounded-xl text-center m-[10px]" type="text" placeholder="Email" />
                    <input onChange={(e) => { setPassword(e.target.value) }} className="w-[400px] h-[50px] border border-white rounded-xl text-center m-[10px]" type="password" placeholder="password" />
                    <button onClick={handleLogin} className="w-[400px] h-[50px] bg-green-600 text-white rounded-xl cursor-pointer">Login</button>
                </div>
            </div>
        </div>
    )
}
