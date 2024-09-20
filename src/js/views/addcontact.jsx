import React from "react";
import { Form } from "../component/form.jsx";
import { Link } from "react-router-dom";

export const AddContact = () => {
	return (
		<div className="container">
			<Form slug={"inesina"} />
			<Link to="/">
					<p>or get back to contacts</p>
			</Link>
		</div>
	)
}
