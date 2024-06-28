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
import InBody from "../pages/InBody";
import Survey from "../pages/Survey";

const router = createBrowserRouter([
  {
    element: <DefaultLayout />,
    children: [
      { path: "/", element: <Home /> },
      { path: "/login", element: <Login /> },
      { path: "/signup", element: <Signup /> },
      { path: "/inbody", element: <InBody /> },
      { path: "/survey", element: <Survey />},
      { path: "/upload", element: <Upload /> },
      { path: "/mypage", element: <MyPage /> },
      {
        path: "/userpage",
        element: <UserPage />,
        loader: async () => await isAuthenticated(),
      },
      {
        path: "/detail/:detailId",
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
