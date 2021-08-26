import React from 'react'
import { Route, Switch, Link, useRouteMatch } from 'react-router-dom'
import { Practitioner } from './Practitioner'
import { Client } from './Client'


function Registration() {

    let { path, url } = useRouteMatch();

    return (
        <div >
            <div className="container text-dark bg-info rounded w-25 mt-5 containerregister">
                <div className="mb-3 p-3">
                    <div className="row g-3 align-items-center">
                        <h1>Select:</h1>
                    </div>
                    <button type="submit"  class="practitionerbutton">
                        <Link to={`${url}/practitioner`} style={{ color: '#FFF', textDecoration: 'none' }} >                   
                            Practitioner
                        </Link>
                    </button>

                    <button type="submit" class="practitionerbutton">
                        <Link to={`${url}/client`} style={{ color: '#FFF',textDecoration: 'none' }}>                   
                            Client
                        </Link>
                    </button>

                    
                </div>
            </div>
          <Switch>
            <Route path={`${path}/client`} component={Client}/>
            <Route path={`${path}/practitioner`} component={Practitioner}/>
          </Switch>
        </div>
      );
}

export default Registration;