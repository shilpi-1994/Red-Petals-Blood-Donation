//@ts-check
import React from "react";
import AppLayout from "./appLayout/appLayout";
import HomePage from "./components/loginPage/home-page";
import LoginPage from "./components/loginPage/login-page";

function App() {
  return (
    <div className="App" style={{ margin: "200px" }}>
      <AppLayout />
    </div>
  );
}

export default App;
