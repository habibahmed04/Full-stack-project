import { Navigate } from "react-router-dom";
import { isLoggedIn, isAdmin } from "../auth";

const AdminRoute = ({ children }) => {
  if (!isLoggedIn()) {
    return <Navigate to="/login" replace />;
  }

  if (!isAdmin()) {
    return <Navigate to="/" replace />;
  }

  return children;
};

export default AdminRoute;
