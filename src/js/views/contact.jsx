import React, {useEffect,useContext} from "react";
import {Context} from "../store/appContext.js";
import { Card } from "../component/card.jsx";
import { ModalDelete } from "../component/modalDelete.jsx";

export const Contact = () => {
	const {store, actions} = useContext(Context);

	useEffect(() => {
		actions.getAllContacts()
	},[])
	
	return (
		<>
			<div>
				{store.contacts.length === 0 ? <p className="text-danger text-center fs-2">Tu agenda aun no tiene contactos</p>
				: store.contacts.map((elem,index) => {
					return (
						<Card key={index} fullName={elem.name} phone={elem.phone} email={elem.email} address={elem.address} id={elem.id} />
					)
				})}
			</div>
			<div className="d-flex justify-content-center mt-3">
				<button className="btn btn-danger my-2 text-center" data-bs-toggle="modal" data-bs-target="#modalDeleteAll">Delete All Contacts</button>
				{/* <button type="button" onClick={() => actions.deleteAllContacts("joselo")} className="btn btn-danger bn-lg">Delete All Contacts</button> */}
			</div>
			<ModalDelete slug={"inesina"} modalId={"modalDeleteAll"} />
		</>
	)
}