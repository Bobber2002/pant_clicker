import { useState } from "react";

const Building = ({ points, price, setPoints, name, pps, setPps, gainPps }) => {
  const [updatePrice, setUpdatePrice] = useState(price);

  function handleClick() {
    points >= price && setPoints(points - price);
    points >= price && setUpdatePrice(updatePrice + 1);
    points >= price && setPps(pps + gainPps);
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
