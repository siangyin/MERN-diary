import React from "react";
import useStyles from "./styles";
import Post from "./Post/Post";

const Posts = () => {
	const classes = useStyles();
	return (
		<div>
			POSTS
			<Post />
		</div>
	);
};

export default Posts;
