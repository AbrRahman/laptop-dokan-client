import { useQuery } from '@tanstack/react-query';
import React from 'react';
import toast from 'react-hot-toast';
const AllBuyers = () => {
    const { data: buyers = [], refetch } = useQuery({
        queryKey: ['buyers'],
        queryFn: async () => {
            const res = await fetch('http://localhost:8000/buyers');
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
    console.log(buyers)
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
                            buyers.map((buyer, i) => <tr key={buyer._id}>
                                <th>{i + 1}</th>
                                <td><div className="avatar">
                                    <div className="mask mask-squircle w-12 h-12">
                                        <img src={buyer.image} alt="Avatar Tailwind CSS Component" />
                                    </div>
                                </div></td>
                                <td>{buyer.name}</td>
                                <td>{buyer.email}</td>
                                <td><button onClick={() => handelDeleteUser(buyer._id)} className='btn btn-primary'>Delete</button></td>
                            </tr>)
                        }
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default AllBuyers;