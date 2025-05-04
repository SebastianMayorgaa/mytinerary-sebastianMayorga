import "./App.css"
import { createBrowserRouter, RouterProvider } from "react-router-dom"
import Home from "./Pages/Home"
import Cities from "./Pages/Cities"
import City from "./Pages/City"
import StandarLayout from "./Layouts/StandarLayout"
import SignIn from "./Pages/SignIn"
import SignUp from "./Pages/SignUp"
import axios from "axios"
import { useDispatch } from "react-redux"
import { setUser } from "./store/actions/authActions"
import { useEffect } from "react"

const router = createBrowserRouter(
        [{
            path: "/",
            element: <StandarLayout />,
            children: [
                {
                    path: "",
                    element: <Home />
                },
                {
                    path: "cities",
                    element: <Cities />
                },
                {
                    path: "city/:id",
                    element: <City/>
                },
                {
                    path: "/signIn",
                    element: <SignIn/>
                },
                {
                    path: "/SignUp",
                    element: <SignUp/>
                }
            ]
        }
        ]
    )


const signInWithToken = async (token) => {
        try {
            const response = await axios.get("http://localhost:8080/api/users/validateToken", {
               headers: {
                Authorization: `Bearer ${token}`
               } 
            })
            return response.data
        } catch(error){
            console.error(error);   
        }
    }

function App() {

    const dispatch = useDispatch()
     useEffect(() => {
    const token = localStorage.getItem("token")
    if (token) {
        signInWithToken(token).then((user) => {
           const authTemp = {user,token}
            dispatch(setUser(authTemp))
        })
    }
     },[dispatch])



    return (
        <RouterProvider router={router} />
    )
}

export default App