import { useEffect } from "react";
import Glider from "glider-js";
import { cards } from "./cards";
import Card from "./card";

const GliderWrap = () => {
  useEffect(() => {
    new Glider(document.querySelector(".glider"), {
      slidesToShow: 3,
      slidesToScroll: 1,
      draggable: true,
      dots: ".dots",
      arrows: {
        prev: ".glider-prev",
        next: ".glider-next",
      },
    });
  }, []);

  return (
    <div className="glider-contain">
      <div className="glider">
        {cards.map((el, index) => {
          return <div key={index}>
            <Card  title={el.title} desription={el.description} img={el.img}/>
          </div>;
        })}
      </div>

      <button aria-label="Previous" className="glider-prev">
        «
      </button>
      <button aria-label="Next" className="glider-next">
        »
      </button>
      <div role="tablist" className="dots"></div>
    </div>
  );
};
export default GliderWrap;
