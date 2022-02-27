import { useState } from "react";

const Building = ({
  points,
  price,
  setPoints,
  name,
  pps,
  setPps,
  gainPps,
  amount,
}) => {
  const [updatePrice, setUpdatePrice] = useState(price);
  const [updateAmount, setUpdateAmount] = useState(amount);

  function handleClick() {
    points >= price && setPoints(parseFloat((points - price).toFixed(1)));
    points >= price && setPps(pps + gainPps);
    points >= price && setUpdateAmount(updateAmount + 1);
    points >= price && setUpdatePrice(parseFloat((updatePrice + updatePrice**(updateAmount*3/100)).toFixed(1)));
  } 

  return (
    <div
      className="text-center w-auto m-2 p-2 bg-[#d3d3d3] z-10"
      onClick={handleClick}
    >
      <div className="z-0 flex flex-col m-p justify-evenly">
        <span>{name}</span>
        <span>{updatePrice}</span>
      </div>
    </div>
  );
};

export default Building;
