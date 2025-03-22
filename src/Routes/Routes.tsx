import { Routes, Route, Navigate } from 'react-router-dom';

import DashboardLandingPage from '../pages/DashboardLandingPage';
import Login from '../pages/Login';
import LayoutPublic from '../Layout/LayoutPublic';
import LayoutAdmin from '../Layout/LayoutAdmin';
import Home from '../pages/Home';
import Users from '../pages/Users';
import DashBoard from '../pages/DashBorad';
import Request from '../pages/Request';
import { useAuth } from '../Hooks/AuthContext';
import NotFound from '../pages/NotFound';

export default function AppRoutes() {
    const { isAuthenticated } = useAuth();
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
                element={isAuthenticated ? <LayoutAdmin /> : <Navigate to="/" />}
            >
                <Route index element={<Home />} />
            </Route>

            <Route
                path="/usuarios"
                element={isAuthenticated ? <LayoutAdmin /> : <Navigate to="/" />}
            >
                <Route index element={<Users />} />
            </Route>

            <Route
                path="/dashboard"
                element={isAuthenticated ? <LayoutAdmin /> : <Navigate to="/" />}
            >
                <Route index element={<DashBoard />} />
            </Route>
            <Route
                path="/request"
                element={isAuthenticated ? <LayoutAdmin /> : <Navigate to="/" />}
            >
                <Route index element={<Request />} />
            </Route>

            <Route
                path="*"
                element={<LayoutAdmin />}
            >
                <Route path="*" element={<NotFound />} />
            </Route>
        </Routes>
    );
}
