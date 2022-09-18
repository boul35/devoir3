import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import EldenService from "../service/EldenService";

import CreaturesList from "./CreaturesList";



const Creatures = () => {
  const [data, setData] = useState([]);

  const getCreatures = async () => {
    const data = await EldenService.getCreatures();
      console.log("TEST");
    setData(
      await Promise.all(
        data.map((data) =>
          EldenService.getCreatures(data.name)
        )
      )
    );
  };



  useEffect(() => {
    getCreatures();
  }, []);


return getCreatures();






  
};

export default Creatures;
