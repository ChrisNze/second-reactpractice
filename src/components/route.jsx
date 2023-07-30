import { createBrowserRouter } from "react-router-dom";
import Homepage from "./Homepage";
import AboutPage from "./AboutPage";
import ContactUs from "./ContactUs";
import NavBar from "./NavBar";
import Users from "./Users";
import UserDetails from "./UserDetails";
import App from "../App";
import UsersPage from "./UsersPage";
import ErrorPage from "./ErrorPage";
import Login from "./Login";

const router = createBrowserRouter([
	{
		path: "/",
		element: <NavBar />,
		errorElement: <ErrorPage />,
		children: [
			//The index set to true renders the homepage as the first page when the app loads
			{ index: true, element: <Homepage /> },
			{ path: "aboutus", element: <AboutPage /> },
			{ path: "contactus", element: <ContactUs /> },
			{
				path: "users",
				element: <UsersPage />,
				children: [{ path: ":id", element: <UserDetails /> }],
			},
			{ path: "form", element: <App /> },
			{ path: "login", element: <Login /> },
		],
	},
]);

export default router;
