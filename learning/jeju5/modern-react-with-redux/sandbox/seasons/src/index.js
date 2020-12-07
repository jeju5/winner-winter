import React from 'react';
import ReactDOM from 'react-dom';
import SeasonDisplay from './SeasonDisplay';
import Spinner from './Spinner';

import "semantic-ui-css/semantic.min.css";

class App extends React.Component {
  // state initalization
  state = {
    latitude : null,
    errorMsg : null
  };

  componentDidMount() {
    window.navigator.geolocation.getCurrentPosition(
      position => {
          this.setState({
            latitude: position.coords.latitude
          })
      },
      err => {
        this.setState({
          errorMsg: err.message
        })
      }
    )
  }

  /*
  inside the React Class, defining a function is a little different
  you don't define like a vanila javascript. you follow React rules. 
  
  methodName(param1, param2) {
    ///
  }
  */
  renderContent() {
    if (this.state.latitude) {
      return <SeasonDisplay latitude = {this.state.latitude} />

    } else if (this.state.errorMsg) {
      return <div>Error: {this.state.errorMsg}</div>

    } else {
      return <Spinner message="Please Accept the location request" />

    }
  }

  render() {
    console.log("render");

    return (
      <div className="index">
        {this.renderContent()}
      </div>
    )

  }
}

ReactDOM.render(
  <App />,
  document.querySelector('#root')
)