import React from 'react';
import ReactDOM from 'react-dom';

class App extends React.Component {

  // constructor is automatically called with props
  constructor(prop) {
    console.log("const")
    super(prop);
    this.state = {
      latitude : null,
      errorMsg : null
    };
    
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

  render () {
    console.log("render")

    const errorBar = this.state.errorMsg ? "Error: " + this.state.errorMsg : null;

    return (
      <div>
        Latitude: {this.state.latitude}
        <br />
        {errorBar}
      </div>
    );
  }
}

ReactDOM.render(
  <App />,
  document.querySelector('#root')
)