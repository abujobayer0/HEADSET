import { useEffect, useState } from "react";

const useCard = () => {
  const [card, setCard] = useState([]);
  useEffect(() => {
    fetch("review.json")
      .then((res) => res.json())
      .then((data) => setCard(data));
  }, []);
  return [card, setCard];
};
export default useCard;
