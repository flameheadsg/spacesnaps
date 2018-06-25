import React, { Component } from 'react';
import './App.css';
import Container from './Container';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      value: 'space',
      caption: '',
      url: ''
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

  componentDidMount() {
    let queryURL = 'https://images-api.nasa.gov/search?q=' + this.state.value + '&media_type=image';
    fetch(queryURL)
    .then(res => res.json())
    .then(data => {
      let picture = data.collection.items[Math.floor(Math.random()*data.collection.items.length)];
      console.log('CAPTION: ' + picture.data[0].title);
      console.log('COLLECTION: ' + picture.href);
      this.setState({
        caption: picture.data[0].title
      });

      fetch(picture.href)
      .then(res => res.json())
      .then(data => {
        let pictureURL = data.find(url => {
          return url.endsWith("small.jpg");
        });
        console.log('IMAGES: ' + data);
        console.log('IMAGE-URL: ' + pictureURL);
        this.setState({
          url: pictureURL
        });
      });
    });
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
        <Container
          caption={this.state.caption}
          url={this.state.url}
        />
      </div>
    );
  }
}

export default App;
