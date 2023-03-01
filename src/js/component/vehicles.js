import React, { useEffect, useContext, useState } from "react";
import { Context } from "../../store/appContext";
import Card from "../card";
//import { Link } from "react-router-dom";

const Vehicles = () => {
  
  const { store, actions } = useContext(Context);
  
  
  useEffect(() => {
    actions.get_vehicles();
    console.log(store.cases);
  }, []);
  
  

  return (
    
    <div className="row row-cols-5 text-light mx-5 my-1">
      {store.vehicles.map((idx) => {
        return (
          //<Link to={`/casefans/${item.id}`}>
          <div className="col my-2">
            <Card
              key={idx}
              img={vehicles.img}              
              text={vehicles.title}
              tex={vehicles.text}
              
            />
          </div>
          //</Link>
        );
      })}
    </div>
  );
};
export { Vehicles };