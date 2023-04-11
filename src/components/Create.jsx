import React from 'react';
import  { useState } from 'react';

// to read values from form inputs in react forms
// mutable -> useRef() hook
// immutable -> state and onchange method

function Create(props) {
    // const [state,handler()] = useState(initialValue)
    const [fname,setFName] = useState('')
    const [femail,setFEmail] = useState('')
    const [fmobile,setFMobile] = useState('')
    const [fimage,setFImage] = useState('')
    const [faddress,setFAddress] = useState('')
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
                            <form autoComplete="off">
                                <div className="form-group mt-2">
                                    <label htmlFor="name">Name</label>
                                    <input type="text" id='name' name='name' value={fname} onChange={(e) => setFName(e.target.value)} className='form-control' required/>
                                </div>
                                <div className="form-group mt-2">
                                    <label htmlFor="email">Email</label>
                                    <input type="email" name="email" id="email" className="form-control"  required/>
                                </div>
                                <div className="form-group mt-2">
                                    <label htmlFor="mobile">Mobile</label>
                                    <input type="number" name="mobile" id="mobile" className="form-control" required />
                                </div>
                                <div className="form-group mt-2">
                                    <label htmlFor="image">Image</label>
                                    <input type="url" name="image" id="image" className="form-control" required />
                                </div>
                                <div className="form-group mt-2">
                                    <label htmlFor="address">Address</label>
                                    <textarea className="form-control" name="address" id="address" rows="5" cols="30" required></textarea>
                                </div>
                                <div className="formm-group">
                                    <input type="submit" value="create" className='btn btn-outline-success mt-2' />
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