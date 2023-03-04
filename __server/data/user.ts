import type { Token } from "./token"

export type User = {
    username: string
    password: string
    token: Token | null
}

const users: User[] = [{
    "username": "youkwhd",
    /**
     * plain password: youkwhd
     */
    "password": "$2b$10$kKdaD/QwU//ACoqz7oBaceqNywOiUX4.uqfVQTnvxgmBnsfl2/tnu",
    "token": null
}]

export default users