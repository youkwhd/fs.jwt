import React from "react"
import { createBrowserRouter, RouterProvider } from "react-router-dom"
import ReactDOM from "react-dom/client"

import Root from "./routes/Root"
import Login from "./routes/Login"

import "./styles/main.css"

const router = createBrowserRouter([
    {
      path: "/",
      element: <Root />
    },
    {
        path: "/login",
        element: <Login />
    }
]);

ReactDOM.createRoot(document.getElementById("__root") as HTMLElement).render(
    <React.StrictMode>
        <RouterProvider router={router} />
    </React.StrictMode>,
)