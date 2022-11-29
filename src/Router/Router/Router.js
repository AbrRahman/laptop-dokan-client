import { createBrowserRouter } from "react-router-dom";
import Main from "../../layout/Main/Main";
import CategoriesProducts from "../../Pages/CategoriesProducts/CategoriesProducts";
import Home from "../../Pages/Home/Home/Home";
import NotFound from "../../Pages/Notfound/NotFound";

export const router = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
        children: [
            { path: '/', element: <Home></Home> },
            {
                path: '/category/:id',
                loader: ({ params }) => fetch(`http://localhost:8000/categories/${params.id}`),
                element: <CategoriesProducts></CategoriesProducts>
            }
        ]
    },
    {
        path: '*', element: <NotFound></NotFound>
    }
])