import React, { useEffect, useState } from 'react'
import { Switch, Link, Route, useRouteMatch } from 'react-router-dom';
import { CreateSchedule } from './CreateSchedule';
import { EditSchedule } from './EditSchedule';
import { getScheds } from './dashboardapi';


export const Dashboard = () => {
    const [modalIsOpen , setmodalIsOpen ] = useState(false);
    const [items, setItems] = useState([])

    useEffect(() => {
        getScheduleList()
    }, [])



    function getScheduleList() {
        const fetchItems = async () => {
            const scheds = await getScheds()
            setItems(scheds)
        }
        fetchItems()
    }

    const onDelete = (id) =>{
        fetch(`http://localhost:4000/home/dashboard/${id}` , {
          method:'DELETE'
        }).then((result) => result.json()).then((resp)=>{
          console.warn(resp)
          getScheduleList();
        })
      };


    let { path, url } = useRouteMatch();

    return(
        <div class="tabcontent">

            <div class="headname">Welcome, Dr. Dela Cruz!</div>
            <div class="row">

                <div class="col-10">
                    <div class="dashboardtext"> Today's Schedule     
                        <Link to={`${url}/createschedule`}>  
                            <button class="plusbutton" onClick={() => setmodalIsOpen(true)}>+</button> 
                        </Link>
                </div>
                <Switch>
                    <Route 
                    path={`${path}/createschedule`}>
                        <CreateSchedule  modalIsOpen={modalIsOpen}/>
                    </Route>
                    <Route 
                    path={`${path}/edit/:id`}>
                        <EditSchedule  modalIsOpen={modalIsOpen} />
                    </Route>
                </Switch>

                    <table className="table table-borderless mt-3">
                        <tbody>              
                       { items.map( sched => ( 
                       <button class="listbutton justify-content-center " onClick={() => setmodalIsOpen(true)}  >
                        <div class="row">
                        <div class="col-11">
                           <Link to={`${url}/edit/${sched._id}`} style={{ textDecoration:'none', color:'#636262'}}>  
                       
                            <tr class="row g-3 align-items-center" key={sched._id} style={{textTransform:'capitalize'}}>
                            <td class="col-4">
                                {sched.fname} {sched.lname}
                            </td>
                            <td class="col-3">
                                {sched.time}
                            </td>
                            <td class="col-3">
                                {sched.date}
                            </td>
                            </tr>
                            </Link>
                        </div>
                            <div class="col-1">
                                <button class="xbutton" onClick={() => onDelete(sched._id)}>x</button>
                            </div>
                        </div>
                        </button>
                        
                        ))}
                        </tbody>
                    </table>

                </div>

            </div>

    </div>     
    )
}