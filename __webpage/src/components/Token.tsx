export default (): JSX.Element => {
    return (
        <>
            <button onClick={() => console.log(localStorage.getItem("__token"))}>Log Token</button>
            <button onClick={() => {
                localStorage.clear()
                window.location.reload()
            }}>Clear Token & Refresh</button>
        </>
    )
}