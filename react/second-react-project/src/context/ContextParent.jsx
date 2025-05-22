import React, { useContext } from "react";
import { PropertyContext } from "./PropertyContext";

//provider -GrandParentContext
//consumer -Child

const GrandParentContext = () => {
    let property = "warangal";
  return (
    <>
     <div>GrandParent</div>
     <PropertyContext.Provider value={property}>
     <Parent />
     </PropertyContext.Provider>
    </>
  );
};
const Parent = () => {
    return (
      <div>
      <div>Parent</div>
      <Child/>
      </div>
    );
  };
  const Child = () => {
    return (
    <div>
    <div>Child</div>
    <GrandChild/>
    </div>
    );
  };
  const GrandChild = () => {
    let data = useContext(PropertyContext);
    return (
    <>
    <div>{data} from GrandChild</div>
      <div>GrandChild</div>
    </>
    );
  };
export default GrandParentContext;