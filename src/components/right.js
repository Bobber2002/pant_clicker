import FlexReSB from "../templates/flex-rev-spaceBetween";
import Buyables from "./buyables";

const Right = () => {
  return (
    <div className="h-full w-9/12">
      <FlexReSB>
          <Buyables />
      </FlexReSB>
    </div>
  );
};

export default Right;
