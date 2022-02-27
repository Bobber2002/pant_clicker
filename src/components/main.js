import FlexSB from "../templates/flex-spaceBetween";
import FlexSA from "../templates/flex-spaceAround";
import Left from "./left";
import Right from "./right";
import { useState } from "react";

const Main = () => {

  const [points, setPoints] = useState(0);

  return (
    <FlexSA>
      <main className="h-full w-10/12 bg-[#ededed]">
        <FlexSB>
          <Left points={points} setPoints={setPoints}/>
          <Right points={points} setPoints={setPoints}/>
        </FlexSB>
      </main>
    </FlexSA>
  );
};

export default Main;
