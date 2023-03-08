import { useEffect, useState } from "react"
import { useNavigate, NavLink } from "react-router-dom"

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
            console.log(data)
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
            <div className="form-wrapper">
                <div>
                    <header>
                        <h1>Login</h1>
                        <p>Enjoy exclusive content</p>
                    </header>
                    <form onSubmit={(e) => handleForm(e)}>
                        <div className="form-input">
                            <label htmlFor="username">Username <span style={{ color: "red" }}>*</span></label>
                            <input type="text" name="username" required/>

                            <label htmlFor="password">Password <span style={{ color: "red" }}>*</span></label>
                            <input type="password" name="password" required />
                        </div>
                        <div className="form-forgot">
                            <label>
                                <input type="checkbox" name="remember-me" />
                                Remember me
                            </label>

                            <NavLink to={"/login"}>
                                Forgot password?
                            </NavLink>
                        </div>
                        <div className="form-submit">
                            <button type="submit">Login</button>
                        </div>
                    </form>
                    {formError && (
                        <div className="form-error">
                            <p>Error, please check the console log.</p>
                        </div>
                    )}
                </div>
            </div>
        </>
    )
}
