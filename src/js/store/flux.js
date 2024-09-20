const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			contacts: []
		},
		actions: {
			createUser: () => {
				fetch(`https://playground.4geeks.com/contact/agendas/inesina`, {
					method: 'POST',
					headers: {'Content-Type': 'application.json'}
				})
				.then(response => response.json())
				.then(data => console.log(data))
				.then(error => console.log(error))
			},
			getAllContacts: () => {
				fetch(`https://playground.4geeks.com/contact/agendas/inesina/contacts`)

				.then((response) => {
					if(response.status === 404) {
						getActions().createUser()
					}
					return response.json()
				})
				.then((data) => setStore({contacts: data.contacts}))
				.then((error) => console.log(error))
			},
			createContact: (newContact) => {
				fetch(`https://playground.4geeks.com/contact/agendas/${newContact.slug}/contacts`, {
					method:'POST',
					body: JSON.stringify({
						"name": newContact.fullName,
						"phone": newContact.phone,
						"email": newContact.email,
						"address": newContact.address
					  }),
					headers:{'Content-Type': 'application/json'}
				})
				.then((response) => response.json())
				.then((data)=> {
					setStore({contacts: getStore().contacts.concat(data)});
				})
				.then((error)=> console.log(error))
			},

			deleteContact: (contactId, slug) => {
				fetch(`https://playground.4geeks.com/contact/agendas/${slug}/contacts/${contactId}`, {
					method: 'DELETE',
					headers: {'Content-Type':'application/json'}
				})
				.then((response) => {
					setStore({contacts: getStore().contacts.filter((elem) => elem.id !== contactId)})
				})
				.then((error) => console.log(error))
			},
			deleteAllContacts: (slug) => {
				fetch(`https://playground.4geeks.com/contact/agendas/${slug}`, {
					method: 'DELETE',
					headers: {'Content-Type':'application/json'}
				})
				.then((response) => {
					setStore({contacts: []})
				})

				.then((error) => console.log(error))
			},
			updateContact: (contact) => {
				fetch(`https://playground.4geeks.com/contact/agendas/${contact.slug}/contacts/${contact.id}`, {
					method: 'PUT',
					body: JSON.stringify({
						"name": contact.fullName,
						"phone": contact.phone,
						"email": contact.email,
						"address": contact.address
					}),
					headers: {'Content-Type':'application/json'}
				})
				.then((response) => response.json())
				.then((data) => {
				 	const updateContacts = getStore().contacts.filter((elem) => elem.id !== contact.id)
					console.log(setStore({contacts: updateContacts.concat(data)}))
				})
				.catch((error) => console.log(error))
			}
		}
	};
};

export default getState;
