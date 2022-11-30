import { useEffect, useState } from "react";

const useToken = (email) => {
    const [token, setToken] = useState();
    useEffect(() => {
        fetch(`https://stock-market-server.vercel.app/jwt?email=${email}`)
            .then(res => res.json())
            .then(data => {
                if (data.token) {
                    localStorage.setItem('laptopDokanTonen', data.token)
                    setToken(data.token)
                }
            })
    }, [email])
    return [token]
}
export default useToken