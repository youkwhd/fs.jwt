export type Token = {
    token: string
}

export const tokenParse = (rawToken: string) => {
    return rawToken.split(" ")[1]
}