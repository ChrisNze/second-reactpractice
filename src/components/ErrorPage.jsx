import React from "react";
import { isRouteErrorResponse, useRouteError } from "react-router-dom";
import NavBar from "./NavBar";

const ErrorPage = () => {
	const errorMessage = useRouteError();
	const { error, status, statusText } = errorMessage;
	// console.log(useRouteError());
	const message = isRouteErrorResponse(errorMessage); //To setup Page when the user navigates to a page that is not in our pages
	return (
		<>
			<NavBar />
			<p>Oops..................</p>
			{message ? (
				<div>
					<p>Some went wrong. Please refresh the page!!!</p>
					<p>Status Code: {status}</p>
					<p>Page {statusText}</p>
					<p>Error Message: {error.message}</p>
				</div>
			) : (
				"Unexpected Error" //To display this error message when there is any atom of error like network error or any other error apart from invalid page
			)}
		</>
	);
};

export default ErrorPage;
