import React, { useState, useEffect } from "react"
import { ClientDetail } from './ClientDetail'

export const EditClient = () => {
    const[client, setClient ] = useState()

    useEffect(() => {
        setClient({
            fname: "Joshua",
            mname: "Joshua",
            lname: "Joshua",
            birthday: "Joshua",
            age: "Joshua",
            emailadd: "Joshua",
            cellnumber: "Joshua",
            gender: "Joshua",
            saddress: "Joshua",
            city: "Joshua",
            province: "Joshua",
            zipcode: "Joshua",
            country: "Joshua",
        })
    })
    
    return(
        <ClientDetail client={client} />
    )
}