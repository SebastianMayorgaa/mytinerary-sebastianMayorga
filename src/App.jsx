import "./App.css"
import { createBrowserRouter, RouterProvider } from "react-router-dom"
import Home from "./Pages/Home"
import Cities from "./Pages/Cities"
import City from "./Pages/City"
import StandarLayout from "./Layouts/StandarLayout"
import SignIn from "./Pages/SignIn"
import SignUp from "./Pages/SignUp"
import PrivateRoute from "./Components/PrivateRoute"


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
                    element: <PrivateRoute><City/></PrivateRoute>
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

function App() {

    return (
        <RouterProvider router={router} />
    )
}

export default App