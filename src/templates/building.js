import {  useState } from "react";
import * as ADNotations from "@antimatter-dimensions/notations";

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
  const mixedScientific = new ADNotations.MixedScientificNotation();
  
  const [updatePrice, setUpdatePrice] = useState(price);
  const [updateAmount, setUpdateAmount] = useState(
    // parseInt(localStorage.getItem(name+"Amount")) ? 
    // parseInt(localStorage.getItem(name+"Amount")) :
    0);
  
  function buy(){
    setPoints(parseFloat((points - price).toFixed(1)));
    setPps(pps + gainPps);
    setUpdateAmount(updateAmount + 1);
    localStorage.setItem(name+"Amount", updateAmount+1)
    setUpdatePrice(parseFloat(updatePrice + updatePrice**(updateAmount*3/100)));
  }
  
  function handleClick() {
    points >= price && buy();
    console.log(3);
  } 
  
  return (
    <div
      className="text-center w-auto m-2 p-2 bg-[#d3d3d3] rounded-sm z-10"
      onClick={handleClick}
    >
      <div className="z-0 flex flex-col m-p justify-evenly">
        <span>{name}</span>
        <span>{mixedScientific.format(updatePrice, 1, price % 1 === 0 ? 0 : 1 )}</span>
      </div>
    </div>
  );
};

export default Building;
