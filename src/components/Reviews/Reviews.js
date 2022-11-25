import React from "react";
import Card from "../Card/Card";
import useCard from "../CardData/CardData";

const Reviews = () => {
  const [card, setCard] = useCard();
  console.log(card);
  return (
    <div className="w-full mt-10 h-fit grid place-content-center place-items-center p-8 md:grid-cols-3 grid-cols-1 gap-10  items-center  bg-amber-100 relative h-screen">
      {card.map((card) => (
        <Card card={card}></Card>
      ))}
    </div>
  );
};

export default Reviews;
