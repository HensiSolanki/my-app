import React, { Component } from "react";
import Routers from "./Router";
// import './App.css';
import GlobalStyles, { Container } from "./GlobalStyles";
class App extends Component {
  render() {
    console.log(`render App Component`);
    return (
      <>
       <GlobalStyles/>
        <div className="App">
          <Routers />
        </div>
      </>
    );
  }
}

export default App;
