// src/components/PrivateRoute.jsx
import React, { useContext } from "react";
import { Navigate } from "react-router-dom";
import { AddContext } from "../context/AddContext";

const PrivateRoute = ({ children }) => {
  const { user } = useContext(AddContext);

  if (!user) {
    return <Navigate to="/login" replace />;
  }

  return children;
};

export default PrivateRoute;
