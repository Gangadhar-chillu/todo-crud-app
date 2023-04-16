import React, { useState } from 'react';
import {toast} from 'react-toastify'
import { createContact } from '../db/store'; // { } typed / named import

// to read values from form inputs in react forms
// mutable -> useRef() hook
// immutable -> state and onchange method

const getRandom = () => {
    return Math.round(Math.random() * 10000); // random id
}

function Create(props) {
    // const [state,handler()] = useState(initialValue)
    const [fname,setFName] = useState('')
    const [femail,setFEmail] = useState('')
    const [fmobile,setFMobile] = useState('')
    const [fimage,setFImage] = useState('')
    const [faddress,setFAddress] = useState('')

   const  submitHandler = async (e) => {
          e.preventDefault() // to avoid the page refresh
          let data = {
            id: getRandom(),
            name: fname,
            email: femail,
            mobile: fmobile,
            image: fimage,
            address: faddress
          };

          console.log('new contact =', data);
        //   toast.success('Successfully submitted');
         createContact(data);
          }
       return (
        <div className="container">
            <div className="row">
                <div className="col-md-12 text-center">
                    <h3 className="display-3 text-success">Create new</h3>
                </div>
            </div>

            <div className="row">
                <div className="col-md-6 offset-md-3">
                    <div className="card">
                        <div className="card-body">
                            <form autoComplete="off"  onSubmit={ submitHandler}>
                                <div className="form-group mt-2" >
                                    <label htmlFor="name">Name</label>
                                    <input type="text" id='name' name='name' value={fname} onChange={(e) => setFName(e.target.value)} className='form-control' required/>
                                </div>
                                <div className="form-group mt-2">
                                    <label htmlFor="email">Email</label>
                                    <input type="email" name="email" id="email" value={femail} onChange={(e) => setFEmail(e.target.value)} className="form-control"  required/>
                                </div>
                                <div className="form-group mt-2">
                                    <label htmlFor="mobile">Mobile</label>
                                    <input type="number" name="mobile" id="mobile" value={fmobile} onChange={(e) => setFMobile(e.target.value)} className="form-control" required />
                                </div>
                                <div className="form-group mt-2">
                                    <label htmlFor="image">Image</label>
                                    <input type="url" name="image" id="image" value={fimage} onChange={(e) => setFImage(e.target.value)} className="form-control" required />
                                </div>
                                <div className="form-group mt-2">
                                    <label htmlFor="address">Address</label>
                                    <textarea className="form-control" name="address" id="address" rows="5" cols="30" value={faddress} onChange={(e) => setFAddress(e.target.value)} required></textarea>
                                </div>
                                <div className="form-group">
                                    <input type="submit" value="create"  className='btn btn-outline-success mt-2' />
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Create