import React, { Component } from 'react';
import './App.css';
import Container from './Container';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      value: ''
    }

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(e) {
    this.setState({
      value: e.target.value
    });
  }

  handleSubmit(e) {
    e.preventDefault();
    window.alert('Search initiated successfully!');
  }

  render() {

    return (
      <div className="App">

        <div className="header">
          <h3>
            <span id="spacesnaps">Welcome to SpaceSnaps!</span>
            <br /><br />
            <form>
              <label>
                Enter Search Term:&nbsp;&nbsp;
                <input onChange={this.handleChange} value={this.state.value}></input>
              </label>
              &nbsp;&nbsp;&nbsp;
              <input id="searchbtn" type="submit" onClick={this.handleSubmit} value="Search" />
            </form>
          </h3>
        </div>

        <br />
        <Container />
      </div>
    );
  }
}

export default App;
