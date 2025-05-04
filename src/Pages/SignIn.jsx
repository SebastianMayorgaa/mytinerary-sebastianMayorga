
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { signIn } from "../store/actions/authActions";


function SignIn() {

    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const dispatch = useDispatch()
    const authStore = useSelector((state) => state.auth)

    const handleSignIn = (e) => {
        e.preventDefault()
        console.log("Se inicia submit del usuario");
        
        dispatch(signIn({email, password}))
    }

    const navigate = useNavigate();

    function handleNavigate() {
        navigate("/signup");
    }

    const status = authStore.status
    const error = authStore.error

    return (
        <div className="w-full h-[75vh] bg-[#706D54] flex justify-center items-center">
            <form onSubmit={handleSignIn}
            className="w-xl h-[75%] bg-[#D1BB9E] rounded-xl flex flex-col items-center justify-evenly py-20">
                <h1 className="text-4xl text-white">Sign In</h1>
                <input
                    className="w-[50%] h-10 bg-white text-center rounded-lg"
                    type="email"
                    placeholder="Enter your email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                />
                <input
                    className="w-[50%] h-10 bg-white text-center rounded-lg"
                    type="password"
                    placeholder="Enter your password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}

                />
                <button
                    className="w-36 h-10 rounded-lg bg-[#798645]/60"
                    type="submit">
                    Sign In
                </button>
                {status === 'pending' && <p>Loading...</p>}
                {error && <p>{error}</p>}
                <div className="flex">
                    <p className="mr-2">Dont have an account?</p>
                    <p
                        onClick={handleNavigate}
                        className="text-[#706D54] font-medium"
                    >Sign Up</p>
                </div>
            </form>
        </div>
    )
}

export default SignIn