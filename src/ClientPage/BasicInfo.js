import React from 'react'



export const BasicInfo = () => {
 

    return (
        <form>
        <div class="infocontainer">
            <div className="infotext">Basic Information</div>
            <hr/>
            <div className="row g-3 align-items-center">
            <label htmlFor="Birthday"><h5>Full Name:</h5></label>
                    <div className="col">
                        <input className="form-control " name="fname" type="text" id="Fname" />
                        <label class="text-secondary"  htmlFor="fname">First Name</label>
                    </div>
                    <div className="col">
                        <input className="form-control " name="mname" type="text" id="Mname" />
                        <label class="text-secondary" htmlFor="mname">Middle Name</label>
                    </div>
                    <div className="col">
                        <input className="form-control " name="lname" type="text" id="Lname"/>
                        <label class="text-secondary" htmlFor="lname">Last Name</label>
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
                        <label htmlFor="emailadd"><h5>Email Address:</h5></label>
                        <input className="form-control " name="emailadd" type="email" id="EmailAdd"/>
                    </div>
                    <div className="col">
                        <label htmlFor="cellNumber"><h5>Phone Number:</h5></label>
                        <input className="form-control " name="cellNumber" type="text" id="CellNumber"/>
                    </div>
                    <div className="col-auto">
                        <label htmlFor="gender"><h5>Gender:</h5></label>
                        <select class="form-select" id="Gender" name="gender">
                            <option value="Male">Male</option>
                            <option value="Female">Female</option>
                        </select>
                    </div>
                </div>
                <br/>
                <h5>Address:</h5>
                <div className="row g-3 align-items-center">
                    <div className="col-12">
                        <input className="form-control " name="saddress" type="text" id="SAddress"/>
                        <label class="text-secondary"  htmlFor="saddress">Street Address</label>
                    </div>
                    <div className="col-4">
                        <input className="form-control " name="city" type="text" id="City"/>
                        <label class="text-secondary" htmlFor="city">City</label>
                    </div>
                    <div className="col-4">
                        <input className="form-control " name="province" type="text" id="Province"/>
                        <label class="text-secondary" htmlFor="province">Province</label>
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
    </form>
    )
}