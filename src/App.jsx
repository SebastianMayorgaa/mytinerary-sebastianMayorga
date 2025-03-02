import "./App.css"
import { createBrowserRouter, RouterProvider } from "react-router-dom"
import Home from "./Pages/Home"
import Cities from "./Pages/Cities"
import StandarLayout from "./Layouts/StandarLayout"

const dataCities = [
    {
        name: "Amsterdam",
        country: "Netherlands",
        image: "./src/assets/cities/amsterdam-netherlands.webp"
    },
    {
        name: "Bangkok",
        country: "Thailand",
        image: "./src/assets/cities/bangkok-thailand.png"
    },
    {
        name: "Barcelona",
        country: "Spain",
        image: "./src/assets/cities/barcelona-spain.jpg"
    },
    {
        name: "Cairo",
        country: "Egypt",
        image: "./src/assets/cities/cairo-egypt.webp"
    },
    {
        name: "Kyoto",
        country: "Japan",
        image: "./src/assets/cities/kyoto-japan.jpg"
    },
    {
        name: "Petra",
        country: "Jordan",
        image: "./src/assets/cities/petra-jordan.webp"
    },
    {
        name: "Rio de Janeiro",
        country: "Brazil",
        image: "./src/assets/cities/rio-brazil.webp"
    },
    {
        name: "Rome",
        country: "Italy",
        image: "./src/assets/cities/rome-italy.webp"
    },
    {
        name: "Saint Petersburg",
        country: "Russia",
        image: "./src/assets/cities/saint_petersburgo-russia.webp"
    },
    {
        name: "Seoul",
        country: "South Korea",
        image: "./src/assets/cities/seoul-southkorea.webp"
    },
    {
        name: "Sydney",
        country: "Australia",
        image: "./src/assets/cities/sydney-australia.webp"
    },
    {
        name: "Tulum",
        country: "Mexico",
        image: "./src/assets/cities/tulum-mexico.webp"
    },

]
console.log(dataCities);

const router = createBrowserRouter(
    [{
        path: "/",
        element: <StandarLayout />,
        children: [
            {
                path: "",
                element: <Home dataCities={dataCities}/>
            },
            {
                path: "cities",
                element: <Cities></Cities>
            }
        ]
    },
    {
        path: "/Cities",
        element: <Cities />
    },
    ]
)

function App() {
    return (
        <RouterProvider router={router}>

        </RouterProvider>
    )
}

export default App