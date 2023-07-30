import React from "react";
import { Navigate, useNavigate } from "react-router-dom";

const Login = () => {
	// const message = "here";
	const navigate = useNavigate();
	return (
		<div>
			<h1>Login Page</h1>
			<button
				onClick={() => {
					// message && <Navigate to="/contactus" />;
					navigate("/aboutus");
				}}>
				Click
			</button>
		</div>
	);
};

export default Login;
