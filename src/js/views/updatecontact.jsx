import React, {useEffect, useContext} from "react";
import {Context} from "../store/appContext.js";
import { useParams } from "react-router-dom";
import { Form } from "../component/form.jsx";
import { Link } from "react-router-dom";

export const UpdateContact = () => {
    const {store, actions} = useContext(Context)
    const {id} = useParams()
    const contact = store.contacts.find((elem) => elem.id == id)
        
    useEffect (() => {
        actions.getAllContacts()
    },[])

    return (
        <div className="container">
			<Form fullName={contact.name} phone={contact.phone} email={contact.email} address={contact.address} id={contact.id} slug={"inesina"} />
            <Link to="/">
				<p>or get back to contacts</p>
			</Link>
        </div>
    )
}