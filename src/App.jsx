import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { Home, About, Contact, Login, Registr, ErrorPage } from "./pages";
import MainLayouts from "./layouts/MainLayouts";
import { action as RegistrAction } from "./pages/Registr";
import { action as LoginAction } from "./pages/Login";

function App() {
  const routes = createBrowserRouter([
    {
      path: "/login",
      errorElement: <ErrorPage />,
      element: <MainLayouts />,
      children: [
        {
          index: true,
          errorElement: <ErrorPage />,
          element: <Home />,
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
      ],
    },
    {
      path: "/login",
      errorElement: <ErrorPage />,
      element: <Login />,
      action: LoginAction,
    },
    {
      path: "/registr",
      errorElement: <ErrorPage />,
      element: <Registr />,
      action: RegistrAction,
    },
  ]);
  return <RouterProvider router={routes} />;
}

export default App;
