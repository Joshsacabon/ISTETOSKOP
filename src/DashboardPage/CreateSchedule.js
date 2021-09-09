import React from 'react'
import { useHistory } from 'react-router-dom';
import { AddSchedule } from "./AddSchedule";
import { createSched } from "./dashboardapi"

export const CreateSchedule = ({modalIsOpen }) =>{
    const history = useHistory();

    const onSubmitted = async (data) =>{
        await createSched(data);
        history.push("/home/dashboard")
    }

    return(
        <AddSchedule  modalIsOpen={modalIsOpen}  onSubmit={onSubmitted} />
    )
}
