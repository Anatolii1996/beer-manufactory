/* eslint-disable */

import { CiWheat } from "react-icons/ci";
import { BsFire } from "react-icons/bs";
import { GiBeerStein } from "react-icons/gi";
import GliderWrap from "../component/glider";

const Home = () => {
  

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
      
    </div>
  );
};
export default Home;
