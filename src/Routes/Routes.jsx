
import { createBrowserRouter } from "react-router-dom"
import Home from "../Pages/Home"
import Dashboard from "../Pages/Dashboard";
import Overview from "../Components/Overview";
import Analytics from "../Components/Analytics";

const router = createBrowserRouter([
    {
        path: '/',
        element: <Dashboard/>,
        children: [
            {
                path: 'overview',
                element: <Overview/>
            },
            {
                path: 'analytics',
                element: <Analytics/>
            },
            {
                path: 'starred',
                element: <h1>Starred</h1>
            },
            {
                path: 'send',
                element: <h1>Send Email</h1>
            } 
        ]

    }
])

export default router;