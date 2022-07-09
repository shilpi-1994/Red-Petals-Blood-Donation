//@ts-check
import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import HomePage from "../components/loginPage/home-page";
import LoginPage from "../components/loginPage/login-page";

const AppLayout = () => {
  return (
    <>
      {/* App routing structure */}
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<LoginPage />} />
          <Route path="/home" element={<HomePage />} />
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default AppLayout;
