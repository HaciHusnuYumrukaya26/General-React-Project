import React from "react";
import PropType from "prop-types";
const Test = ({name, age}) => {
  return <div>{name}---{age}</div>;
};
Test.propTypes={
  name:PropType.string.isRequired,
  age:PropType.number.isRequired
}
Test.defaultProps={
  name:"haci2",
  age:88
}
export default Test;
