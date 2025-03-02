import { NavLink } from "react-router-dom"

const routes = [
    {path: "/", name: "Home"},
    {path: "/cities", name: "Cities"},
    
]

function Footer() {  
    return(
        <div className="w-full min-h-24 bg-yellow-600/30 text-lg p-8 px-10 grid grid-cols-1 sm:grid-cols-1 md:grid-cols-3 lg:grid-cols-3">
            <div className="w-full pt-10">
            <div className="w-1/2 text-center">
                {routes.map((route) => (
                    <div key={route.path} className="text-xl text-yellow-800 bg-lime-900/40 hover:bg-lime-900/75 rounded-xl mb-4 p-2">
                        <NavLink to={route.path}>{route.name}</NavLink>
                    </div>
                ))}
            </div>
            <div className="">
                <p className="text-xl text-yellow-800 underline mt-5">Our Social Networks</p>
                <div className="flex mt-3">
                    <a className="mr-4" href="https://www.instagram.com/">
                        <img src="https://cdn.prod.website-files.com/64c1452cd7f7a96ac1fafe8f/650b3f396660bf319921f986_Instagram.svg" alt="instagram-logo" />
                    </a>
                    <a className="mr-4" href="https://www.facebook.com/">
                        <img src="https://cdn.prod.website-files.com/64c1452cd7f7a96ac1fafe8f/650b3f73702a5d3b177cc886_Facebook.svg" alt="facebook-logo" />
                    </a>
                    <a className="" href="https://www.whatsapp.com/">
                        <img src="https://cdn.prod.website-files.com/64c1452cd7f7a96ac1fafe8f/650b3f83f7e312e380528a72_Whats.svg" alt="whatsapp-logo" />
                    </a>
                </div>
            </div>
            </div>

            <div className="w-full pr-10 pt-10">
                <div className="flex items-center">
                    <img className="px-4 h-8 my-3" src="https://cdn.prod.website-files.com/64c1452cd7f7a96ac1fafe8f/650b3ffa830e7a035e58ec9f_Call%20Center.svg" alt="" />
                    <p>Phone to Book: +52 1234 5678</p>
                </div>
                <div className="flex items-center">
                    <img className="px-4 h-8 my-3" src="https://cdn.prod.website-files.com/64c1452cd7f7a96ac1fafe8f/650b3fe95443a2db3e0636e4_Recepci%C3%B3n.svg" alt="" />
                    <p>WhatsApp: +52 9876 5432</p>
                </div>
                <div className="flex items-center">
                    <img className="px-4 h-8 my-3" src="https://cdn.prod.website-files.com/64c1452cd7f7a96ac1fafe8f/650b4038a5170cf2cd000b6e_Ubicaci%C3%B3n.svg" alt="" />
                    <p>Av. P.º de la Reforma, Juárez, Cuauhtémoc, 06600 Ciudad de México, CDMX</p>
                </div>
            </div>
            <div className="w-full pt-10">
                <button className="w-full bg-lime-900/40 p-4 text-xl rounded-full outline-black hover:bg-lime-900/75 mb-15">
                    Contact Us
                </button>
                <div className="flex">
                    <img className="px-4 h-8 my-3" src="https://cdn.prod.website-files.com/64c1452cd7f7a96ac1fafe8f/650b4124b7dbde97e5878470_Correo.svg" alt="logo-mail" />
                    <div>
                        <h1>E-mail:</h1>
                    <p>contactus@mytinerari.com</p>
                    </div>
                </div>

            </div>

        </div>
    )
}

export default Footer