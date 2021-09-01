import React from "react";

const Checkbox = (props) => {
  return (
    <>
      <input type="checkbox" value={props.value} for={props.value} onClick={props.onClick} />{props.category}<br/>
    </>
  );
};

export default Checkbox;
