import React, { useState } from 'react';
import Header from '../component/Header';
import { Container } from '../GlobalStyles';

function Content() {
  console.log('called');
  const [value, setValue] = useState(); /* destructuring of array*/

  const [show, setShow] = useState(true);
  const handleChange = (e) => setValue(e.target.value);
  return (
    <Container>
      
      <h3>1</h3>
      <input type="text" onChange={handleChange} />
      <p>{value}</p>
      <h3>2</h3>
      {show ? <h4>Hello World !</h4> : null}
      <button onClick={() => setShow(true)}>Show</button>&nbsp;
      <button onClick={() => setShow(false)}>Hide</button>
    </Container>
  );
}

export default Content;
