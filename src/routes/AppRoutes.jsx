import { Routes, Route, Navigate } from "react-router-dom";
import AppLayout from "../layouts/AppLayout";
import HomePage from "../pages/HomePage";
import AuthPage from "../pages/AuthPage";
import Login from "../Components/auth/Login";
import SignUp from "../Components/auth/SignUp";
import NotFoundPage from "../pages/NotFoundPage";

function AppRoutes() {
  return (
    <Routes>
      <Route path="/cas_bca.sit" element={<AppLayout />}>
        <Route index element={<HomePage />} />
        <Route path="auth" element={<AuthPage />}>
          <Route index element={<Navigate to="login" replace />} />
          <Route path="login" element={<Login />} />
          <Route path="signup" element={<SignUp />} />
        </Route>
      </Route>
      <Route path="*" element={<NotFoundPage />} />
    </Routes>
  );
}

export default AppRoutes;
