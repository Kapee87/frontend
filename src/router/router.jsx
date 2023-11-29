import { createBrowserRouter } from 'react-router-dom'
import Layout from '../layouts/Layout'
import PageNotFound from '../pages/PageNotFound'
import Home from '../pages/Home'


const router = createBrowserRouter([
    {
        path: '/',
        element: <Layout />,
        errorElement: <PageNotFound />,
        children: [
            { path: '/', element: <Home /> },
            // { path: '/login', element: <Login /> },
        ]
    },
    { path: '*', element: <PageNotFound /> }
])

export default router