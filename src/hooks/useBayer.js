
import { useEffect, useState } from "react";

const useBayer = (email) => {
    const [isBayer, setIsBayer] = useState(false);
    const [isAdminLoading, setIsAdminLoading] = useState(true);
    useEffect(() => {
        if (email) {
            fetch(`http://localhost:8000/user/bayer/${email}`)
                .then(res => res.json())
                .then(data => {
                    console.log(data);
                    setIsBayer(data.isBayer);
                    setIsAdminLoading(false);
                })
        }
    }, [email])
    return [isBayer, isAdminLoading]
};

export default useBayer;