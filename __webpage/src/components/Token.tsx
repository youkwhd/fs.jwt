export default (): JSX.Element => {
    return (
        <>
            <div className="token-util-wrapper">
                <button onClick={() => console.log(localStorage.getItem("__token"))}>Log Token</button>
                <button onClick={() => {
                    localStorage.clear()
                    window.location.reload()
                }}>Clear Token & Refresh</button>
            </div>
        </>
    )
}