import React from 'react'


export const Client = () => {

    return(
        <div className="container text-dark bg-info rounded w-50">
        <div className="mt-3 p-3">

            <h3>PERSONAL INFORMATION</h3>
                <h5>Full Name:</h5>
                <div className="row g-3 align-items-center">
                    <div className="col-12">
                        <label htmlFor="Fname">First Name: </label>
                        <input className="form-control " name="FName" type="text" id="Fname" />
                    </div>
                 </div>
                 <div className="row g-3 align-items-center">
                    <div className="col-12">
                        <label htmlFor="Lname">Last Name: </label>
                        <input className="form-control " name="Lname" type="text" id="Lname" />
                    </div>
                </div>
                 <div className="row g-3 align-items-center">
                    <div className="col-12">
                        <label htmlFor="Work">Work:</label>
                        <select class="form-select" id="Work" name="Work">
                            <option value="General Physician">General Physician</option>
                            <option value="Dentistry">Dentistry</option>
                            <option value="Ophthalmology">Ophthalmology</option>
                            <option value="Dermatology">Dermatology</option>
                            <option value="Psychiatry">Psychiatry</option>
                        </select>
                    </div>
                </div>
                 <div className="row g-3 align-items-center">
                    <div className="col-12">
                        <label htmlFor="email">Email:</label>
                        <input className="form-control " name="email" type="email" id="email" />
                    </div>
                </div>
                 <div className="row g-3 align-items-center">
                    <div className="col-12">
                        <label htmlFor="psw">Password:</label>
                        <input className="form-control " name="psw" type="password" id="psw" />
                    </div>
                 </div>
                 <div className="row g-3 align-items-center">
                    <div className="col-12">
                        <label htmlFor="cpsw">Confirmed Password:</label>
                        <input className="form-control " name="cpsw" type="password" id="cpsw" />
                    </div>

                </div>
                 <div className="row g-3 align-items-center">
                    <div className="col-12">
                <div className="form-group">
                    <button  type="submit" className="btn btn-primary ">
                        Submit
                    </button>
                </div>
                </div>
            <br/>
            </div>
        </div>
    </div>
        
    )
}