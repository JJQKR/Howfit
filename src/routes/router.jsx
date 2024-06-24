import { createBrowserRouter } from "react-router-dom";

import DefaultLayout from "../layouts/DefaultLayout";
import Home from "../pages/Home";
import Login from "../pages/Login";
import Signup from "../pages/Signup";
import Upload from "../pages/Upload";
import Protected from "./Protected";
import MyPage from "../pages/MyPage";
import UserPage from "../pages/UserPage";
import { isAuthenticated } from "./helpers";
import Detail from "../pages/Detail";

// To create our routes we will have few new things in react router v6,
// first one is “createBrowserRouter”,
// if you have worked with previous versions of react router
// you might have used “<BrowserRouter>”
// it is just an alternative of that which rather than behaving like a component and
// taking all the routes in its Children actually
// takes as parameters and inside the paramters of “createBrowserRouter”
// we have “createRoutesFromElements” which takes all the routes in parameters.

const router = createBrowserRouter([
  {
    element: <DefaultLayout />,
    children: [
      { path: "/", element: <Home /> },

      { path: "/login", element: <Login /> },
      { path: "/signup", element: <Signup /> },
      { path: "/upload", element: <Upload /> },
      { path: "/mypage", element: <MyPage /> },
      {
        page: "/userpage",
        element: <UserPage />,
        loader: async () => await isAuthenticated(),
      },
      {
        page: "/detail/:detailId",
        element: <Detail />,
        loader: async () => await isAuthenticated(),
      },
      {
        element: <Protected />,
        children: [
          //나중에 여기 채우세요!
        ],
      },
    ],
  },
]);

export default router;
