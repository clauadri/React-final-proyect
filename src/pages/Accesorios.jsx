import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { getClothes } from "../redux/ropa/ropa.functions";
import { useSelector } from "react-redux";
import "./Accesorios.scss";
import Imagen from "../componentes/Imagen";

const Home = () => {
  const dispatch = useDispatch();

  const { ropas, loading, error } = useSelector((state) => state.ropas);

  useEffect(() => {
    dispatch(getClothes());
  }, []);

  return (
    <div className="container">
    
      {loading ? (
        <img
          src="https://tbphelps.com/skin/frontend/ultimo/default/images/wating.gif"
          alt="loading"
        />
      ) : !error ? (
        
        ropas.map((ropa) => {
          return (
            
              <div className="ropa" key={ropa._id}>
                
                <img src={ropa.imagen} alt={ropa.tipo} />
                <h3>{ropa.tipo}</h3>
                <p>{ropa.precio} €</p>
                <p>Talla: {ropa.talla}</p>
              </div>
            
          );
        })
      ) : (
        <div style={{ backgroundColor: "red" }}>
          <h2>{error}</h2>
        </div>
      )}
    </div>
  );
};

export default Home;
