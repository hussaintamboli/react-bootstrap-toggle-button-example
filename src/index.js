import React from "react";
import { render } from "react-dom";
import 'bootstrap';
import "bootstrap/dist/css/bootstrap.css";

class Hello extends React.Component {
  constructor(props) {
    super(props);
    this.handlePlatformChange = this.handlePlatformChange.bind(this);
  }

  handlePlatformChange() {
    console.log(event.target.value);
  }
  
  render() {
    return (<div className="container">
      <div className="btn-group btn-group-toggle" data-toggle="buttons" onChange={this.handlePlatformChange} >
        <label className="btn btn-info active">
          <input type="radio" name="platform" value="web" autoComplete="off" /> Web
        </label>
        <label className="btn btn-info">
          <input type="radio" name="platform" value="android" autoComplete="off" /> Android
        </label>
        <label className="btn btn-info">
          <input type="radio" name="platform" value="ios" autoComplete="off" /> iOS
        </label>
      </div>
    </div>
    );
  }
}

render(
  <Hello name="World" />,
  document.getElementById('app')
);

