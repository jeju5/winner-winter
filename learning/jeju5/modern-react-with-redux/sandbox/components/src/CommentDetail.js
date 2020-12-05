import React from 'react';

const CommentDetail = props => {
	return (
		<div className="comment">
			<a href="/" className="avatar">
				{/*
					src={faker.image.avatar()} 
					if faker doesn't work use src="https://source.unsplash.com/random"
				*/}
				<img alt="avatar" src={props.img} />
			</a>
			<div className="content">
				<a href="/" className="author">
					{props.author}
				</a>
				<div className="metadata">
					<span className="date">
						{props.timeAgo}
					</span>
				</div>
				<div className="text">
					{props.text}
				</div>
			</div>
		</div>
	)
}

export default CommentDetail; // you need export statement so that you can import this component somewhere else