import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { getClothes } from "../redux/ropa/ropa.functions";
import { useSelector } from "react-redux";
import "./Home.scss"
import Imagen from "../componentes/Imagen";
const Home = () => {
  const dispatch = useDispatch();

  const { ropas, loading, error } = useSelector((state) => state.ropas);

  useEffect(() => {
    dispatch(getClothes());
  }, []);

  return (
    <div>
    <Imagen imagen={'https://wemotoclothing.com/media/image/4e/f9/c6/IMG_9586u6DmmakbHgrM7.jpg'} text={'Moka Collection Capsule'}/>

    <div className="fotos">
      <div className="foto" > <img src="https://wemotoclothing.com/media/image/a8/32/6e/wemoto-aw22-shooting-men-knitwear-theo-cotton-olive-1a7jHTU2PG8Frk.jpg"  alt="foto1" ></img>
      <div className="center" >Knitwear Men</div>
       </div>
      <div className="foto" > <img src="https://wemotoclothing.com/media/image/2f/60/8a/wemoto-aw22-shooting-women-sweatwear-bird-hood-olive-3ff0FxDYX5tcnS.jpg" alt="foto2"></img>
      <div className="center" >Sweatwear Women</div>
      </div>
      
    </div>

    </div>
     
  );
};

export default Home;
