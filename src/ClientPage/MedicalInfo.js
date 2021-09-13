import React from 'react'
import { useForm } from 'react-hook-form'

export const MedicalInfo = ({client, onSubmit}) => {

    const {register, handleSubmit} = useForm({
        defaultValues:  
        {   ctime: client ? client.ctime: "",
            dtime: client ? client.dtime: "",
            reason: client ? client.reason: "",}
    })

    const submitHandler = handleSubmit ((data) => {
        onSubmit(data);
        alert("Information Saved!")
    });

    return(
        <form onSubmit={submitHandler}>
        <div class="infocontainer " style={{height:'155vh', fontWeight: 'bold'}}>
            <div className="infotext">Medical Information</div>
            <hr/>
            <div className="row g-3 align-items-center">
            <label htmlFor="Birthday"><h5>Information:</h5></label>
                    <div className="col">
                        <label class="text-dark"  htmlFor="ctime">Client as of:</label>
                        <input className="form-control "{...register("ctime")} type="date" id="ctime" />
                    </div>
                    <div className="col">
                            <label class="text-dark" htmlFor="dtime">Date of last visit</label>
                        <input className="form-control " {...register("dtime")} type="date" id="dtime" />

                    </div>
                    <div className="col">
                        <label class="text-dark" htmlFor="reason">Reason</label>
                        <input className="form-control " {...register("reason")} type="text" id="reason"/>
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
                        <label htmlFor="Allergies">
                            <h5>Allergies</h5>
                            <div class="text-secondary">(Food, medication and/or environmental)</div>
                        </label>
                        <textarea  className="form-control " name="Allergies" type="text" id="Allergies"/>
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
    </form>
    )
}