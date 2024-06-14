import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import Navbar from "./components/Navbar";
import About from "./pages/About";
import Products from "./pages/Products";
import Checkout from "./pages/Checkout";
import ErrorPage from "./pages/ErrorPage";

const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <>
        <Navbar />
        <Outlet />
      </>
    ),
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <Products />
      },
      {
        path: "/about",
        element: <About />
      },
      {
        path: "/checkout",
        element: <Checkout />
      }
    ],
  }
]);

export default function App() {
  return <RouterProvider router={router} />;
}