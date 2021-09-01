import React from "react";
const Radio = (props) => {
//   console.log(props.gender)
  return (
    <>
      <input type="radio" name="radio" value={props.value} onClick={props.onClick}/>{props.gender} <br/>
    </>
  );
};
export default Radio;
