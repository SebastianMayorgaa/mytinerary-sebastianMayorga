import { useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { signOut } from "../store/actions/authActions";

const routes = [
  { path: "/", name: "Home" },
  { path: "/cities", name: "Cities" },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const authStore = useSelector((state) => state.auth);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleLogin = () => {
    navigate("/signIn");
  };

  const handleLogout = () => {
    dispatch(signOut());
    navigate("/"); 
  };

  return (
    <nav>
      <ul className="flex justify-around items-center bg-yellow-600/30 text-stone-100 text-xl h-24 top-0 right-0 left-0 z-50">
        <li>
          <h1 className="text-4xl text-yellow-900 underline ml-4 italic">My Tinerary</h1>
        </li>
        <li>
          <img className="ml-6 h-20" src="../src/assets/world-icon.png" alt="LOGO" />
        </li>

        <div className="hidden md:flex space-x-1 text-yellow-900 items-center">
          {routes.map((route) => (
            <li className="hover:bg-lime-900/40 rounded-xl p-1" key={route.path}>
              <NavLink className="px-3" to={route.path}>{route.name}</NavLink>
            </li>
          ))}

          <li>
            {authStore.token ? (
              <button
                onClick={handleLogout}
                className="flex items-center bg-red-500/50 hover:bg-red-700 rounded-xl px-4 ml-3 py-2 text-white font-semibold"
              >
                <img className="h-8" src="../src/assets/avatar-icon.png" alt="Logout Icon" />
                <p className="pl-2">Logout</p>
              </button>
            ) : (
              <button
                onClick={handleLogin}
                className="flex items-center bg-lime-900/20 hover:bg-lime-900/40 rounded-xl px-4 ml-3 py-2"
              >
                <img className="h-8" src="../src/assets/avatar-icon.png" alt="Login Icon" />
                <p className="pl-2">Login</p>
              </button>
            )}
          </li>
        </div>

        <button className="md:hidden text-yellow-900" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? "✘" : "☰"}
        </button>

        {isOpen && (
          <div className="absolute w-full h-64 md:hidden bg-[#727D73]/75 flex flex-col shadow-lg py-2 rounded-lg top-24 p-10 z-40">
            <div className="flex flex-col gap-5 z-40 mt-10">
              {routes.map((route) => (
                <NavLink className="text-2xl" to={route.path} key={route.path}>
                  {route.name}
                </NavLink>
              ))}

              {authStore.token ? (
                <button
                  onClick={handleLogout}
                  className="w-full flex items-center justify-center bg-red-500/50 hover:bg-red-700 rounded-xl px-4 py-2 text-white font-semibold"
                >
                  <img className="h-8" src="../src/assets/avatar-icon.png" alt="Logout Icon" />
                  <p className="pl-2">Logout</p>
                </button>
              ) : (
                <button
                  onClick={handleLogin}
                  className="w-full flex items-center justify-center bg-[#D98324]/75 hover:bg-lime-900/40 rounded-xl px-4 py-2"
                >
                  <img className="h-8" src="../src/assets/avatar-icon.png" alt="Login Icon" />
                  <p className="pl-2">Login</p>
                </button>
              )}
            </div>
          </div>
        )}
      </ul>
    </nav>
  );
}
