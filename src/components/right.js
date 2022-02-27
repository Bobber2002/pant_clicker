import FlexReSB from "../templates/flex-rev-spaceBetween";
import Buyables from "./buyables";

const Right = ({points, setPoints}) => {
  return (
    <div className="w-9/12 h-full">
      <FlexReSB>
          <Buyables points={points} setPoints={setPoints}/>
      </FlexReSB>
    </div>
  );
};

export default Right;
