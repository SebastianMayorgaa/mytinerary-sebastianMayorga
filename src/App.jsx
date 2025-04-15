import "./App.css"
import { createBrowserRouter, RouterProvider } from "react-router-dom"
import Home from "./Pages/Home"
import Cities from "./Pages/Cities"
import City from "./Pages/City"
import StandarLayout from "./Layouts/StandarLayout"


function App() {

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
                }
            ]
        }
        ]
    )

    return (
        <RouterProvider router={router} />
    )
}

export default App