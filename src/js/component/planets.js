import React, { useEffect, useContext, useState } from "react";
import { Context } from "../../store/appContext";
import Card from "../card";
//import { Link } from "react-router-dom";

const Planets = () => {
  
  const { store, actions } = useContext(Context);
  // const [cart, setCart] = useState([]);
  
  useEffect(() => {
    actions.get_planets();
    console.log(store.cases);
  }, []);
  
  

  return (
    
    <div className="row row-cols-5 text-light mx-5 my-1">
      {store.planets.map((item, idx) => {
        return (
          //<Link to={`/casefans/${item.id}`}>
          <div className="col my-2">
            <Card
              key={idx}
              img={planets.img}              
              text={planets.title}
              tex={planets.text}
              
            />
          </div>
          //</Link>
        );
      })}
    </div>
  );
};
export { Planets };