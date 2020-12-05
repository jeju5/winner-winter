// Import libraries
import React from 'react'          /* import what's inside of nodemodules/react */
import ReactDOM from 'react-dom';  /* import what's inside of nodemodules/react-dom */

// Create react components
const App = () => {

	const buttonText = () => {
		return 'HI';
	};

	return (
		<div>
			<label className="label" for="name">
				Enter Name:
			</label>
			<input id="name" type="text" />
			<button style={{backgroundColor: 'white', color: 'black'}}>
				{buttonText}
			</button>
		</div>
	)
}

ReactDOM.render(
	<App />,
	document.querySelector('#root')
)