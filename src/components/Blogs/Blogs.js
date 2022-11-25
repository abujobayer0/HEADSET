import React from "react";
import Answer from "../Answer/Answer";
import useAnswerData from "../AnswerData/AnswerData";
const Blogs = () => {
  const [answer, setAnswer] = useAnswerData();
  console.log(answer);
  return (
    <div className="pt-32 flex bg-amber-100 w-screen h-full md:h-screen flex-col justify-center items-center gap-10">
      {answer.map((qq) => (
        <Answer key={qq.id} data={qq}></Answer>
      ))}
    </div>
  );
};

export default Blogs;
