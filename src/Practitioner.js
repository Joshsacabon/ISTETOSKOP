import React from 'react'
import { Link } from 'react-router-dom'


export const Practitioner = () => {

    return(
        <div className="container text-dark bg-info rounded w-25 mt-4 containerregister">
        <div className="p-3">

            <h2>REGISTRATION</h2>
                <h5>PRACTITIONER</h5>
                <div className="row g-3 align-items-center mb-3">
                    <div className="col-4">
                        <label htmlFor="Fname">First Name: </label>
                    </div>
                    <div className="col-8">
                        <input className="form-control " name="FName" type="text" id="Fname" />
                    </div>
                 </div>
                 <div className="row g-3 align-items-center mb-3">
                    <div className="col-4">
                        <label htmlFor="Lname">Last Name: </label>
                    </div>
                    <div className="col-8">
                        <input className="form-control " name="Lname" type="text" id="Lname" />
                    </div>
                </div>
                 <div className="row g-3 align-items-center mb-3">
                    <div className="col-4">
                        <label htmlFor="Work">Work:</label>
                    </div>
                    <div className="col-8">
                        <select class="form-select" id="Work" name="Work">
                            <option value="General Physician">General Physician</option>
                            <option value="Dentistry">Dentistry</option>
                            <option value="Ophthalmology">Ophthalmology</option>
                            <option value="Dermatology">Dermatology</option>
                            <option value="Psychiatry">Psychiatry</option>
                        </select>
                    </div>
                </div>
                 <div className="row g-3 align-items-center mb-3">
                    <div className="col-4">
                        <label htmlFor="email">Email:</label>
                    </div>
                    <div className="col-8">
                        <input className="form-control " name="email" type="email" id="email" />
                    </div>
                </div>
                 <div className="row g-3 align-items-center mb-3">
                    <div className="col-4">
                        <label htmlFor="psw">Password:</label>
                    </div>
                    <div className="col-8">
                        <input className="form-control " name="psw" type="password" id="psw" />
                    </div>
                 </div>
                 <div className="row g-3 align-items-center mb-3">
                    <div className="col-4">
                        <label htmlFor="cpsw">Confirmed Password:</label>
                    </div>
                    <div className="col-8">
                        <input className="form-control " name="cpsw" type="password" id="cpsw" />
                    </div>

                </div>
                 <div className="row g-3 align-items-center mb-3">
                    <div className="col-12">
                <div className="form-group">
                    <button type="submit" class="practitionerbutton">
                        <Link to="/"  style={{ color: '#FFF', textDecoration: 'none' }}  >
                            Submit
                        </Link>
                    </button>
                    <button type="submit" class="practitionerbutton">
                        <Link to="/"  style={{ color: '#FFF', textDecoration: 'none' }}  >
                            Cancel
                        </Link>
                    </button>
                </div>
                </div>
            <br/>
            </div>
        </div>
    </div>
        
    )
}