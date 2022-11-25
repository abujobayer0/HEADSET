import { useEffect, useState } from "react";

const useAnswerData = () => {
  const [answer, setAnswer] = useState([]);
  useEffect(() => {
    fetch("answer.json")
      .then((res) => res.json())
      .then((data) => setAnswer(data));
  }, []);
  return [answer, setAnswer];
};

export default useAnswerData;
