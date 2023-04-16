import { toast } from 'react-toastify';

let contacts = JSON.parse(localStorage.getItem('contacts')) || []; // JSON.parse -> string to json

// update the value in localstorage
const updateStorage = (data) => {
    localStorage.setItem('contacts', JSON.stringify(data)); // JSON.stringify -> json object to string
}

// store logic
export const createContact = (contact) => {
    // check if email exists in db or not
    let exEmail = contacts.find((item) => item.email === contact.email );
    // check if mobile exists in db or not
    let exMobile = contacts.find((item) => item.mobile === contact.mobile);

    if(exEmail) {
        toast.warning('User Eamil already registered');
    } else if (exMobile) {
        toast.warning('User Mobile number already registered');
    } else {
        // if mobile and email not exists -> store new contact data in local storage
        contacts.push(contact);
        toast.success('New contact created successfully');
        updateStorage(contacts);
        window.location.href = "/";
    }
}; 

// all contacts read logic
export const readContacts = () => {
    return contacts;
}

// return single contact
export const readContact = (id) => {
   let exContact = contacts.find((item) => item.id == id)
   return exContact;
}

// to update the data
export const updateContact = (id,contact) => {
    let extContact = contacts.findIndex((item) => item.id == id)
     let data = {
        id: Number(id),
        ...contact
     }
     contacts.splice(extContact,1,data)
     updateStorage(contacts)
     toast.success('Succesfully Updated');
     window.location.href = "/";
   }

   export const deleteContact = (id) => {
    let extIndex = contacts.findIndex((item) => item.id == id)
     contacts.splice(extIndex,1)
     updateStorage(contacts)
     toast.success('Contact deleted Successfully');
     window.location.href = "/"
   }
