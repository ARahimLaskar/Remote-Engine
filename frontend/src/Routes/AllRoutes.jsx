import React from "react";
import { Routes, Route } from "react-router-dom";
import { Home } from "../pages/Home";
import { ClientPage } from "../pages/ClientPage";
import { DeveloperPage } from "../pages/DeveloperPage";
import { PrivateRoute } from "./PrivateRoute";

export const AllRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route
        path="/client"
        element={
          <PrivateRoute>
            <ClientPage />
          </PrivateRoute>
        }
      />
      <Route
        path="/developer"
        element={
          <PrivateRoute>
            <DeveloperPage />
          </PrivateRoute>
        }
      />
    </Routes>
  );
};
