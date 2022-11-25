import React from "react";
const Card = ({ card }) => {
  const { age, name, email, gender, phone, picture } = card;

  return (
    <div className="text-white relative w-80 flex justify-center flex-col items-center p-0 bg-gray-500 h-96">
      <img
        className="w-3/4 shadow-lg  absolute top-1 rounded-t-full "
        src={picture}
        alt=""
      />
      <div className="absolute bottom-2 px-4">
        <h1 className="text-xl text-amber-200 font-semibold">Name: {name}</h1>
        <p className="text-slate-300">Age: {age}</p>
        <p className="text-slate-200">Gender: {gender}</p>
        <p className="text-slate-100">Email: {email}</p>
        <p className="text-slate-50">Phone: {phone}</p>
        <p className="text-black h-16 p-4 items-center rounded flex text-center font-semibold bg-amber-100">
          Lorem ipsum dolor sit amet consectetur adipisicing elit.
        </p>
      </div>
    </div>
  );
};

export default Card;
