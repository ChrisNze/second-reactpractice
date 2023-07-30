import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { NavLink, Outlet } from "react-router-dom";
//Note that Link and NavLink are the same just that NavLink adds the active Class to our element
function ColorSchemesExample() {
	return (
		<>
			<Navbar bg="light" variant="light">
				<Container>
					<Navbar.Brand>Navbar</Navbar.Brand>
					<Nav className="me-auto">
						<NavLink className="nav-link" to="/">
							Home
						</NavLink>

						<NavLink className="nav-link" to="/aboutus">
							About Us
						</NavLink>

						<NavLink className="nav-link" to="/contactus">
							Contact Us
						</NavLink>

						<NavLink className="nav-link" to="/users">
							Users
						</NavLink>
						<NavLink className="nav-link" to="/form">
							Form
						</NavLink>
						<NavLink className="nav-link" to="/login">
							Login
						</NavLink>
					</Nav>
				</Container>
			</Navbar>
			<Outlet />
		</>
	);
}

export default ColorSchemesExample;
