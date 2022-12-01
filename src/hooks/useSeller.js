import { useEffect, useState } from "react";
const useSeller = (email) => {
    const [isSeller, setIsSeller] = useState(false);
    const [isAdminLoading, setIsAdminLoading] = useState(true);
    useEffect(() => {
        if (email) {
            fetch(`http://localhost:8000/user/seller/${email}`)
                .then(res => res.json())
                .then(data => {
                    console.log(data);
                    setIsSeller(data.isSeller);
                    setIsAdminLoading(false);
                })
        }
    }, [email])
    return [isSeller, isAdminLoading]
};

export default useSeller;