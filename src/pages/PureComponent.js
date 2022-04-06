import React, { PureComponent } from 'react'
import { Button, Container } from '../GlobalStyles';

export default class DemoPureComponent extends PureComponent {
    constructor() {
        super();
        this.state = {
            counter: 1
        }
    }
    // pure component only allowed to render page if and only if state updated 
    render() {
        console.log("rerender")
        return (
            <Container>
                {/* <div className="content_wrapper"> */}
                <div>PureComponent </div>
                <h5>Counter : {this.state.counter}</h5>
                <Button onClick={() => this.setState({ counter: this.state.counter + 1 })}>Click</Button>
                {/* </div> */}
            </Container>
        )
    }
}
