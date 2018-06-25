import React, { Component } from 'react';
import './App.css';
import Container from './Container';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      value: 'stars',
      caption: '',
      url: ''
    }

    this.handleChange = this.handleChange.bind(this);
    this.getRandomPicture = this.getRandomPicture.bind(this);
  }

  handleChange(e) {
    if (e.key === 'Enter') {
      e.preventDefault();
    }
    this.setState({
      value: e.target.value
    });
  }

  getRandomPicture() {
    let queryURL = 'https://images-api.nasa.gov/search?q=' + this.state.value + '&media_type=image';

    fetch(queryURL)
    .then(res => res.json())
    .then(data => {
      let picture = data.collection.items[Math.floor(Math.random()*data.collection.items.length)];

      if (picture) {
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

          if (pictureURL) {
            this.setState({
              url: pictureURL
            });
          } else {
            this.getRandomPicture();
          }
        });
      } else {
        this.getRandomPicture();
      }

    });
  }

  componentDidMount() {
    this.getRandomPicture();
    this.timerID = setInterval(
      () => this.getRandomPicture(),
      2500
    );
  }

  render() {

    return (
      <div className="App">

        <div className="header">
          <h3>
            <span id="spacesnaps">Welcome to SpaceSnaps!</span>
            <br /><br />
            <form>
              <div id="searchdiv">
                <label className="searchdiv">
                  Enter Search Term:&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                  <input id="searchbar" onKeyPress={this.handleChange} />
                </label>
              </div>
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
