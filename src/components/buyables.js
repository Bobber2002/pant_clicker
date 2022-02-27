// import { useCallback } from "react";
import FlexCIC from "../templates/flex-col-itemsCenter";
import Buildings from "./buildings";
import Upgrades from "./upgrades";

const Buyables = ({points, setPoints, pps, setPps}) => {

  
  return (
    <div className="w-2/6 h-full px-4 border-l-2 border-slate">
      <FlexCIC>
        <Upgrades />
        <Buildings points={points} setPoints={setPoints} pps={pps} setPps={setPps}/>
      </FlexCIC>
    </div>
  );
};

export default Buyables;
