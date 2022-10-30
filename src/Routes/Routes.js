import { createBrowserRouter } from "react-router-dom";
import Main from "../layout/Main";
import Category from "../pages/Category/Category";
import Error from "../pages/Error/Error";
import FAQ from "../pages/FAQ/FAQ";
import Courses from "../pages/Home/Courses/Courses";
import Home from "../pages/Home/Home";

export const routes = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
        children:[
            {
                path: '/',
                element: <Home></Home>
            },
            {
                path: 'course/:id',
                element: <Courses></Courses>,
                loader: ({params}) => fetch(`http://localhost:5000/course/${params.id}`)
            },
            {
                path: '/category/:id',
                element: <Category></Category>,
                loader: ({params}) => fetch(`http://localhost:5000/category/${params.id}`)
            },
            {
                path: '/faq',
            element: <FAQ></FAQ>
        },
        {
            path: '*',
            element: <Error></Error>
        }
        ]
    }
])