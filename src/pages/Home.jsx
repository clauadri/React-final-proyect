import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import {getClothes} from "../redux/ropa/ropa.functions"
import { useSelector } from "react-redux";

const Home = () => {

    const dispatch= useDispatch
    const {ropa, loading,error} = useSelector((state) => state.ropa)
    useEffect(() => {
      dispatch(getClothes())
    },[])

  return (



    <div className="home">
      <div>
      {loading ? (
        <img
          src="https://img.pikbest.com/png-images/20190918/cartoon-snail-loading-loading-gif-animation_2734139.png!bw700"
          alt=""
        />
      ) : (
        !error && 
        console.log(ropa.tipo)
      )}
    </div>
    </div>
  );
};

export default Home;
