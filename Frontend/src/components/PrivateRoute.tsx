import { Navigate } from "react-router-dom";
import { useAuth } from "../data/AuthContext";
import type { JSX } from "react";

export const PrivateRoute = ({ children }: { children: JSX.Element }) => {
  const { isAuthenticated } = useAuth();
  return isAuthenticated ? children : <Navigate to="/login" />;
};
