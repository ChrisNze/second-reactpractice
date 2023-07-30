import { Link, Outlet } from "react-router-dom";

const Users = () => {
	const users = [
		{ id: 1, name: "User1" },
		{ id: 2, name: "User2" },
		{ id: 3, name: "User3" },
	];
	return (
		<>
			<ul className="list-group">
				{users.map((cur) => (
					<li className="list-group-item" key={cur.id}>
						<Link className="nav-link" to={`/users/${cur.id}`}>
							{cur.name}
						</Link>
					</li>
				))}
			</ul>

			<Link to="/">Home</Link>
		</>
	);
};

export default Users;
