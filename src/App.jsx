import {
  createBrowserRouter,
  Navigate,
  RouterProvider,
} from "react-router-dom";
import {
  Home,
  About,
  Contact,
  Login,
  Registr,
  ErrorPage,
  SingleProduct,
} from "./pages";
import MainLayouts from "./layouts/MainLayouts";
import { action as RegistrAction } from "./pages/Registr";
import { action as LoginAction } from "./pages/Login";
import { loader as HomeLoader } from "./pages/Home";
import { loader as SingleProductLoader } from "./pages/SingleProduct";

import ProtectedRoutes from "./components/ProtectedRoutes";
import { useGlobalContext } from "./hooks/useGlobalContext";
import { useEffect } from "react";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "./firebase/firebaseConfig";

function App() {
  const { user, dispatch, isAuthReady } = useGlobalContext();
  const routes = createBrowserRouter([
    {
      path: "/",
      errorElement: <ErrorPage />,
      element: (
        <ProtectedRoutes user={user}>
          <MainLayouts />
        </ProtectedRoutes>
      ),
      children: [
        {
          index: true,
          errorElement: <ErrorPage />,
          element: <Home />,
          loader: HomeLoader,
        },
        {
          path: "about",
          errorElement: <ErrorPage />,
          element: <About />,
        },
        {
          path: "contact",
          errorElement: <ErrorPage />,
          element: <Contact />,
        },
        {
          path: "/singleProduct/:id",
          errorElement: <ErrorPage />,
          element: <SingleProduct />,
          loader: SingleProductLoader,
        },
      ],
    },
    {
      path: "/login",
      errorElement: <ErrorPage />,
      element: user ? <Navigate to="/" /> : <Login />,
      action: LoginAction,
    },
    {
      path: "/registr",
      errorElement: <ErrorPage />,
      element: user ? <Navigate to="/" /> : <Registr />,
      action: RegistrAction,
    },
  ]);

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      dispatch({
        type: "LOG_IN",
        payload: user,
      });
      dispatch({
        type: "IS_AUTH_READY",
      });
    });
  }, []);

  return <>{isAuthReady && <RouterProvider router={routes} />}</>;
}

export default App;
