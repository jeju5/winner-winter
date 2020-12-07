import './SeasonDisplay.css';
import React from 'react';


const seasonConfig = {
	summer : {
		seasonMsg: "Let's hit the beach",
		iconName: "sun"
	},
	winter : {
		seasonMsg: "Let's build a snowman",
		iconName: "snowflake"
	},
}

const getSeason = (lat, month) => {
	//  Northern hemisphere == positive latitude
	const isNorthernHemisPhere = 0 < lat;

	if (2 < month && month < 9) {
		// Mar ~ Aug: Northern hemisphere is summer
		return isNorthernHemisPhere ? 'summer' : 'winter';
	} else {
		// Sep ~ Feb: Norther hemisphere is winter
		return isNorthernHemisPhere ? 'winter' : 'summer';
	}
}

const SeasonDisplay = (props) => {
	const season = getSeason(props.latitude, new Date().getMonth());
	console.log(props.latitude);
	console.log(season);

	const {seasonMsg, iconName} = seasonConfig[season];               /* js: how to assign many variable from object */

	return (
		<div className={`season-display ${season}`}>              {/* good practice: highest container's className and component's name match */}
			<i className={`massive ${iconName} icon icon-left`} />  {/* backtick and dollar allows you to inject string variable inside the string */}
			<h1>{seasonMsg}</h1>
			<i className={`massive ${iconName} icon icon-right`} />
		</div>
	);
}

export default SeasonDisplay;