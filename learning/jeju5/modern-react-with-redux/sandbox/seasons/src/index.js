import React from 'react';
import ReactDOM from 'react-dom';

class App extends React.Component {

	// constructor is automatically called with props
	constructor(prop) {
		console.log("const")
		super(prop);
		this.state = { latitude : null };
		
		window.navigator.geolocation.getCurrentPosition(
			position => {
					this.setState({
						latitude: position.coords.latitude
					})
			},
			err => console.log(err)
		)
	}

	render () {
		console.log("render")
		return (
			<div>
				Latitude: {this.state.latitude}
			</div>
		);
	}
}

ReactDOM.render(
	<App />,
	document.querySelector('#root')
)