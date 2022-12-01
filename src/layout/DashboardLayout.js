import React, { useContext } from 'react';
import { Link, Outlet } from 'react-router-dom';
import { AuthContext } from '../context/AuthProvider/AuthProvider';
import useAdmin from '../hooks/useAdmin';
import Header from '../shared/Header/Header';


const DashboardLayout = () => {
    const { user } = useContext(AuthContext)
    const [isAdmin, isAdminLoading] = useAdmin(user?.email)
    return (
        <div>
            <Header></Header>
            <div className="drawer drawer-mobile">
                <input id="dashboard-drawer" type="checkbox" className="drawer-toggle" />
                <div className="drawer-content">
                    <Outlet></Outlet>
                </div>
                <div className="drawer-side">
                    <label htmlFor="dashboard-drawer" className="drawer-overlay"></label>
                    <ul className="menu p-4 w-80 text-base-content">
                        <>
                            {
                                isAdmin && <>
                                    <li><Link to="/dashboard/allseller">All Seller</Link></li>
                                    <li><Link to="/dashboard/allbuyers">All Buyers</Link></li>
                                </>
                            }
                            <li><Link to="/dashboard/myorders">My orders</Link></li>
                            <li><Link to="/dashboard/addproduct">Add product</Link></li>
                            <li><Link to="/dashboard/myproduct">My Products</Link></li>
                        </>
                    </ul>

                </div>
            </div>
        </div>
    );
};

export default DashboardLayout;