
import { useEffect, useState } from "react";

const useBayer = (email) => {
    const [isBayer, setIsBayer] = useState(false);
    const [isBayerLoading, setIsBayerLoading] = useState(true);
    useEffect(() => {
        if (email) {
            fetch(`http://localhost:8000/user/bayer/${email}`)
                .then(res => res.json())
                .then(data => {
                    console.log(data);
                    setIsBayer(data.isBayer);
                    setIsBayerLoading(false);
                })
        }
    }, [email])
    return [isBayer, isBayerLoading]
};

export default useBayer;