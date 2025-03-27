import "./App.css"
import { createBrowserRouter, RouterProvider } from "react-router-dom"
import useFetch from "./Components/useFetch"
import Home from "./Pages/Home"
import Cities from "./Pages/Cities"
import City from "./Pages/City"
import StandarLayout from "./Layouts/StandarLayout"


function App() {
    const { cities, loading } = useFetch("http://localhost:8080/api/cities/allCities")

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
                    element: <City cities={cities} loading={loading} />
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