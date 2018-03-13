/**
 * @version 0.0.1
 * @author [Rahul Verma](https://github.com/Verma92)
 */
// Importing React's Components and React's and Node Libraries
import React, { Component } from 'react';


class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      message: null,
      fetching: true
    };
  }

  componentDidMount() {
  this.fetchMessage()
  }

  fetchMessage()
  {
    fetch('/api')
      .then(response => {
        if (!response.ok) {
          throw new Error(`status ${response.status}`);
        }
        return response.json();
      })
      .then(json => {
        this.setState({
          message: json.message,
          fetching: false
        });
      }).catch(e => {
        this.setState({
          message: `API call failed: ${e}`,
          fetching: false
        });
      })
  }

  render() {
    return (
      <div>
          <h2>Welcome to React</h2>
        <p>
          {this.state.fetching
            ? 'Fetching message from API'
            : this.state.message}
        </p>
      </div>
    );
  }
}

export default App;
