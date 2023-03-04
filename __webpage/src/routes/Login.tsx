import { useEffect, useState } from "react"
import { useNavigate } from "react-router-dom"

export default (): JSX.Element => {
    const [formError, setFormError] = useState(false)
    const navigate = useNavigate()

    const handleForm = async (e: any) => {
        e.preventDefault()

        const rawData = await fetch("http://localhost:3000/login", { 
            method: "POST",
            body: JSON.stringify({
                username: e.target.elements.username.value, 
                password: e.target.elements.password.value
            }),
            headers: { "Content-Type": "application/json; charset=UTF-8" }
        })

        const data = await rawData.json()

        if (data.err || !data.content) {
            setFormError(true)
            return
        }
            
        /**
         * WARNING: do not use local storage on production
         */
        localStorage.setItem("__token", data.content.token)
        navigate("/")
    }

    useEffect(() => {
        if (localStorage.getItem("__token"))
            navigate("/")
    }, [])

    return (
        <>
            <form onSubmit={(e) => handleForm(e)}>
                <input type="text" name="username" />
                <input type="password" name="password" />
                <button type="submit">submit</button>
            </form>
            {formError && (
                <p>Check your input again, the username and password could be wrong</p>
            )}
        </>
    )
}