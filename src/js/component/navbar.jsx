import React from "react";
import { Link } from "react-router-dom";

export const Navbar = () => {
	return (
		<div className="d-flex justify-content-end mt-3">
			<Link to="/add-contact">
				<button className="btn btn-success btn-lg mb-3 me-4">Add new contact</button>
			</Link>
		</div>
	)
};
