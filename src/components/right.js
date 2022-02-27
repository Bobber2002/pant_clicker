import FlexReSB from "../templates/flex-rev-spaceBetween";
import Buyables from "./buyables";

const Right = ({points, setPoints, pps, setPps}) => {
  return (
    <div className="w-9/12 h-full">
      <FlexReSB>
          <Buyables points={points} setPoints={setPoints} pps={pps} setPps={setPps}/>
      </FlexReSB>
    </div>
  );
};

export default Right;
