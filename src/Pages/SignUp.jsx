import { useNavigate } from "react-router-dom";


function SignUp() {

    const navigate = useNavigate();

    function handleNavigate() {
        navigate("/signIn");
    }


    return (
        <div className="w-full h-[75vh] bg-[#706D54] flex justify-center items-center">
            <div className="w-xl h-[75%] bg-[#D1BB9E] rounded-xl flex flex-col items-center justify-evenly py-7">
                <h1 className="text-4xl text-white mb-3">Sign Up</h1>
                <div className="w-full flex justify-around text-center">
                    <div className="flex-col">
                        <p>First Name</p>
                        <input
                            className="text-center bg-white text-center rounded-lg"
                            placeholder="First Name"
                            type="text"
                            name=""
                            id="" />
                    </div>

                    <div className="flex-col">
                        <p>Last Name</p>
                        <input
                            className="text-center bg-white text-center rounded-lg"
                            placeholder="Last Name"
                            type="text"
                            name=""
                            id="" />
                    </div>
                </div>

                <div className="w-full flex flex-col items-center">
                    <p>Email</p>
                    <input
                        className="w-[50%] bg-white text-center rounded-lg mb-3"
                        type="email"
                        placeholder="Enter your email"
                        name=""
                        id=""
                    />

                    <p>Password</p>
                    <input
                        className="w-[50%] bg-white text-center rounded-lg mb-3"
                        type="password"
                        placeholder="Enter your password"
                        name=""
                        id=""
                    />

                    <p>Photo</p>
                    <input
                        className="w-[50%] bg-white text-center rounded-lg mb-3"
                        type="url"
                        placeholder="Photo url"
                        name=""
                        id=""
                    />

                    <select 
                    className="w-[50%] bg-white text-center rounded-lg mb-3"
                    placeholder="Select your Country"
                    
                    name="" 
                    id=""/>
                </div>

                <button
                    className="w-36 h-10 rounded-lg bg-[#798645]/60 text-lg"
                    type="submit">
                    Sign Up
                </button>

                <div className="flex">
                 <p className="mr-2">Already have an account?</p>
                 <p 
                 onClick={handleNavigate}
                 className="text-[#706D54] font-medium"
                 >Sign In</p>
                 </div>





            </div>




        </div>
    )
}

export default SignUp