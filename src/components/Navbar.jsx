import { Link, NavLink } from "react-router-dom";
import { useGlobalContext } from "../hooks/useGlobalContext";
import { signOut } from "firebase/auth";
import { auth } from "../firebase/firebaseConfig";
import { toast } from "react-hot-toast";

function Navbar() {
  const { user } = useGlobalContext();

  const signOutProfile = async () => {
    await signOut(auth);
    toast.success("Bye Bye!");
  };
  return (
    <div className="navbar bg-base-100">
      <div className="flex-1">
        <a className="btn btn-ghost text-xl">Dilmurod-Store</a>
      </div>
      <ul className="menu menu-horizontal px-1">
        <li>
          <NavLink to="./">Home</NavLink>
        </li>
        <li>
          <NavLink to="./about">About</NavLink>
        </li>
        <li>
          <NavLink to="./contact">Contact</NavLink>
        </li>
        <li>
          <NavLink to="./login">Login</NavLink>
        </li>
        <li>
          <NavLink to="./registr">Registr</NavLink>
        </li>
      </ul>
      <div className="flex-none">
        <div className="dropdown dropdown-end"></div>
        <div className="dropdown dropdown-end">
          <div
            tabIndex={0}
            role="button"
            className="btn btn-ghost btn-circle avatar"
          >
            <div className="w-10 rounded-full">
              <img alt="Tailwind CSS Navbar component" src={user.photoURL} />
            </div>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-72 p-2 shadow"
          >
            <li>
              <a className="justify-between">
                Name
                <span>{user.displayName}</span>
              </a>
            </li>
            <li>
              <a className="justify-between">
                Email
                <span>{user.email}</span>
              </a>
            </li>
            <li>
              <div className="flex justify-center">
                <button
                  onClick={signOutProfile}
                  className="btn btn-secondary w-[150px] h-[30px] "
                >
                  LogOut
                </button>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
