import React, { useState } from "react";
import useInitializeEthers from "../common/useInitializeEthers";
import { useNavigate } from "react-router-dom";
import { ethers } from "ethers";

const LoginPage = () => {
  const navigate = useNavigate();
  useInitializeEthers();
  const provider = new ethers.providers.Web3Provider(window.ethereum);

  function loginHandler() {
    metaMaskLogin().then(() => {
      navigate("/home");
    });
  }

  const metaMaskLogin = async () => {
    await provider.send("eth_requestAccounts", []);
  };

  return (
    <>
      <div>
        <p>Step 1</p>
        <button type="submit" onClick={() => loginHandler()}>
          Login with metamask
        </button>
      </div>
    </>
  );
};

export default LoginPage;
