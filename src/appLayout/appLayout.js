//@ts-check
import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import HomePage from "../components/homePage/home-page";
import LoginAadhar from "../components/loginPage/login-aadhar-page";
import LoginPage from "../components/loginPage/login-page";
import RegisterAadhar from "../components/loginPage/register-aadhar-page";

const AppLayout = () => {
  return (
    <>
      {/* App routing structure */}
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<LoginPage />} />
          <Route path="/login" element={<LoginAadhar />} />
          <Route path="/register" element={<RegisterAadhar />} />
          <Route path="/home" element={<HomePage />} />
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default AppLayout;
