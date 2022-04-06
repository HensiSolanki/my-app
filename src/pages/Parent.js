// import React, { Component } frsom 'react'
import Child from "./Child";

// export default class Parent extends Component {

//     constructor(props) {
//         super(props);
//         this.state = {
//           counter: 0,
//           counter1: 0,
//           prev: 0
//         };
//         this.prevVal = null;
//       }
//       componentDidUpdate(prevProps, prevState) {
//         console.log(`called did update`);
//         if (prevState !== this.state) {
//           if (prevState?.counter !== this.state?.counter) {
//             this.setState({ prev: prevState.counter });
//           }
//         }
//       }

//       updateCounter = (type) => {
//         var count = this.state.counter;
//         // this.setState({ pre: count });
//         type === `increment` ? count++ : count--;
//         this.setState({ counter: count });
//       };
//       updateCounter1 = (type) => {
//         this.setState({ counter1: 50 });
//       };

//   render() {
//     return (
//         <Child onClick={this.updateCounter} previous={this.state.prev} />
//     )
//   }
// }

import React from "react";
import { useEffect, useState } from "react";

const Parent = () => {
  const [counter, setCounter] = useState(0);

  useEffect(() => {
    setCounter(counter);
  }, [counter]);

  const updateCounter = (type) => {
    var count = counter;
    type === `increment` ? count++ : count--;
    setCounter(count);
  };

  return <Child updateCounter={updateCounter} counter={counter} />;
};

export default Parent;
