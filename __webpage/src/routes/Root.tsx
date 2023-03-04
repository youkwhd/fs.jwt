import { useNavigate } from "react-router-dom"
import { useEffect, useState } from "react"

import Token from "../components/Token"

export default (): JSX.Element => {
    const navigate = useNavigate()
    const [secretContent, setSecretContent] = useState("")

    useEffect(() => {
        (async () => {
            const token = localStorage.getItem("__token")

            if (!token)
                navigate("/login")

            const rawData = await fetch("http://localhost:3000/content", {
                headers: {
                    "Authorization": `Bearer ${token}`
                }
            })

            const data = await rawData.json()

            if (data.err || !data.content)
                return

            setSecretContent(data.content as string)
        })()
    }, [])

    return (
        <>
            {secretContent && (
                <p>{secretContent}</p>
            )}
            <Token />
        </>
    )
}