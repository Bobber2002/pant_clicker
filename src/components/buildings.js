import data from "../resources/data/buildings.json";
import Building from "../templates/building";
import FlexCIC from "../templates/flex-col-itemsCenter";

const Buildings = () => {
  return (
    <div id="buildings" className="w-full h-1/8">
      <p className="my-6 border-b-2 border-slate">BUILDINGS</p>
      <div className="h-auto overflow-scroll max-h-[28rem]">
        {data.map((i) => (
          <Building>
            <div className="flex flex-col justify-evenly">
              <span>{i.name}</span>
              <span>{i.price}</span>
            </div>
          </Building>
        ))}
      </div>
    </div>
  );
};

export default Buildings;
