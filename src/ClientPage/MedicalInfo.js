import React from 'react'

export const MedicalInfo = () => {
    return(
        <div class="infocontainer " style={{height:'155vh', fontWeight: 'bold'}}>
            <div className="infotext">Medical Information</div>
            <hr/>
            <div className="row g-3 align-items-center">
            <label htmlFor="Birthday"><h5>Name:</h5></label>
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
                    <div className="col">
                        <input className="form-control " name="birthday" type="date" id="Birthday"/>
                        <label class="text-secondary" htmlFor="birthday">Birthday</label>
                    </div>
                </div>
                <hr/>
                <div className="row g-3 align-items-center" style={{fontWeight: 'normal'}}>
                    <label htmlFor="Birthday"><h5>Medical Condition:</h5></label>
                    <div class="col-3">
                        <div class="form-check">
                            <input class="form-check-input" type="checkbox" value="diabetes" id="mCondition1"/>
                            <label class="form-check-label" for="mCondition1">Diabetes </label>
                        </div>
                        <div class="form-check">
                            <input class="form-check-input" type="checkbox" value="heart disease" id="mCondition2"/>
                            <label class="form-check-label" for="mCondition2">Heart Disease </label>
                        </div>
                        <div class="form-check">
                            <input class="form-check-input" type="checkbox" value="heart failure" id="mCondition3"/>
                            <label class="form-check-label" for="mCondition3">Heart Failure </label>
                        </div>
                    </div>
                    <div class="col-3">
                        <div class="form-check">
                            <input class="form-check-input" type="checkbox" value="stroke" id="mCondition4"/>
                            <label class="form-check-label" for="mCondition4">Stroke </label>
                        </div>
                        <div class="form-check">
                            <input class="form-check-input" type="checkbox" value="asthma" id="mCondition5"/>
                            <label class="form-check-label" for="mCondition5">Asthma </label>
                        </div>
                        <div class="form-check">
                            <input class="form-check-input" type="checkbox" value="copd" id="mCondition6"/>
                            <label class="form-check-label" for="mCondition6">COPD </label>
                        </div>
                    </div>
                    <div class="col-3">
                        <div class="form-check">
                            <input class="form-check-input" type="checkbox" value="arthritis" id="mCondition7"/>
                            <label class="form-check-label" for="mCondition7">Arthritis </label>
                        </div>
                        <div class="form-check">
                            <input class="form-check-input" type="checkbox" value="cancer" id="mCondition8"/>
                            <label class="form-check-label" for="mCondition8">Cancer </label>
                        </div>
                        <div class="form-check">
                            <input class="form-check-input" type="checkbox" value="high blood pressure" id="mCondition9"/>
                            <label class="form-check-label" for="mCondition9">High Blood Pressure </label>
                        </div>
                    </div>
                    <div class="col-3">
                        <div class="form-check">
                            <input class="form-check-input" type="checkbox" value="Alzheimer's disease" id="mCondition10"/>
                            <label class="form-check-label" for="mCondition10">Alzheimer's Disease/Dementia </label>
                        </div>
                        <div class="form-check">
                            <input class="form-check-input" type="checkbox" value="others" id="mCondition11"/>
                            <label class="form-check-label" for="mCondition11">Others (please specify) </label>
                            <input className="form-control " name="mCondition11" type="text" id="mCondition11"/>
                        </div>
                    </div>
                </div>
                <hr/>
                <div className="row g-3 align-items-center">
                    <div className="col">
                        <label htmlFor="EmailAdd">
                            <h5>Allergies</h5>
                            <div class="text-secondary">(Food, medication and/or environmental)</div>
                        </label>
                        <textarea  className="form-control " name="Fname" type="text" id="EmailAdd"/>
                    </div>
                </div>
                <hr/>
                <h5>Surgeries and Dates:</h5>
                <div className="row g-3 align-items-center">
                    <div className="col-4">
                        <input className="form-control mb-3 " name="Fname" type="text" id="City"/>
                    </div>
                    <div className="col-2">
                        <input className="form-control mb-3" name="Fname" type="text" id="Province"/>
                    </div>
                    <div className="col-4">
                        <input className="form-control mb-3" name="Fname" type="text" id="zipcode"/>
                    </div>
                    <div className="col-2">
                        <input className="form-control mb-3" name="Fname" type="text" id="Province"/>
                    </div>
                </div>
                <div className="row g-3 align-items-center">
                    <div className="col-4">
                        <input className="form-control mb-3" name="Fname" type="text" id="City"/>
                    </div>
                    <div className="col-2">
                        <input className="form-control mb-3" name="Fname" type="text" id="Province"/>
                    </div>
                    <div className="col-4">
                        <input className="form-control mb-3" name="Fname" type="text" id="zipcode"/>
                    </div>
                    <div className="col-2">
                        <input className="form-control mb-3" name="Fname" type="text" id="Province"/>
                    </div>
                </div>
                <div className="row g-3 align-items-center">
                    <div className="col-4">
                        <input className="form-control mb-3" name="Fname" type="text" id="City"/>
                    </div>
                    <div className="col-2">
                        <input className="form-control mb-3" name="Fname" type="text" id="Province"/>
                    </div>
                    <div className="col-4">
                        <input className="form-control mb-3" name="Fname" type="text" id="zipcode"/>
                    </div>
                    <div className="col-2">
                        <input className="form-control mb-3" name="Fname" type="text" id="Province"/>
                    </div>
                </div>
                <hr/>

                <h5>Physicians:</h5>
                <div className="row g-3 align-items-center text-center">
                    <div className="col-3"><label htmlFor="Birthday"><div>First and Last Name:</div></label></div>
                    <div className="col-3"><label htmlFor="Birthday"><div>Specialty:</div></label></div>
                    <div className="col-3"><label htmlFor="Birthday"><div>Address:</div></label></div>
                    <div className="col-3"><label htmlFor="Birthday"><div>Phone:</div></label></div>
                </div>
                <div className="row g-3 align-items-center">
                    <div className="col-3">
                        <input className="form-control mb-3 " name="Fname" type="text" id="City"/>
                    </div>
                    <div className="col-3">
                        <input className="form-control mb-3" name="Fname" type="text" id="Province"/>
                    </div>
                    <div className="col-3">
                        <input className="form-control mb-3" name="Fname" type="text" id="zipcode"/>
                    </div>
                    <div className="col-3">
                        <input className="form-control mb-3" name="Fname" type="text" id="Province"/>
                    </div>
                </div>
                <div className="row g-3 align-items-center">
                    <div className="col-3">
                        <input className="form-control mb-3" name="Fname" type="text" id="City"/>
                    </div>
                    <div className="col-3">
                        <input className="form-control mb-3" name="Fname" type="text" id="Province"/>
                    </div>
                    <div className="col-3">
                        <input className="form-control mb-3" name="Fname" type="text" id="zipcode"/>
                    </div>
                    <div className="col-3">
                        <input className="form-control mb-3" name="Fname" type="text" id="Province"/>
                    </div>
                </div>
                <div className="row g-3 align-items-center">
                    <div className="col-3">
                        <input className="form-control mb-3" name="Fname" type="text" id="City"/>
                    </div>
                    <div className="col-3">
                        <input className="form-control mb-3" name="Fname" type="text" id="Province"/>
                    </div>
                    <div className="col-3">
                        <input className="form-control mb-3" name="Fname" type="text" id="zipcode"/>
                    </div>
                    <div className="col-3">
                        <input className="form-control mb-3" name="Fname" type="text" id="Province"/>
                    </div>
                </div>
                <div className="row g-3 align-items-center">
                    <div className="col-3">
                        <input className="form-control mb-3" name="Fname" type="text" id="City"/>
                    </div>
                    <div className="col-3">
                        <input className="form-control mb-3" name="Fname" type="text" id="Province"/>
                    </div>
                    <div className="col-3">
                        <input className="form-control mb-3" name="Fname" type="text" id="zipcode"/>
                    </div>
                    <div className="col-3">
                        <input className="form-control mb-3" name="Fname" type="text" id="Province"/>
                    </div>
                </div>
                <hr/>
                <div className="row g-3 align-items-center">
                    <div className="col">
                        <label htmlFor="HpReference">
                            <h5>Hospital Reference</h5>
                        </label>
                        <textarea  className="form-control " name="HpReference" type="text" id="HpReference"/>
                    </div>
                </div>
                <hr/>
                <div className="row g-3 align-items-center">
                    <div className="col">
                        <label htmlFor="Insurance">
                            <h5>Insurance</h5>
                        </label>
                        <textarea  className="form-control " name="Insurance" type="text" id="Insurance"/>
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