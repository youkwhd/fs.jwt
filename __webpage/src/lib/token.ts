export type TokenCookie = {
    header: string
    payload: string
    signature: string
}

export const createToken = (rawToken: string) => {
    const tokenParsed = rawToken.split(".")

    let token: any = {}
    token.header = tokenParsed[0]
    token.payload = tokenParsed[1]
    token.signature = tokenParsed[2]

    return token as TokenCookie
}

export const toStringToken = (token: TokenCookie) => {
    return Object.entries(token).map(([_key, val]) => val).join(".")
}