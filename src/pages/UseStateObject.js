import React, { useState } from "react";
import { Container } from "../GlobalStyles";

const UseStateObject = () => {
  const [myObject, setMyObject] = useState({
    Name: "Hensi",
    age: 21,
    degree: "CSE",
  });
  const changeObject = () => {
    setMyObject({ ...myObject, Name: "HensiSolanki" });
  };
  return (
    <>
      <Container>
        {/* <div className="content_wrapper"> */}
        <h1>
          Name: {myObject.Name}, age: {myObject.age}, Degree: {myObject.degree}
        </h1>
        <button onClick={changeObject}>Update</button>
        {/* </div> */}
      </Container>
    </>
  );
};

export default UseStateObject;
