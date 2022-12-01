import { useQuery } from '@tanstack/react-query';
import React from 'react';
import toast from 'react-hot-toast';
const AllSellers = () => {
    const { data: sellers = [], refetch } = useQuery({
        queryKey: ['sellers'],
        queryFn: async () => {
            const res = await fetch('http://localhost:8000/sellers');
            const data = await res.json();
            return data;
        }
    });
    const handelDeleteUser = id => {
        fetch(`http://localhost:8000/user/${id}`, {
            method: "DELETE"
        }).then(res => res.json())
            .then(data => {
                if (data.deletedCount > 0) {
                    toast.success("user delete success")
                    refetch()
                }

            })
    }
    console.log(sellers)
    return (
        <div>
            <div className="overflow-x-auto">
                <table className="table w-full">
                    {/* <!-- head --> */}
                    <thead>
                        <tr>
                            <th></th>
                            <th>Picture</th>
                            <th>Name</th>
                            <th>Email</th>
                            <th>Delete</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            sellers.map((seller, i) => <tr key={seller._id}>
                                <th>{i + 1}</th>
                                <td><div className="avatar">
                                    <div className="mask mask-squircle w-12 h-12">
                                        <img src={seller.image} alt="Avatar Tailwind CSS Component" />
                                    </div>
                                </div></td>
                                <td>{seller.name}</td>
                                <td>{seller.email}</td>
                                <td><button onClick={() => handelDeleteUser(seller._id)} className='btn btn-primary'>Delete</button></td>
                            </tr>)
                        }
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default AllSellers;