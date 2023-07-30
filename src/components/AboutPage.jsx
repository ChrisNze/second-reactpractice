import React from "react";
import { Link, useNavigate } from "react-router-dom";

const AboutPage = () => {
	const navigate = useNavigate();
	return (
		<div>
			<h1>About Us</h1>
			<Link to="/">Home</Link>
			<button className="btn btn-primary" role="button" onClick={() => navigate("/contactus")}>
				Submit
			</button>
		</div>
	);
};

export default AboutPage;
