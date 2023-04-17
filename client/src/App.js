import React from "react";
import { createBrowserRouter, Outlet, RouterProvider } from "react-router-dom";
import Footer from "./Components/Footer/Footer";
import NavBar from "./Components/NavBar/NavBar";
import SliderGlo from "./Components/Slider/SliderGlo";
import Home from "./Pages/Home/Home";
import ProductDetails from "./Pages/ProductDetails/ProductDetails";
import Products from "./Pages/Products/Products";
import ProductsInCart from "./Pages/ProductsInCart/ProductsInCart";

const Layout = () => {
  return (
    <div className="app">
      <NavBar />
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
      },
      {
        path: "/products/:catId",
        element: <Products />,
      },
      {
        path: "/products/cart",
        element: <ProductsInCart />,
      },
      {
        path: "/product/:id",
        element: <ProductDetails />,
      },
      // Hadi nem7iha
      {
        path: "/slider",
        element: <SliderGlo />,
      },
    ],
  },
]);

function App() {
  return (
    <div className="bg-[#F1F2F4]">
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
