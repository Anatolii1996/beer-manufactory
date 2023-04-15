import { useEffect } from "react";
import Glider from "glider-js";
import { cards } from "./cards";
import Card from "./card";

const GliderWrap = () => {
    useEffect(() => {
        const glider = new Glider(document.querySelector(".glider"), {
          slidesToShow: 3,
          slidesToScroll: 1,
          scrollLockDelay: 1000, // Задержка в миллисекундах
          duration: 3,
          draggable: true,
          dots: ".dots",
          arrows: {
            prev: ".glider-prev",
            next: ".glider-next",
          },
          // Дополнительные опции
          // ...
        });
    
        // Функция автоматической прокрутки слайдера
        const autoScroll = () => {
          glider.scrollItem(glider.slide + 1);
        };
    
        // Запустить автоматическую прокрутку с интервалом в 3000 миллисекунд (3 секунды)
        const interval = setInterval(autoScroll, 3000);
    
        // Остановить автоматическую прокрутку при размонтировании компонента
        return () => {
          clearInterval(interval);
        };
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
