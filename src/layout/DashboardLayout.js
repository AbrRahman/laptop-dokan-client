import React from 'react';
import { Link, Outlet } from 'react-router-dom';
import Header from '../shared/Header/Header';


const DashboardLayout = () => {
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
                            <li><Link to="/dashboard/allusers">All users</Link></li>
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