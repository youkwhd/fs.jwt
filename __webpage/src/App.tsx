export default (): JSX.Element => {
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

        if (data.err || !data.content)
            throw new Error("check form input")

        /**
         * WARNING: do not use local storage on production
         */
        localStorage.setItem("__token", data.content.token)
    }

    const fetchUserOnlyData = async () => {
        const token = localStorage.getItem("__token")

        if (!token)
            throw new Error("Login first")

        const rawData = await fetch("http://localhost:3000/content", {
            headers: {
                "Authorization": `Bearer ${token}`
            }
        })

        const data = await rawData.json()
        console.log(data.content)
    }

    return (
        <>
            <form onSubmit={(e) => handleForm(e)}>
                <input type="text" name="username" />
                <input type="password" name="password" />
                <button type="submit">submit</button>
            </form>
            <button onClick={() => fetchUserOnlyData()}>cookei</button>
        </>
    )
}