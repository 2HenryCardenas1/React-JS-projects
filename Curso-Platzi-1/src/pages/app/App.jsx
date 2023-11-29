import CheckoutSideMenu from "../../components/CheckoutSideMenu/CheckoutSideMenu";
import NavBar from "../../components/NavBar/NavBar";
import {ShoppingCartProvider} from "../../context/ShoppingCartContext";
import MyAccount from "../MyAccount/MyAccount";
import MyOrder from "../MyOrder/MyOrder";
import MyOrders from "../MyOrders/MyOrders";
import NotFound from "../NotFound/NotFound";
import SignIn from "../SignIn/SignIn";
import Home from "../home/Home";
import "./App.css";

import {BrowserRouter, useRoutes} from "react-router-dom";

const AppRoutes = () => {
  const routes = useRoutes([
    {
      path: "/",
      element: <Home />,
    },
    {
      path: "/account",
      element: <MyAccount />,
    },
    {
      path: "/myOrder",
      element: <MyOrder />,
    },
    {
      path: "/myOrders",
      element: <MyOrders />,
    },
    {
      path: "/myOrders/last",
      element: <MyOrder />,
    },
    {
      path: "/myOrders/:id",
      element: <MyOrder />,
    },
    {
      path: "/signin",
      element: <SignIn />,
    },
    {
      path: "/clothes",
      element: <Home />,
    },
    {
      path: "/electronics",
      element: <Home />,
    },
    {
      path: "/furnitures",
      element: <Home />,
    },
    {
      path: "/toys",
      element: <Home />,
    },
    {
      path: "/others",
      element: <Home />,
    },

    {
      path: "*",
      element: <NotFound />,
    },
  ]);

  return routes;
};

function App() {
  return (
    <ShoppingCartProvider>
      <BrowserRouter>
        <AppRoutes />
        <NavBar />
        <CheckoutSideMenu />
      </BrowserRouter>
    </ShoppingCartProvider>
  );
}

export default App;
