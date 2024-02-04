import React from 'react';
import ReactDOM from 'react-dom';
import SeasonDisplay from './SeasonDisplay';


class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = { lat: null, error: null }
  }

  componentDidMount() {
    window.navigator.geolocation.getCurrentPosition(
      position => this.setState({ lat: position.coords.latitude }),
      err => this.setState({ error: err.message }));

  };
  render() {
    if (this.state.error && !this.state.lat) {
      return <div>Error:{this.state.error}</div>
    }
    if (!this.state.error && this.state.lat) {
      return <SeasonDisplay lat={this.state.lat}></SeasonDisplay>
    }
    return <div>Loading...</div>

  }


}


ReactDOM.render(<App></App >, document.getElementById('root'));
