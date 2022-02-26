import FlexCIC from "../templates/flex-col-itemsCenter";
import Image from "./resources/images/Pant4ever.png";

const Left = () => {
  return (
      <div className="h-full w-3/12 border-r-2 border-slate">
          <FlexCIC>
              <p id="points" className="w-full text-center mt-12 mb-8">points</p>
              <p id="pps" className="w-full text-center mb-2">points pr second</p>
              <img src={Image} alt="#" className="h-auto w-5/6"/>
          </FlexCIC>
      </div>
  );
};

export default Left;
