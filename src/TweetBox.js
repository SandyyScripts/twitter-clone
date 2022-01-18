import React from "react";
import "./TweetBox.css";
import { Avatar, Button } from "@material-ui/core";

function TweetBox() {
	return (
		<div className="tweetBox">
			<form>
				<div className="tweetBox__input">
					<Avatar src="https://images.livemint.com/img/2021/07/20/1600x900/Capture_1626750685161_1626750694831.PNG" />
					<input placeholder="What's happening?" type="text" />
				</div>

				<Button type="submit" className="tweetBox__tweetButton">
					Tweet
				</Button>
			</form>
		</div>
	);
}

export default TweetBox;
