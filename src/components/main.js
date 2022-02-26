import FlexSB from "../templates/flex-spaceBetween";
import FlexSA from "../templates/flex-spaceAround";
import Left from "./left";
import Right from "./right";

const Main = () => {
  return (
    <FlexSA>
      <main className="h-full w-10/12 bg-[#ededed]">
        <FlexSB>
          <Left />
          <Right />
        </FlexSB>
      </main>
    </FlexSA>
  );
};

export default Main;
