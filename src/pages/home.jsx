/* eslint-disable */
import { useState, useEffect } from "react";
import { CiWheat } from "react-icons/ci";
import { BsFire } from "react-icons/bs";
import { GiBeerStein } from "react-icons/gi";
import GliderWrap from "../component/glider";

const Home = () => {
  const [step, setStep] = useState(0);
  const sprites = [
    "one",
    "two",
    "three",
    "four",
    "five",
    "six",
    "seven",
    "eight",
  ];

const changeSprite=()=>{
  setStep(prev=>prev + 1);
  if (step >= 7) {
    setStep(0);
  }
}

useEffect(() => {
  const intervalId = setInterval(changeSprite, 1000);
  return () => {
    clearInterval(intervalId);
  };
}, [step]);

  return (
    <div className="container-fluid home">
      <div className="home_wrap">
        <CiWheat className="animate__animated animate__fadeInTopLeft" />
        <BsFire className="animate__animated animate__bounceIn" />
        <GiBeerStein className="animate__animated animate__fadeInBottomRight" />
      </div>
      <div className="home_carousel">
        <GliderWrap />
      </div>
      <div class={`barmen ${sprites[step]}`}></div>
    </div>
  );
};
export default Home;
