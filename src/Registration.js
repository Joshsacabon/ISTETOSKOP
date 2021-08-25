import React from 'react'


function Registration() {
    return(
        <div className="container text-dark bg-info rounded">
        <div className="mt-3 p-3">

            <h3>PERSONAL INFORMATION</h3>
                <h5>Full Name:</h5>
                <div className="row g-3 align-items-center">
                    <div className="col">
                        <input className="form-control " name="Name" type="text" id="Fname" />
                        <label class="text-secondary"  htmlFor="Fname">First Name</label>
                    </div>
                <div className="form-group">
                    <button  type="submit" className="btn btn-primary ">
                        Submit
                    </button>
                </div>
            <br/>
            </div>
        </div>
    </div>
        
    )
}

export default Registration;