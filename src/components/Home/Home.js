import React from "react";
import image from "../../images/image.jpg";
import Card from "../Card/Card";
import useCard from "../CardData/CardData";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCoffee, faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
const Home = () => {
  const [card, setCard] = useCard();
  return (
    <div>
      <div className="justify-between md:h-screen h-fit items-center gap-10 px-8 pb-6 pt-8 flex">
        <div className="w-1/2 flex justify-start items-start flex-col flex-wrap">
          <h1 className="md:text-8xl text-4xl font-semibold text-amber-500 ">
            HEADSET
          </h1>
          <h1 className="md:text-6xl text-2xl">BLACK FRIDAY</h1>
          <p className="md:text-xl text-xs text-gray-500">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut earum
            harum molestiae vero nostrum, optio ex consequuntur natus officiis
            voluptatem.
          </p>
          <Link
            to={"/blogs"}
            className="bg-amber-500 py-2 px-16 mt-4 rounded text-xl text-white font-semibold"
          >
            More
          </Link>
        </div>
        <div className=" flex  w-1/2 justify-end">
          <img className="w-fit relative rounded-lg" src={image} alt="" />/
        </div>
      </div>
      <div className="w-full mt-4 h-fit grid place-content-center place-items-center p-8 md:grid-cols-3 grid-cols-1 gap-10  items-center  bg-amber-500 relative h-screen">
        {card.map((card) => (
          <Card key={card._id} card={card}></Card>
        ))}
        <Link
          to={"/reviews"}
          className=" text-xl flex items-center delay-200 duration-300 hover:text-amber-500 gap-2 text-white font-semibold bg-slate-500 px-8 py-2 rounded "
        >
          Show More Reviews <FontAwesomeIcon icon={faArrowRight} />
        </Link>
      </div>
    </div>
  );
};

export default Home;
