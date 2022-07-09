import React, { useEffect, useState } from "react";
import { ethers } from "ethers";
import RedPetalsArtiFact from "../contracts/RedPetals.json";
import ContractAddress from "../contracts/contract-address.json";

const useInitializeEthers = () => {
  const [data, setData] = useState();
  const provider = new ethers.providers.Web3Provider(window.ethereum);

  useEffect(() => {
    const redPetals = new ethers.Contract(
      ContractAddress.RedPetals,
      RedPetalsArtiFact.abi,
      provider.getSigner(0)
    );

    setData(redPetals);
  }, []);

  return data;
};

export default useInitializeEthers;
