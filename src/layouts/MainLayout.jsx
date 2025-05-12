import {Outlet} from "react-router";

export default function MainLayout() {
    return (
        <div>
            <main className="main">
                <Outlet />
            </main>
        </div>
    )
}
