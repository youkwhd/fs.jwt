import root from "./root"
import login from "./login"
import content from "./content"
import notFound from "./404"

import { Router } from "express"

type Controller = {
    [key: string]: {
        path: string
        router: Router 
    }
}

export default {
    root: {
        path: "/",
        router: root
    },
    login: {
        path: "/",
        router: login
    },
    content: {
        path: "/",
        router: content
    },
    notFound: {
        path: "*",
        router: notFound
    }
} as Controller