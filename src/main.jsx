import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import mainStore from "./redux/store.js";
import { Provider } from "react-redux";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { Suspense, lazy } from "react";
import ProductList from "./components/ProductList.jsx";

const NotFound = lazy(() => import("./components/NotFound.jsx"));
const Cart = lazy(() => import("./components/Cart.jsx"));
const ProductDetail = lazy(() => import("./components/ProductDetail.jsx"));

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: (
      <Suspense fallback={<div>Loading...</div>}>
        <NotFound />
      </Suspense>
    ),
    children: [
      {
        path: "cart",
        element: (
          <Suspense fallback={<div>Loading...</div>}>
            <Cart />
          </Suspense>
        ),
      },
      {
        path: "/",
        element: (
          <Suspense fallback={<div>Loading...</div>}>
            <ProductList />
          </Suspense>
        ),
      },

      {
        path: "productlist/:id",
        element: (
          <Suspense fallback={<div>Loading...</div>}>
            <ProductDetail />
          </Suspense>
        ),
      },
    ],
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Provider store={mainStore}>
      <RouterProvider router={appRouter} />
    </Provider>
  </StrictMode>
);
