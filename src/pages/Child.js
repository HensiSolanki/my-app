// import React, { PureComponent } from 'react';

// class Child extends PureComponent {
//   componentWillMount() {
//     console.log('called componentWillMount');
//   }
//   componentDidMount() {
//     console.log('called componentDidMount');
//   }

//   render() {
//     console.log(`child render`);
//     return (
//       <div>
// <p>Previous Value of Parent :{this.props.previous} </p>
// {/* <p>Previous Value of Parent :{this.props.previous?.prevState} </p> */}

// <p>Button From Child Component</p>
// <button onClick={(e) => this.props.onClick(`increment`)}>
//   Increment
// </button>
// <br />
// <br />
// <button onClick={(e) => this.props.onClick(`decrement`)}>
//   Decrement
// </button>
//       </div>
//     );
//   }
// }
// export default Child;

import React, { useEffect } from "react";
import { Button, Container } from "../GlobalStyles";

const Child = (props) => {

  useEffect(() => {
    console.log("called componentWillMount");
  }, []);

  useEffect(() => {
    console.log("called componentDidupdatedt");
  }, [props.counter]);


  return (
    // <div className="content_wrapper">
    <Container>
      <p>counter Value of Parent :{props.counter} </p>
      <p>Button From Child Component</p>
      <Button onClick={(e) => props.updateCounter(`increment`)}>
        Increment
      </Button>
      <br />
      <br />
      <Button onClick={(e) => props.updateCounter(`decrement`)}>
        Decrement
      </Button>
    </Container>
    // </div>
  );
};
export default Child;
