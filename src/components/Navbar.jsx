import { Link, NavLink } from "react-router-dom";
import { useGlobalContext } from "../hooks/useGlobalContext";
import { signOut } from "firebase/auth";
import { auth } from "../firebase/firebaseConfig";
import { toast } from "react-hot-toast";

function Navbar() {
  const { user, totalProducts } = useGlobalContext();

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
        <div className="dropdown dropdown-end">
          <div tabIndex={0} role="button" className="btn btn-ghost btn-circle">
            <div className="indicator">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
                />
              </svg>
              <span className="badge badge-sm indicator-item">
                {totalProducts}
              </span>
            </div>
          </div>
          <div
            tabIndex={0}
            className="card card-compact dropdown-content bg-base-100 z-[1] mt-3 w-52 shadow"
          >
            <div className="card-body">
              <span className="text-lg font-bold">8 Items</span>
              <span className="text-info">Subtotal: $999</span>
              <div className="card-actions">
                <button className="btn btn-primary btn-block">View cart</button>
              </div>
            </div>
          </div>
        </div>
      </div>
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
