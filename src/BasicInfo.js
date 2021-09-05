import React from 'react'

export const BasicInfo = () => {
    return(
        <div class="infocontainer">
            <div className="infotext">Basic Information</div>
            <hr/>
            <div className="row g-3 align-items-center">
            <label htmlFor="Birthday"><h5>Full Name:</h5></label>
                    <div className="col">
                        <input className="form-control " name="Fname" type="text" id="Fname" />
                        <label class="text-secondary"  htmlFor="Fname">First Name</label>
                    </div>
                    <div className="col">
                        <input className="form-control " name="Mname" type="text" id="Mname" />
                        <label class="text-secondary" htmlFor="Mname">Middle Name</label>
                    </div>
                    <div className="col">
                        <input className="form-control " name="Lname" type="text" id="Lname"/>
                        <label class="text-secondary" htmlFor="Lname">Last Name</label>
                    </div>
                </div>
                <br/>
                <div className="row g-3 align-items-center">
                    <div className="col">
                        <label htmlFor="Birthday"><h5>Birthday:</h5></label>
                        <input className="form-control " name="birthday" type="date" id="Birthday"/>
                    </div>
                    <div className="col-auto">
                        <label htmlFor="Age"><h5>Age:</h5></label>
                        <input className="form-control " name="age" type="number" min="1" max="100" id="Age"/>
                    </div>
                </div>
                <br/>
                <div className="row g-3 align-items-center">
                    <div className="col">
                        <label htmlFor="EmailAdd"><h5>Email Address:</h5></label>
                        <input className="form-control " name="EmailAdd" type="email" id="EmailAdd"/>
                    </div>
                    <div className="col">
                        <label htmlFor="CellNumber"><h5>Phone Number:</h5></label>
                        <input className="form-control " name="CellNumber" type="text" id="CellNumber"/>
                    </div>
                    <div className="col-auto">
                        <label htmlFor="Gender"><h5>Gender:</h5></label>
                        <select class="form-select" id="Gender" name="Gender">
                            <option value="Male">Male</option>
                            <option value="Female">Female</option>
                        </select>
                    </div>
                </div>
                <br/>
                <h5>Address:</h5>
                <div className="row g-3 align-items-center">
                    <div className="col-12">
                        <input className="form-control " name="SAddress" type="text" id="SAddress"/>
                        <label class="text-secondary"  htmlFor="SAddress">Street Address</label>
                    </div>
                    <div className="col-4">
                        <input className="form-control " name="City" type="text" id="City"/>
                        <label class="text-secondary" htmlFor="City">City</label>
                    </div>
                    <div className="col-4">
                        <input className="form-control " name="Province" type="text" id="Province"/>
                        <label class="text-secondary" htmlFor="Province">Province</label>
                    </div>
                    <div className="col-4">
                        <input className="form-control " name="zipcode" type="number" min="400" max="9811" id="zipcode"/>
                        <label class="text-secondary" htmlFor="zipcode">Zip Code</label>
                    </div>
                    <div className="col-12">
                        <input className="form-control " name="country" type="text" id="country"/>
                        <label class="text-secondary" htmlFor="country">Country</label>
                    </div>
                </div>
                <div className="form-group">
                    <button  type="submit" className="infobutton">
                        Save
                    </button>
                </div>
            <br/>
    </div>     
    )
}