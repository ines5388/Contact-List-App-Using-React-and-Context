import React, {useContext,useState} from "react";
import {Context} from "../store/appContext.js";
import { useNavigate } from "react-router-dom";

export const Form = (props) => {
    const [fullName, setFullName] = useState(props.fullName);
    const [email, setEmail] = useState(props.email);
    const [phone, setPhone] = useState(props.phone);
    const [address, setAddress] = useState(props.address);
    const {actions} = useContext(Context);
    const navigate = useNavigate();

    const onForm = (data) => {
        if (props.id === undefined) {
            actions.createContact(data);
        } else {
            actions.updateContact({
                fullName: data.fullName,
                email: data.email,
                phone: data.phone,
                address: data.address,
                id: props.id,
                slug: data.slug 
            });
        };
        navigate("/");
};
   
    return (
        <>
            <form>
                <h1 className="text-center">Add a new contact</h1>
                <div className="mb-3">
                    <label htmlFor="fullName" className="form-label">Full Name</label>
                    <input type="text" onChange={e => setFullName(e.target.value)} value={fullName} className="form-control" id="fullName" placeholder="Full Name"/>
                </div>
                <div className="mb-3">
                    <label htmlFor="email" className="form-label">Email</label>
                    <input type="email" onChange={e => setEmail(e.target.value)} value={email} className="form-control" id="email" placeholder="Enter email"/>
                </div>
                <div className="mb-3">
                    <label htmlFor="phone" className="form-label">Phone</label>
                    <input type="tel" onChange={e => setPhone(e.target.value)} value={phone} className="form-control" id="phone" placeholder="Enter phone"/>
                </div>
                <div className="mb-3">
                    <label htmlFor="address" className="form-label">Address</label>
                    <input type="text" onChange={e => setAddress(e.target.value)} value={address} className="form-control" id="address" placeholder="Enter address"/>
                </div>
                <button type="submit" className="btn btn-primary w-100" onClick={() => onForm({
                        fullName: fullName,
                        phone: phone,
						email: email,
                        address: address,
						slug: props.slug
                        }
                        )}
                >
                    Save
                </button>
            </form>
        </>

    )
};