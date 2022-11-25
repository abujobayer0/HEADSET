import React from "react";

const Answer = (props) => {
  const { question, answer } = props.data;
  return (
    <div className="flex flex-col  w-1/2 justify-center">
      <h1 className="text-xl bg-black text-white font-semibold flex justify-center items-center">
        *Question
      </h1>
      <p className="flex justify-center items-center text-sm md:text-xl font-semibold text-white bg-amber-500">
        {question}
      </p>
      <p className="bg-slate-200 p-4 ">{answer}</p>
    </div>
  );
};

export default Answer;
