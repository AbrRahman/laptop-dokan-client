import { createBrowserRouter } from "react-router-dom";
import DashboardLayout from "../../layout/DashboardLayout";
import Main from "../../layout/Main/Main";
import Blog from "../../Pages/Blog/Blog";
import CategoriesProducts from "../../Pages/CategoriesProducts/CategoriesProducts";
import AddProduct from "../../Pages/Dashboard/AddProduct/AddProduct";
import AllBuyers from "../../Pages/Dashboard/AllBuyers/AllBuyers";
import AllSellers from "../../Pages/Dashboard/AllSellers/AllSellers";
import MyOrders from "../../Pages/Dashboard/MyOrders/MyOrders";
import MyProduct from "../../Pages/Dashboard/MyProduct/MyProduct";
import Home from "../../Pages/Home/Home/Home";
import Login from "../../Pages/Login/Login";
import NotFound from "../../Pages/Notfound/NotFound";
import Register from "../../Pages/Register/Register";
import AdminRoute from '../AdminRoute';
import BuyerRoute from '../BuyerRoute';
import PrivateRouter from "../PrivateRouter/PrivateRouter";
import SellerRoute from "../SellerRoute";
export const router = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
        children: [
            { path: '/', element: <Home></Home> },
            {
                path: '/category/:id',
                loader: ({ params }) => fetch(`http://localhost:8000/categories/${params.id}`),
                element: <PrivateRouter><CategoriesProducts></CategoriesProducts></PrivateRouter>
            },
            {
                path: '/register', element: <Register></Register>
            },
            {
                path: '/login', element: <Login></Login>
            },
            {
                path: '/blog', element: <Blog></Blog>
            }
        ]
    },
    {
        path: '/dashboard',
        element: <DashboardLayout></DashboardLayout>,
        children: [
            {
                path: "/dashboard/allseller",
                element: <AdminRoute><AllSellers></AllSellers></AdminRoute>
            },
            {
                path: "/dashboard/allbuyers",
                element: <AdminRoute><AllBuyers></AllBuyers></AdminRoute>
            },
            {
                path: "/dashboard/myorders",
                element: <BuyerRoute><MyOrders></MyOrders></BuyerRoute>
            },
            {
                path: "/dashboard/addproduct",
                element: <SellerRoute><AddProduct></AddProduct></SellerRoute>
            },
            {
                path: "/dashboard/myproduct",
                element: <SellerRoute><MyProduct></MyProduct></SellerRoute>
            },
        ]
    },
    {
        path: '*', element: <NotFound></NotFound>
    }
])