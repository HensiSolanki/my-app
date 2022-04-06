import React, { Component } from 'react';
import { Container } from '../GlobalStyles';
// import Header from '../component/Header';

class About extends Component {
  constructor(props) {
    super(props);
    console.log('constructor');
    this.state = {
      simpleTextClone: '',
      simpleTextClone1: '',
      hideShowElement: false,
      priceText: 0,
      quantityText: 0,
      count: 0,
      celsius: '',
      fahrenheit: '',
      converter: '',
      selectCelsius: '',
      selectFahrenheit: '',
      meter: '',
      kilometer: '',
      second: '',
      minute: ''
    };
  }
  // Life cycle
  componentDidMount() {
    console.log('componentDidMount');
    this.setState({ hideShowElement: true });
  }
  componentDidUpdate(prevProps, prevState) {
    console.log('componentDidUpdate prevState ::', prevState);
  }

  // Api methods

  // Event methods
  handleChange = (e) => {
    const { name, value } = e.target;
    this.setState({ [name]: value });
  };
  onHideShowElement = () => {
    const { hideShowElement } = this.state;
    this.setState({ hideShowElement: !hideShowElement });
  };
  totalCount = (e) => {
    const { name, value } = e.target;
    this.setState({ [name]: value });
    let { priceText, quantityText } = this.state;

    if (e.target.name === 'quantityText') {
      console.log('quantityText', e.target.value);
      this.setState({ count: priceText * e.target.value });
    }
    if (e.target.name === 'priceText') {
      console.log('priceText', e.target.value);
      this.setState({ count: quantityText * e.target.value });
    }
  };
  handleCelsius = (e) => {
    const { name, value } = e.target;
    const dataf = (value * 9) / 5 + 32;
    this.setState({ [name]: value, fahrenheit: dataf });
  };
  handleFahrenheit = (e) => {
    const { name, value } = e.target;
    const datac = ((value - 32) * 5) / 9;
    this.setState({ [name]: value, celsius: datac });
  };
  handleSelectChange = (e) => {
    const { value } = e.target;
    console.log('Hello::', value);
    this.setState({ value: value });
  };
  onChangeInputValueForFifth = (e) => {
    const { name, value } = e.target;
    let finalVal;
    switch (this.state.value) {
      case 'speed':
        if (name === 'kilometer') {
          finalVal = value / 1000;
          this.setState({ [name]: value, meter: finalVal });
        } else {
          finalVal = value * 1000;
          this.setState({ [name]: value, kilometer: finalVal });
        }
        break;
      case 'temp':
        if (name === 'selectCelsius') {
          finalVal = (value * 9) / 5 + 32;
          this.setState({ [name]: value, selectFahrenheit: finalVal });
        } else {
          finalVal = ((value - 32) * 5) / 9;
          this.setState({ [name]: value, selectCelsius: finalVal });
        }
        break;
      default:
        if (name === 'second') {
          finalVal = value * 60;
          this.setState({ [name]: value, minute: finalVal });
        } else {
          finalVal = value / 60;
          this.setState({ [name]: value, second: finalVal });
        }
        break;
    }
  };

  // Render methods
  renderFirstExample = () => {
    const { simpleTextClone, simpleTextClone1 } = this.state;
    return (
      <>
        <h3>First</h3>
        <input
          type="text"
          name="simpleTextClone"
          onChange={this.handleChange}
          value={simpleTextClone}
        />
        &nbsp;
        <input
          type="text"
          name="simpleTextClone1"
          onChange={this.handleChange}
          value={simpleTextClone1}
        />
        <p>0:{simpleTextClone}</p> <p>1:{simpleTextClone1}</p>
      </>
    );
  };
  renderSecondExample = () => {
    const { hideShowElement } = this.state;
    return (
      <>
        <h3>Second</h3>
        <button onClick={this.onHideShowElement}>Hide show element</button>
        {hideShowElement ? <Child /> : null}
      </>
    );
  };
  renderThirdExample = () => {
    //let count = this.state.priceText * this.state.quantityText;
    const { count } = this.state;
    return (
      <>
        <h3>Third</h3>
        Price:
        <input
          type="number"
          name="priceText"
          onChange={this.totalCount}
          value={this.state.priceText}
        />
        &nbsp;&nbsp; Qty:
        <input
          type="number"
          name="quantityText"
          onChange={this.totalCount}
          value={this.state.quantityText}
        />
        {/* <p>Total:{priceText * quantityText}</p> */}
        <p>Total:{count}</p>
      </>
    );
  };
  renderForthExample = () => {
    const { celsius, fahrenheit } = this.state;
    return (
      <>
        <h4>Fourth</h4>
        Celsius:
        <input
          type="number"
          name="celsius"
          onChange={this.handleCelsius}
          value={celsius}
        />
        &nbsp;&nbsp;Fahrenheit:
        <input
          type="number"
          name="fahrenheit"
          onChange={this.handleFahrenheit}
          value={fahrenheit}
        />
      </>
    );
  };
  renderFifthExample = () => {
    const {
      selectCelsius,
      selectFahrenheit,
      meter,
      kilometer,
      second,
      minute,
      value
    } = this.state;

    return (
      <>
        <h3>Fifth</h3>
        <select
          name="converter"
          value={value}
          onChange={this.handleSelectChange}
        >
          <option>Select</option>
          <option value="speed">Speed</option>
          <option value="time">Time</option>
          <option value="temp">Tempreture</option>
        </select>
        <br />
        <br />

        {value === 'temp' && (
          <>
            Celsius:
            <input
              type="number"
              name="selectCelsius"
              onChange={this.onChangeInputValueForFifth}
              value={selectCelsius}
            />
            &nbsp;&nbsp;Fahrenheit:
            <input
              type="number"
              name="selectFahrenheit"
              onChange={this.onChangeInputValueForFifth}
              value={selectFahrenheit}
            />
          </>
        )}
        {value === 'speed' && (
          <>
            Meter:
            <input
              type="number"
              name="meter"
              onChange={this.onChangeInputValueForFifth}
              value={meter}
            />
            &nbsp;&nbsp;Kilometer:
            <input
              type="number"
              name="kilometer"
              onChange={this.onChangeInputValueForFifth}
              value={kilometer}
            />
          </>
        )}
        {value === 'time' && (
          <>
            Second:
            <input
              type="number"
              name="second"
              onChange={this.toSecond}
              value={second}
            />
            &nbsp;&nbsp;Minute:
            <input
              type="number"
              name="minute"
              onChange={this.toMinute}
              value={minute}
            />
          </>
        )}
      </>
    );
  };
  render() {
    console.log('render block called');
    return (
      // <div className="content_wrapper">
      <Container>
        {/* <Header activeMenu="about"/> */}
        {this.renderFirstExample()}
        {this.renderSecondExample()}
        {this.renderThirdExample()}
        {this.renderForthExample()}
        {this.renderFifthExample()}
      </Container>
      // </div>
    );
  }
}
export default About;

export class Child extends Component {
  componentWillUnmount() {
    console.log('componentWillUnmount');
  }
  render() {
    return <p>I am a child component</p>;
  }
}
