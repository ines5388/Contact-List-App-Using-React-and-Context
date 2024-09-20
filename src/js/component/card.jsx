import React from "react";
import { Link } from "react-router-dom";
import { ModalDelete } from "./modalDelete.jsx";

 export const Card = (props) => {
    return (
        <>
            <div className="card mx-4">
                <div className="row g-0">
                    <div className="col-md-4 d-flex justify-content-center my-2">
                    <img src="https://picsum.photos/id/103/75/75" className="rounded-circle" alt="..." />
                    </div>
                    <div className="d-flex col-md-8">
                        <div className="card-body">
                            <h5 className="card-title mb-3">{props.fullName}</h5>
                            <p className="card-text"><i className="fas fa-map-marker-alt me-3"></i>{props.address}</p>
                            <p className="card-text"><i className="fas fa-phone me-3"></i>{props.phone}</p>
                            <p className="card-text"><i className="fas fa-envelope me-3"></i>{props.email}</p>
                        </div>
                        <div className="pt-2 me-5">
                            <Link to={`/update-contact/${props.id}`}>
                                <i className="fas fa-pencil-alt me-5"></i>
                            </Link>
                            <span><i className="fas fa-trash ms-5" data-bs-toggle="modal" data-bs-target={`#modal-${props.id}`} /></span>
                        </div>
                    </div>
                </div>
            </div>
            <ModalDelete slug={"inesina"} id={props.id} modalId={`modal-${props.id}`} />
        </>
    )
}

 