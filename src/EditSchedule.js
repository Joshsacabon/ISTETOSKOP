import React, { useEffect, useState } from 'react'
import { useRouteMatch, useHistory } from 'react-router-dom';
import { AddSchedule } from "./AddSchedule";
import { getSched,updateSched } from './api';

export const EditSchedule = ({modalIsOpen }) =>{
    const match = useRouteMatch();
    const [sched, setSched] = useState();
    const history = useHistory();

        
    useEffect(() => {
        const fetchSched = async () => {
        const sched = await getSched(match.params.id)
        setSched(sched)
       }
       fetchSched()
    },[match])
    
    const onSubmit = async (data) => {
        history.push('/home/dashboard')
        await updateSched(data, match.params.id)
    }

    return(
        sched  ? 
        (<AddSchedule  modalIsOpen={modalIsOpen} sched={sched} onSubmit={onSubmit} />) 
        : 
        (<div>Loading...</div>)
    )
}