import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { createBrowserRouter } from "react-router";
import { RouterProvider } from "react-router/dom";

import RootLayout from "./layout/RootLayout.jsx";
import Home from "./components/Home/Home.jsx";
import AllProducts from "./components/AllProducts/AllProducts.jsx";
import AuthProvider from "./context/AuthProvider.jsx";
import Register from "./components/Register/Register.jsx";
import Login from "./components/Login/Login.jsx";
import MyProducts from "./components/MyProducts/MyProducts.jsx";
import MyBids from "./components/MyBids/MyBids.jsx";
import PrivateRouter from "./components/PrivateRouter/PrivateRouter.jsx";
import ProductDetails from "./components/ProductDetails/ProductDetails.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    children: [
      {
        index: true,
        element: <Home />,
        loader: () => fetch("http://localhost:3000/latest_products"),
      },
      { path: "allProducts", element: <AllProducts /> },
      {
        path: "productDetails/:id",

        loader: ({ params }) =>
          fetch(`http://localhost:3000/products/${params.id}`),
        element: <ProductDetails />,
      },
      { path: "register", element: <Register /> },
      { path: "login", element: <Login /> },
      {
        path: "myProducts",
        element: (
          <PrivateRouter>
            <MyProducts />
          </PrivateRouter>
        ),
      },
      {
        path: "myBids",
        element: (
          <PrivateRouter>
            <MyBids />
          </PrivateRouter>
        ),
      },
    ],
  },
]);
createRoot(document.getElementById("root")).render(
  <StrictMode>
    <AuthProvider>
      <RouterProvider router={router}></RouterProvider>
    </AuthProvider>
  </StrictMode>,
);
