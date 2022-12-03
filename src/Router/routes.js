import { createBrowserRouter } from "react-router-dom";
import AddService from "../components/pages/AddService/AddService";
import Blog from "../components/pages/Blog/Blog";
import ErrorPage from "../components/pages/ErrorPage/ErrorPage";
import Home from "../components/pages/Home/Home";
import Login from "../components/pages/Login/Login";
import Register from "../components/pages/Login/Register";
import MyReviews from "../components/pages/MyReviews/MyReviews";
import Services from "../components/pages/Services/Services";
import ServiceDetails from "../components/pages/ServiceDetails/ServiceDetails";
import Update from "../components/pages/Update/Update";
import Main from "../Layout/Main";
import PrivateRouter from "./PrivateRoute/PrivateRouter";

const routes = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
        loader: () => fetch("https://physiotherapy-server.vercel.app/service"),
      },
      {
        path: "/services",
        element: <Services></Services>,
        loader: () => fetch("https://physiotherapy-server.vercel.app/services"),
      },
      {
        path: "/blog",
        element: <Blog></Blog>,
      },
      {
        path: "/serviceDetails/:id",
        element: <ServiceDetails></ServiceDetails>,
        loader: ({ params }) =>
          fetch(
            `https://physiotherapy-server.vercel.app/services/${params.id}`
          ),
      },

      {
        path: "/login",
        element: <Login></Login>,
      },
      {
        path: "/register",
        element: <Register></Register>,
      },
      {
        path: "/myReviews",
        element: (
          <PrivateRouter>
            <MyReviews></MyReviews>
          </PrivateRouter>
        ),
      },
      {
        path: "/update/:id",
        element: <Update></Update>,
        loader: ({ params }) =>
          fetch(`https://physiotherapy-server.vercel.app/reviews/${params.id}`),
      },
      {
        path: "/addService",
        element: (
          <PrivateRouter>
            <AddService></AddService>
          </PrivateRouter>
        ),
      },
    ],
  },
]);

export default routes;
