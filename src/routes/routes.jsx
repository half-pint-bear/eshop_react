import {createBrowserRouter} from "react-router";
import MainLayout from "../layouts/MainLayout.jsx";
import HomePage from "../pages/HomePage.jsx";

export const Routes = createBrowserRouter([
    {
        element: <MainLayout />,
        children: [
            {
                path: "/",
                element: <HomePage />
            }
        ]
    }
]);

export default Routes;
