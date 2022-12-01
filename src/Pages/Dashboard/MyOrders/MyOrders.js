import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../../../context/AuthProvider/AuthProvider';

const MyOrders = () => {
    const { user, loading } = useContext(AuthContext)
    const [orders, setOrders] = useState([]);
    useEffect(() => {
        fetch(`http://localhost:8000/myorder/${user?.email}`)
            .then(res => res.json())
            .then(data => { setOrders(data) })
    }, [user?.email])
    console.log(orders)
    if (loading) {
        return <loading></loading>
    }
    return (
        <div>

            <div className="overflow-x-auto">
                <table className="table w-full">
                    {/* <!-- head --> */}
                    <thead>
                        <tr>
                            <th></th>
                            <th>Product Name</th>
                            <th>Price</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            orders?.map((order, i) => <tr key={order._id}>
                                <th>{i + 1}</th>
                                <td>{order.productName}</td>
                                <td>{order.price}</td>
                            </tr>)
                        }
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default MyOrders;