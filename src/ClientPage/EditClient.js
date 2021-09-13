import React, { useState, useEffect } from "react"
import { ClientDetail } from "./ClientDetail";
import { getClient, updateClient } from "./clientapi"
import { useRouteMatch } from "react-router";

function EditClient() {
    const match = useRouteMatch()
    const[client, setClient ] = useState()

    const onSubmit = async (data) => {
        await updateClient(data, match.params.id)
    }
 
    useEffect(() => {
        const  fetchClient = async () => {
        const client = getClient(match.params.id)
        setClient(client)
       }
       fetchClient()
    },[match])

    
    return(
        client ? 
         <div> 
            <ClientDetail client={client} onSubmit={onSubmit} />
         </div>
         :
         <div> Loading</div>
    )
}

export default EditClient;