import React from 'react'
import { Link } from 'react-router-dom'


export const ClientList = () => {
    return(

        
        <div class="vh-100" style={{backgroundColor:"#BCE3E3 "}}>

            <div class="row pt-5 px-4">
                <div class="col-6">  
                    <Link to="/createclient"  style={{ color: '#23807E', textDecoration: 'none' }}>
                        <button class="addbutton">
                            + New Client 
                        </button> 
                    </Link>
                </div>
                <div class="col-6">  <input type="text" class="myInput" placeholder="Search for names.." title="Type in a name"/></div>
            </div>

            <div class="sortname row justify-content-center mt-3 mx-3">
                    <div class="col-3">
                        Name 
                    </div>
                    <div class="col-3">
                        Client as of
                    </div>
                    <div class="col-3">
                        Date of last visit
                    </div>
                    <div class="col-3">
                        Reason of last visit
                    </div>
            </div>

            <table className="table table-borderless mx-3">
                <tbody>
                    <button class="sortbutton">
                    <tr class="row align-items-center">
                        <td class="col-3">
                            Joshua C. Sacabon
                        </td>
                        <td class="col-3">
                            08/02/2021
                        </td>
                        <td class="col-3">
                            08/02/2021
                        </td>
                        <td class="col-3">
                            Check-up
                        </td>
                        </tr>
                    </button>
                </tbody>
            </table>

    </div>     
    )
}