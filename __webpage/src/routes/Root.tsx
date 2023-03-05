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
            if (data.err) {
                setSecretContent("Your token is either expired or invalid, try to clear the token and log in again")
                return
            }

            setSecretContent(data.content)
        })()
    }, [])

    return (
        <>
            <div className="content-wrapper">
                {secretContent && (
                    <p>{secretContent}</p>
                )}

                <Token />
            </div>
        </>
    )
}