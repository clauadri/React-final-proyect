import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { getClothes } from "../redux/ropa/ropa.functions";
import { useSelector } from "react-redux";
import "./Home.scss";
import Imagen from "../componentes/Imagen";
const Home = () => {
  const dispatch = useDispatch();

  const { ropas, loading, error } = useSelector((state) => state.ropas);

  useEffect(() => {
    dispatch(getClothes());
  }, []);

  return (
    <div className="container">
    <Imagen imagen={'https://wemotoclothing.com/media/image/4e/f9/c6/IMG_9586u6DmmakbHgrM7.jpg'} text={'Moka Collection Capsule'}/>
      {loading ? (
        <img
          src="https://img.pikbest.com/png-images/20190918/cartoon-snail-loading-loading-gif-animation_2734139.png!bw700"
          alt="loading"
        />
      ) : !error ? (
        
        ropas.map((ropa) => {
          return (
            
              <div className="ropa" key={ropa._id}>
                <h3>{ropa.tipo}</h3>
                <img src={ropa.imagen} alt={ropa.tipo} />
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
