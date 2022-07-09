import React, { useState, useEffect } from "react";
import useInitializeEthers from "../common/useInitializeEthers";
import useLoginMetamask from "../common/useLoginMetamask";
import { useNavigate } from "react-router-dom";

const HomePage = () => {
  const navigate = useNavigate();
  const data = useInitializeEthers();
  useLoginMetamask();
  const [aadhar, setAadhar] = useState();
  const [bloodGroup, setBloodGroup] = useState();
  const [city, setCity] = useState();
  const [isRegister, setIsRegister] = useState(false);

  const getAadharValue = (event) => {
    setAadhar(event.target.value);
  };

  const getBloodgroup = (event) => {
    setBloodGroup(event.target.value);
  };

  const getCity = (event) => {
    setCity(event.target.value);
  };

  const loginHandler = async () => {
    let isValid = await data.aadharExists(aadhar);
    if (isValid) {
      setIsRegister(false);
    } else {
      setIsRegister(true);
    }
  };

  const resgisterHandler = async () => {
    console.log("data", data);
    if (aadhar && bloodGroup && city) {
      await data.registerUser(aadhar, bloodGroup, city);
    }
    setIsRegister(true);
  };

  function logOutHandler() {
    navigate("/");
  }

  console.log(isRegister);

  return (
    <>
      {isRegister ? (
        <>
          <div>
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
          </div>
        </>
      ) : (
        <>
          <div>
            <p>Step 2</p>
            <div>Register with aadhar</div>
            <div>
              <input
                type="number"
                style={{ display: "block" }}
                placeholder={"Enter aadhar"}
                onChange={getAadharValue}
              ></input>
              <input
                type="text"
                style={{ display: "block" }}
                placeholder={"Enter blood group"}
                onChange={getBloodgroup}
              ></input>
              <input
                type="text"
                style={{ display: "block" }}
                placeholder={"Enter city"}
                onChange={getCity}
              ></input>
            </div>
            <button type="submit" onClick={() => resgisterHandler()}>
              Register
            </button>
          </div>
        </>
      )}
    </>
  );
};

export default HomePage;
