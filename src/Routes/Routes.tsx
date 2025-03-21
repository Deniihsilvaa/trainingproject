import { Routes, Route } from 'react-router-dom';

import DashboardLandingPage from '../pages/DashboardLandingPage';
import Login from '../pages/Login';
import LayoutPublic from '../Layout/LayoutPublic';
import LayoutAdmin from '../Layout/LayoutAdmin';
import Home from '../pages/Home';
import Users from '../pages/Users';
import DashBoard from '../pages/DashBorad';
import Request from '../pages/Request';

export default function AppRoutes() {
    return (
        <Routes>
            <Route index element={
                <LayoutPublic>
                    <DashboardLandingPage />
                </LayoutPublic>
            } />
            <Route path="/login" element={<Login />} />

            <Route
                path="/home"
                element={<LayoutAdmin />}
            >
                <Route index element={<Home />} />
            </Route>

            <Route
                path="/usuarios"
                element={<LayoutAdmin />}
            >
                <Route index element={<Users />} />
            </Route>

            <Route
                path="/dashboard"
                element={<LayoutAdmin />}
            >
                <Route index element={<DashBoard />} />
            </Route>
            <Route
                path="/request"
                element={<LayoutAdmin />}
            >
                <Route index element={<Request />} />
            </Route>
        </Routes>
    );
}
