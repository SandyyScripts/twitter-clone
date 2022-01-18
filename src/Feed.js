import React from "react";
import TweetBox from "./TweetBox";
import Post from "./Post";
import "./Feed.css";
//import db from "./firebase";
import FlipMove from "react-flip-move";

function Feed() {
	// const [posts, setPosts] = useState([]);

	const posts = [
		{
			id: 1,
			displayName: "Twitter IN",
			username: "twitterindia",
			verified: true,
			text: "Welcome to twitter",
			image:
				"https://cdn4.iconfinder.com/data/icons/social-media-icons-the-circle-set/48/twitter_circle-512.png",
			avatar:
				"https://cdn4.iconfinder.com/data/icons/social-media-icons-the-circle-set/48/twitter_circle-512.png",
		},
		{
			id: 2,
			displayName: "wint",
			username: "dril",
			verified: true,
			text: "my followers are always onm some god damn goofy shit;  Theyre absolutely smoking that Urkel",
			avatar:
				"https://preview.redd.it/dur1xgf00ql61.jpg?width=640&crop=smart&auto=webp&s=27d769c48ab559c02571d9d7a39da7e6842e995d",
		},
		{
			id: 3,
			displayName: "giabucchi",
			username: "jaboukie",
			verified: false,
			text: "the key to happiness is lying. to others? sure. but most importantly to yourself",
			avatar:
				"https://preview.redd.it/dur1xgf00ql61.jpg?width=640&crop=smart&auto=webp&s=27d769c48ab559c02571d9d7a39da7e6842e995d",
		},
		{
			id: 4,
			displayName: "Brooks Otterlake",
			username: "i_zzzzzzzzz",
			verified: false,
			text: "Meet the TikTok mathematician changing the way we think about the vibe of the number 8",
			avatar:
				"https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/5635fcd4-ab0b-42cb-8586-ff490c934d8d/d2ll8j5-bede9088-e41a-4515-a9ae-af647b68eb91.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiJcL2ZcLzU2MzVmY2Q0LWFiMGItNDJjYi04NTg2LWZmNDkwYzkzNGQ4ZFwvZDJsbDhqNS1iZWRlOTA4OC1lNDFhLTQ1MTUtYTlhZS1hZjY0N2I2OGViOTEuanBnIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmZpbGUuZG93bmxvYWQiXX0.RENBJFLTiuaCmrJCFJGKWi9U_CGnqRZoO5ASiqhma34",
		},
		{
			id: 5,
			displayName: "skyee",
			username: "skyeeeeeeee",
			verified: false,
			text: "Direct deposit: +$1400 Me at Red lobster: uhh Let me get the whale",
			avatar: "https://miro.medium.com/max/1000/0*ztnaWQco8JhegRX0",
		},
		{
			id: 6,
			displayName: "Random Human",
			username: "RHuman",
			verified: true,
			text: "looking at the data and simply laughing",
			avatar:
				"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT5lwv9NPXAPmtkGV1hoij5FzIwiBZZaMRFHg&usqp=CAU",
		},
	];

	return (
		<div className="feed">
			<div className="feed__header">
				<h2>Home</h2>
			</div>

			<TweetBox />

			<FlipMove>
				{posts.map((post) => (
					<Post
						key={post.id}
						displayName={post.displayName}
						username={post.username}
						verified={post.verified}
						text={post.text}
						avatar={post.avatar}
						image={post.image}
					/>
				))}
			</FlipMove>
		</div>
	);
}

export default Feed;
