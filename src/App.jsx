import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { About, Cart, Contact, Home, Layout, Login, Registr, Signup } from "./router/router";
import { Suspense } from "react";
import LoadingSpinner from "./components/loading/loading";
import AllProduct from "./pages/allProduct/allProduct";
import PageInfo from "./pages/pageInfo/pageInfo";
import Search from "./pages/search/search";

const App = () => {
  const router = createBrowserRouter([
    {
      path: "/login",
      element: (
        <Suspense fallback={<LoadingSpinner />}>
          <Login />
        </Suspense>
      ),
    },
    {
      path: "/registr",
      element: (
        <Suspense fallback={<LoadingSpinner />}>
          <Registr />
        </Suspense>
      ),
    },
    {
      path: "/",
      element: (
        <Suspense fallback={<LoadingSpinner />}>
          <Layout />
        </Suspense>
      ),
      children: [
        {
          index: true,
          element: (
            <Suspense fallback={<LoadingSpinner />}>
              <Home />
            </Suspense>
          ),
        },
        {
          path: "about",
          element: (
            <Suspense fallback={<LoadingSpinner />}>
              <About />
            </Suspense>
          ),
        },
        {
          path: "contact",
          element: (
            <Suspense fallback={<LoadingSpinner />}>
              <Contact />
            </Suspense>
          ),
        },
        {
          path: "search",
          element: (
            <Suspense fallback={<LoadingSpinner />}>
              <Search />
            </Suspense>
          ),
        },
        {
          path: "cart",
          element: (
            <Suspense fallback={<LoadingSpinner />}>
              <Cart />
            </Suspense>
          ),
        },
        {
          path: "product/:id",
          element: (
            <Suspense fallback={<LoadingSpinner />}>
              <PageInfo />
            </Suspense>
          ),
        },
        {
          path: "/Products",
          element: (
            <Suspense fallback={<LoadingSpinner />}>
              <AllProduct />
            </Suspense>
          ),
        },
      ],
    },
  ]);

  return <RouterProvider router={router} />;
};

export default App;
