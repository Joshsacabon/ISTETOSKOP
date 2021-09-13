import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { getClients } from './clientapi'


export const ClientList = () => {
    const [list, setList] = useState([])

    useEffect(() => {
        getClientList()
    },[])

    function getClientList () {
        const fetchList = async () => {
            const clients = await getClients()
            setList(clients)
        }
        fetchList()
    }

    
    const onDelete = (id) =>{
        fetch(`http://localhost:4000/home/clientlist/${id}` , {
          method:'DELETE'
        }).then((result) => result.json()).then((resp)=>{
          console.warn(resp)
          getClientList();
        })
      };

    return(

        
        <div class="vh-100" style={{backgroundColor:"#BCE3E3"}}>

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
                    <div class="col-2">
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
                <tbody> {
                    list.map( client => (
                       
                    <button class="sortbutton" 
                        style={{
                            padding: "40px 10px",
                            backgroundColor: "#f6f6f6",
                            color: 'black',
                            border: "3px solid #636262",
                            marginBottom: "10px"
                      }}>
                          <div class="row">
                        <div class="col-11">
                           <Link to={`/editclient/${client._id}`} 
                        style={{
                            textDecoration: "none",
                            color:'black'
                        }}>
                       
                        <tr class="row align-items-center" key={client._id}>
                            <td class="col-3">
                                {client.firstname}  {client.lastname}
                            </td>
                            <td class="col-2">
                                {client.ctime}
                            </td>
                            <td class="col-2">
                                {client.dtime}
                            </td>
                            <td class="col-3">
                                {client.reason}
                            </td>
                            </tr>
                            
                        </Link>
                        </div>
                        <div class="col-1">
                            <button class="xbutton" 
                            style={{backgroundColor:"#f6f6f6"}} 
                            onClick={() => onDelete(client._id)}
                            >x</button>
                        </div>
                        </div>

                    </button>
                    
                   
                    ))
                }</tbody>
            </table>

    </div>     
    )
}