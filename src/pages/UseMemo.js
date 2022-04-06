import React, { useMemo, useState } from "react";
import { Button, Container } from "../GlobalStyles";

export const UseMemo = () => {
  const [value, setValue] = useState(0);
  const [data, setData] = useState(1);

  //  useMemo used to remove unnecessary function calls.in this when value is updated than only updateValue function is called.
  const multValue = useMemo(
    function updateValue() {
      console.log("valueUpdated");
      return value * 5;
    },
    [value]
  );

  return (
    <Container>
      {/* <div className="content_wrapper"> */}
      <div>UseMemo</div>
      <h5>Value:{value}</h5>
      <h5>Data:{data}</h5>
      <h5>Function:{multValue}</h5>

      <Button onClick={() => setValue(value + 1)}>Update Value</Button>
      <Button onClick={() => setData(data * 2)}>Update Data</Button>

      {/* </div> */}
    </Container>
  );
};
