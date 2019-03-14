import React, { Component } from 'react';

class App extends Component {
  state = {
    data: []
  };

  componentDidMount(){
    const url = "https://en.wikipedia.org/w/api.php?action=opensearch&search=React&format=json&origin=*";

    fetch(url)
      .then(result => result.json())
      .then(result => {
        this.setState({
          data: result
        })
      });
  }

  render() {
    const { data } = this.state;

    const result = data.map((entry, index) => {
      return <li className="list-group-item" key={index}>{entry}</li>;
    });

    return <ul className="list-group">{result}</ul>;
  }
}

export default App;