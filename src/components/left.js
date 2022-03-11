import FlexCIC from "../templates/flex-col-itemsCenter";
import Image from "../resources/images/Pant4ever.png";
import { useEffect } from "react";
import * as ADNotations from "@antimatter-dimensions/notations";


const Left = ({ points, setPoints, pps }) => {
  
  const mixedScientific = new ADNotations.MixedScientificNotation();
  
  // console.log(scientific.format(10000,1,1));

  
  useEffect(() => {
    const interval = setInterval(() => {
      setPoints((points) => parseFloat(points + pps / 10));
      
      // console.log(points);
      // console.log(pShown);
    }, 100);
    return () => clearInterval(interval);
  }, [pps]);

  function handleClick() {
    setPoints(points + 1);
  }

  
  return (
    <div className="w-3/12 h-full border-r-2 border-slate">
      <FlexCIC>
        <p id="points" className="w-full mt-12 mb-8 text-center">
          {mixedScientific.format(points,1 ,points % 1 === 0 ? 0 : 1)}
        </p>
        <p id="pps" className="w-full mb-4 text-center">
          {pps} pant pr. sekund
        </p>
        <img
          src={Image}
          alt="#"
          className="w-5/6 h-auto"
          onClick={handleClick}
        />
      </FlexCIC>
    </div>
  );
};

export default Left;
