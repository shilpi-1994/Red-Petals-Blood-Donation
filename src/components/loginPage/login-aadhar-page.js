import React, { useState, useEffect } from "react";
import useInitializeEthers from "../common/useInitializeEthers";
import useLoginMetamask from "../common/useLoginMetamask";
import { useNavigate } from "react-router-dom";

const LoginAadhar = () => {
  const navigate = useNavigate();
  const data = useInitializeEthers();
  useLoginMetamask();
  const [aadhar, setAadhar] = useState();

  const getAadharValue = (event) => {
    setAadhar(event.target.value);
  };

  const loginHandler = async () => {
    let isValid = await data.aadharExists(aadhar);
    if (isValid) {
      navigate("/home");
    } else {
      navigate("/register");
    }
  };

  function logOutHandler() {
    navigate("/");
  }

  return (
    <>
      <div>
        <hr />
        <p>Step 2</p>
        <div>Login with aadhar</div>
        <input type="number" onChange={getAadharValue}></input>
      </div>
      <button type="submit" onClick={() => loginHandler()}>
        Login
      </button>
      <button type="submit" onClick={() => logOutHandler()}>
        Logout
      </button>
    </>
  );
};

export default LoginAadhar;
