import data from "../resources/data/buildings.json";
import Building from "../templates/building";
// import FlexCIC from "../templates/flex-col-itemsCenter";

const Buildings = ({ points, setPoints, pps, setPps }) => {
  
  
  
  return (
    <div id="buildings" className="w-full h-1/8">
      <p className="my-6 border-b-2 border-slate">BUILDINGS</p>
      <div className="h-auto overflow-scroll max-h-[28rem]">
        {data.map((i) => (
          <Building key={i.no} points={points} setPoints={setPoints} name={i.name} price={i.price} gainPps={i.pps} amount={i.amount} pps={pps} setPps={setPps}/>
        ))}
      </div>
    </div>
  );
};

export default Buildings;
