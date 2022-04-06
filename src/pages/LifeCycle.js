import React, { Component } from 'react'
import { Container } from '../GlobalStyles';

export default class LifeCycle extends Component {
    constructor(props) {
        super(props);
        console.log("constructor Method");
        this.state = {
            name:"Hensi", name1: "Hensi1",
        }
     
    }
    componentDidMount(){
        // called only after render method is rendered. or when html dom is rendered. used in api call.
        // not effected when states and props are updated
        console.log("componentDidMount");
    }
    componentDidUpdate(){
        // called when states and props are updated
        console.log("componentDidUpdate");
    }
    shouldComponentUpdate(){
        // if we return true than and than 
        console.log("componentShouldUpdate");
        return true;
    }
    handleChange(){
        this.setState({name1:"Hensi Solanki",name:"Hensi"});
    }
  render() {
      const {click, name} = this.props;
      console.log("render Method from Lifecycle class component");
    return (
        <>
        <Container>

        {/* <div className="content_wrapper"> */}
        <div>LifeCycle</div>
        {/* Render method called when props is updated. */}
        <div className="container" style={{backgroundColor:"skyblue"}}>
        <h4>Update Name Using Props:</h4>
        <h5>My Name is {this.props.name}</h5>
        <button onClick = {click}>Click Me </button>
        
        {/* <button onClick = {this.handleChange}>Change</button> */}

        </div>
        <div className="container" style={{backgroundColor:"skyblue"}}>
        <h4>Update Name Using State:</h4>
        <h5>My Name is {this.state.name1}</h5>
        <button onClick = {()=>this.handleChange()}>Click Me </button>
        </div>
        {/* </div> */}
        </Container>
        </>
    )
  }
}
