import { useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import { signUp } from "../store/actions/authActions";
import { useDispatch, useSelector } from "react-redux";
import Swal from "sweetalert2";

function SignUp() {
    const navigate = useNavigate();
    const [countries, setCountries] = useState([]);
    const dispatch = useDispatch();
    const auth = useSelector((state) => state.auth);
    const [errors, setErrors] = useState({});

    function handleNavigate() {
        navigate("/signIn");
    }

    const [register, setRegister] = useState({
        firstName: "",
        lastName: "",
        email: "",
        password: "",
        photo: "",
        country: ""
    });

    function handleChange(e) {
        const { name, value } = e.target;
        setRegister(prevData => ({
            ...prevData,
            [name]: value
        }));
    }

    useEffect(() => {
        fetch("https://restcountries.com/v3.1/region/americas")
            .then(response => response.json())
            .then(data => {
                const dataCountries = data.sort((a, b) =>
                    a.name.common.localeCompare(b.name.common)
                );
                setCountries(dataCountries);
            })
            .catch(error => console.error("Error fetching countries:", error));
    }, []);

    const handleSignUp = async (e) => {
        e.preventDefault();
        try {
            console.log("datos cargados", register);
            await dispatch(signUp(register)).unwrap();
        } catch (err) {
            console.log("errores:", err);
        }
    };

    useEffect(() => {
        if (auth.status === "succeeded") {
            Swal.fire({
                title: "Registration Successful!",
                text: "You can now sign in.",
                icon: "success",
                confirmButtonText: "OK"
            }).then(() => {
                navigate("/signIn"); 
            });
        }
    }, [auth.status, navigate]);
    

    useEffect(() => {
        if (auth.error) {
          setErrors(auth.error);
        } else {
          setErrors({});
        }
      }, [auth.error]);
      

    const status = auth.status;
    

    return (
        <div className="w-full h-[75vh] bg-[#706D54] flex justify-center items-center">
            <form onSubmit={handleSignUp} className="w-xl h-[85%] bg-[#D1BB9E] rounded-xl flex flex-col items-center justify-evenly">
                <h1 className="text-4xl text-white mb-3">Sign Up</h1>

                <div className="w-full flex justify-around text-center">
                    <div className="flex-col">
                        <p>First Name</p>
                        <input
                            className="text-center bg-white  rounded-lg"
                            name="firstName"
                            placeholder="First Name"
                            type="text"
                            value={register.firstName}
                            onChange={handleChange}
                        />
                        {errors.firstName && <p className="text-red-500 text-sm">{errors.firstName}</p>}
                    </div>

                    <div className="flex-col">
                        <p>Last Name</p>
                        <input
                            className="text-center bg-white  rounded-lg"
                            name="lastName"
                            placeholder="Last Name"
                            type="text"
                            value={register.lastName}
                            onChange={handleChange}
                        />
                        {errors.lastName && <p className="text-red-500 text-sm">{errors.lastName}</p>}
                    </div>
                </div>

                <div className="w-full flex flex-col items-center">
                    <p>Email</p>
                    <input
                        className="w-[50%] bg-white text-center rounded-lg mb-3"
                        name="email"
                        type="email"
                        placeholder="Enter your email"
                        value={register.email}
                        onChange={handleChange}
                    />
                    {errors.email && <p className="text-red-500 text-sm">{errors.email}</p>}

                    <p>Password</p>
                    <input
                        className="w-[50%] bg-white text-center rounded-lg mb-3"
                        name="password"
                        type="password"
                        placeholder="Min 8 characters, 1 UpperCase, 1 Number"
                        value={register.password}
                        onChange={handleChange}
                    />
                    {errors.password && <p className="text-red-500 text-sm">{errors.password}</p>}

                    <p>Photo</p>
                    <input
                        className="w-[50%] bg-white text-center rounded-lg mb-3"
                        name="photo"
                        type="url"
                        placeholder="Photo url"
                        value={register.photo}
                        onChange={handleChange}
                    />
                    {errors.photo && <p className="text-red-500 text-sm">{errors.photo}</p>}

                    <p>Country</p>
                    <select
                        className="w-[50%] bg-white text-center rounded-lg mb-3"
                        value={register.country}
                        onChange={handleChange}
                        name="country"
                    >
                        <option value="">Select your country</option>
                        {countries.map((country) => (
                            <option key={country.cca3} value={country.name.common}>
                                {country.name.common}
                            </option>
                        ))}
                    </select>
                    {errors.country && <p className="text-red-500 text-sm">{errors.country}</p>}
                </div>

                <button className="w-36 h-10 rounded-lg bg-[#798645]/60 text-lg" type="submit">
                    Sign Up
                </button>

                {status === 'pending' && <p>Loading...</p>}
                

                <div className="flex">
                    <p className="mr-2">Already have an account?</p>
                    <p
                        onClick={handleNavigate}
                        className="text-[#706D54] font-medium cursor-pointer"
                    >
                        Sign In
                    </p>
                </div>
            </form>
        </div>
    );
}

export default SignUp;
