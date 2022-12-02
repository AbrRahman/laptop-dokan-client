
import { useEffect, useState } from "react";

const useBayer = (email) => {
    const [isBayer, setIsBayer] = useState(false);
    const [isBayerLoading, setIsBayerLoading] = useState(true);
    useEffect(() => {
        if (email) {
            fetch(`https://laptop-dokan-server.vercel.app/user/bayer/${email}`)
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