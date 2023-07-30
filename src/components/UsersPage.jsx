import React from "react";
import Users from "./Users";
import { Outlet } from "react-router-dom";

const UsersPage = () => {
	return (
		<>
			<div className="row">
				<div className="col">
					<Users />
				</div>

				<div className="col">
					<Outlet />
				</div>
			</div>
		</>
	);
};

export default UsersPage;
