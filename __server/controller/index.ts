import root from "./root"
import login from "./login"
import content from "./content"
import notFound from "./404"

import { Router } from "express"

export type Controller = {
    [key: string]: {
        rootPath: string
        router: Router 
    }
}

export default {
    root: {
        rootPath: "/",
        router: root
    },
    login: {
        rootPath: "/",
        router: login
    },
    content: {
        rootPath: "/",
        router: content
    },
    notFound: {
        rootPath: "*",
        router: notFound
    }
} as Controller
