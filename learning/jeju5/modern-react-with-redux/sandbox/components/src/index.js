import React from 'react';
import ReactDOM from 'react-dom';
import CommentDetail from './CommentDetail'; /* for non node_module package. specify the exact js file looaation */
import ApprovalCard from './ApprovalCard';
import faker from 'faker';

const App = () => {

	const getAvatarImg = () => {
		return "/";
		// return "https://source.unsplash.com/random";
	}

	return (
		<div className="ui container comments">
			<ApprovalCard>
				<h4>Warning!</h4>
				Just Text: What are you doing?
			</ApprovalCard>
			<ApprovalCard>
				<CommentDetail author="A1AM" timeAgo="Today 4pm" text="hi1" img={getAvatarImg()} />
			</ApprovalCard>
			<ApprovalCard>
				<CommentDetail author="B2AM" timeAgo="Today 5pm" text="hi2" img={getAvatarImg()} />
			</ApprovalCard>
			<ApprovalCard>
				<CommentDetail author="C3AM" timeAgo="Today 6pm" text="hi3" img={getAvatarImg()} />
			</ApprovalCard>
			<ApprovalCard>
				<CommentDetail author="D4AM" timeAgo="Today 7pm" text="hi4" img={getAvatarImg()} />
			</ApprovalCard>
			<ApprovalCard>
				<CommentDetail author="E5AM" timeAgo="Today 8pm" text="hi5" img={getAvatarImg()} />
			</ApprovalCard>
		</div>
	);
}

ReactDOM.render(
<App />,
document.querySelector('#root')
);