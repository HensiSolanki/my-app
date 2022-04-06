import React, { useState, useEffect } from "react";
import { Button, Container } from "../GlobalStyles";

const UseEffect = () => {
  const [count, setCount] = useState(0);
  const [data, setData] = useState(10);

  // this will call useEffect only once and not update the state
  useEffect(() => {
    console.log("useEffect");
    return () => {};
  }, []);

  // this will call useEffect every time when count and data state are updated
  useEffect(() => {
    document.title = `User (${count})`;
    console.log("useEffect for data");
    return;
  }, [data, count]);

  return (
    <>
      <Container>
        {/* <div className="content_wrapper"> */}
        <h3>From UseEffect</h3>
        <h4>{count}</h4>
        <h4>{data}</h4>
        <Button onClick={() => setCount(count + 1)}> Click Count </Button>
        <Button onClick={() => setData(data + 1)}> Click Data</Button>
        {/* </div> */}
      </Container>
    </>
  );
};

export default UseEffect;
