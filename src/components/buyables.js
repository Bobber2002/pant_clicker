import FlexCIC from "../templates/flex-col-itemsCenter";
import Buildings from "./buildings";
import Upgrades from "./upgrades";

const Buyables = () => {
  return (
    <div className="h-full w-2/6 px-4 border-l-2 border-slate">
      <FlexCIC>
        <Upgrades />
        <Buildings />
      </FlexCIC>
    </div>
  );
};

export default Buyables;
