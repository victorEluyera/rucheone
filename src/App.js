import {
  createBrowserRouter,
  Outlet,
  RouterProvider,
  ScrollRestoration,
  useRoutes,
} from "react-router-dom";
import "./App.css";
import CheckoutHeader from "./components/checkout-header/CheckoutHeader";
import Footer from "./components/footer/Footer";
import NavBar from "./components/navbar/NavBar";
import AddressInfo from "./pages/AddressInfo";
import Brand from "./pages/Brand";
import Carts from "./pages/Carts";
import Home from "./pages/Home";
import PaymentPage from "./pages/PaymentPage";
import Shop from "./pages/Shop";
import Summary from "./pages/Summary";

const Layout = () => {
  const route = useRoutes([
    {
      path: "/",
      element: <NavBar />,
      children: [
        {
          path: "/",
          element: <Home />,
        },
        {
          path: "/carts",
          element: <Carts />,
        },
        {
          path: "/shop",
          element: <Shop />,
        },
        {
          path: "/brand/:id",
          element: <Brand />,
        },
      ],
    },
    {
      path: "/",
      element: <CheckoutHeader />,
      children: [
        {
          path: "/address-info",
          element: <AddressInfo />,
        },
        {
          path: "/delivery-payment",
          element: <PaymentPage />,
        },
        {
          path: "/summary",
          element: <Summary />,
        },
      ],
    },
  ]);

  return (
    <div>
      {route}
      <ScrollRestoration />
      <Outlet />
      <Footer />
    </div>
  );
};

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "/",
        element: <Home />,
        // loader: productsData,
      },
      {
        path: "/carts",
        element: <Carts />,
      },
      {
        path: "/shop",
        element: <Shop />,
      },
      {
        path: "/brand/:id",
        element: <Brand />,
      },

      {
        path: "/address-info",
        element: <AddressInfo />,
      },
      {
        path: "/delivery-payment",
        element: <PaymentPage />,
      },
      {
        path: "/summary",
        element: <Summary />,
      },
    ],
  },
]);

function App() {
  return (
    <div>
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
