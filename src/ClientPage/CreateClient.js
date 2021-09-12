import React from 'react'
import { ClientDetail } from './ClientDetail'
import { createClient } from './clientapi'


function CreateClient() {
    const onSubmit = async (data) => {
       await createClient(data)
    }

    return(
        <div>
            <ClientDetail onSubmit={onSubmit} />
        </div>
    )

}
export default CreateClient;