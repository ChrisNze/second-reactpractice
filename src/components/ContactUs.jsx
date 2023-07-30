import React from "react";
import { Link } from "react-router-dom";
// import video from "../assets/video.mp4";
// import videoImg from "../assets/nat-6.jpg";

const ContactUs = () => {
	return (
		<>
			<div>
				<h1>Contact Us </h1>
				<Link to="/">Home</Link>
			</div>

			{/* <video src={video} poster={videoImg} controls style={{ width: "800px" }}>
				Video
			</video> */}
		</>
	);
};

export default ContactUs;
