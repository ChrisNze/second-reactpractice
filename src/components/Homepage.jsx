import { useState } from "react";
import { Link, Navigate } from "react-router-dom";

const Homepage = () => {
	const { message, setMessage } = useState("");
	//How to throw an error message. The page that will be displayed will be ErrorPage.jsx
	// if (message) throw new Error("Something failed!");
	// if (message) return <Navigate to="/login" />;
	return (
		<>
			{message ? (
				<div>
					<h1>Home Page</h1>
					<Link className="nav-link" to="/aboutus">
						About Us
					</Link>
					<Link className="nav-link" to="/users">
						Users
					</Link>

					<button onClick={() => setMessage("Clicked")}>Click</button>
				</div>
			) : (
				<div>
					<Navigate to="/login" />
				</div>
			)}
		</>
	);
};

export default Homepage;
