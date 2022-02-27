import FlexCIC from "../templates/flex-col-itemsCenter";
import Image from "../resources/images/Pant4ever.png";

const Left = ({points, setPoints}) => {

  function handleClick() {
    setPoints(points+1);
  }

  return (
    <div className="w-3/12 h-full border-r-2 border-slate">
      <FlexCIC>
        <p id="points" className="w-full mt-12 mb-8 text-center">
          {points}
        </p>
        <p id="pps" className="w-full mb-4 text-center">
          points pr second
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