import Layout from "@/pages/Layout"
import Login from "@/pages/Login"
import { createBrowserRouter } from "react-router-dom"
import { AuthRoute } from "@/components/AuthRoutes"
import Home from "@/pages/Home"
import Article from "@/pages/Article"
import Publish from "@/pages/Publish"

// 配置路由实力
const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <AuthRoute>
        {" "}
        <Layout />
      </AuthRoute>
    ),
    children: [
        {
            path: '/home',
            element: <Home />
        },
        {
            path: '/article',
            element: <Article />
        },
        {
            path: '/publish',
            element: <Publish />
        }
    ]
  },
  {
    path: "/login",
    element: <Login />,
  },
])
export default router
