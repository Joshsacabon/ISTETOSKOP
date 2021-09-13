import React from 'react'
import { useForm } from 'react-hook-form'



export const BasicInfo = ({client, onSubmit}) => {
    
    const {register, handleSubmit} = useForm({
        defaultValues:  
        {   firstname: client ? client.firstname: "",
            middlename: client ? client.middlename: "",
            lastname: client ? client.lastname: "",
            birthday: client ? client.birthday: "",
            age: client ? client.age: "",
            emailadd: client ? client.emailadd: "",
            cellnumber: client ? client.cellnumber: "",
            gender: client ? client.gender: "",
            saddress: client ? client.saddress: "",
            city: client ? client.city: "",
            province: client ? client.province: "",
            zipcode: client ? client.zipcode: "",
            country: client ? client.country: "",}
    })


    const submitHandler = handleSubmit ((data) => {
        onSubmit(data);
        alert("Information Saved!")
    });

    return (
        <form onSubmit={submitHandler}>
        <div class="infocontainer">
            <div className="infotext">Basic Information</div>
            <hr/>
            <div className="row g-3 align-items-center">
            <label htmlFor="Birthday"><h5>Full Name:</h5></label>
                    <div className="col">
                        <input className="form-control " {...register("firstname")} type="text" id="Fname" />
                        <label class="text-secondary"  htmlFor="fname">First Name</label>
                    </div>
                    <div className="col">
                        <input className="form-control "  {...register("middlename")}  type="text" id="Mname" />
                        <label class="text-secondary" htmlFor="middlename">Middle Name</label>
                    </div>
                    <div className="col">
                        <input className="form-control "  {...register("lastname")}  type="text" id="Lname"/>
                        <label class="text-secondary" htmlFor="lastname">Last Name</label>
                    </div>
                </div>
                <br/>
                <div className="row g-3 align-items-center">
                    <div className="col">
                        <label htmlFor="Birthday"><h5>Birthday:</h5></label>
                        <input className="form-control " {...register("birthday")} type="date" id="Birthday"/>
                    </div>
                    <div className="col-auto">
                        <label htmlFor="age"><h5>Age:</h5></label>
                        <input className="form-control " {...register("age")} type="number" min="1" max="100" id="Age"/>
                    </div>
                </div>
                <br/>
                <div className="row g-3 align-items-center">
                    <div className="col">
                        <label htmlFor="emailadd"><h5>Email Address:</h5></label>
                        <input className="form-control " {...register("emailadd")} type="email" id="EmailAdd"/>
                    </div>
                    <div className="col">
                        <label htmlFor="cellNumber"><h5>Phone Number:</h5></label>
                        <input className="form-control " {...register("cellnumber")} type="text" id="CellNumber"/>
                    </div>
                    <div className="col-auto">
                        <label htmlFor="gender"><h5>Gender:</h5></label>
                        <select class="form-select" id="Gender" {...register("gender")}>
                            <option value="Male">Male</option>
                            <option value="Female">Female</option>
                        </select>
                    </div>
                </div>
                <br/>
                <h5>Address:</h5>
                <div className="row g-3 align-items-center">
                    <div className="col-12">
                        <input className="form-control " {...register("saddress")} type="text" id="SAddress"/>
                        <label class="text-secondary"  htmlFor="saddress">Street Address</label>
                    </div>
                    <div className="col-4">
                        <input className="form-control " {...register("city")} type="text" id="City"/>
                        <label class="text-secondary" htmlFor="city">City</label>
                    </div>
                    <div className="col-4">
                        <input className="form-control " {...register("province")} type="text" id="Province"/>
                        <label class="text-secondary" htmlFor="province">Province</label>
                    </div>
                    <div className="col-4">
                        <input className="form-control " {...register("zipcode")} type="number" min="400" max="9811" id="zipcode"/>
                        <label class="text-secondary" htmlFor="zipcode">Zip Code</label>
                    </div>
                    <div className="col-12">
                        <input className="form-control " {...register("country")} type="text" id="country"/>
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