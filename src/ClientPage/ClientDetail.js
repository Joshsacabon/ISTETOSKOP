import React from 'react'
import { Switch, Route, Link, useRouteMatch } from 'react-router-dom';
import { BasicInfo } from './BasicInfo';
import { MedicalInfo } from './MedicalInfo';

export const ClientDetail = ({client, onSubmitting}) => {

    let { path, url } = useRouteMatch();

    return (
        <div className="body1">
                    <div className="headerclient">
                    <div class="row g-3 align-items-center">
                        <div class="col-3">
                            <Link to={`${url}/basicinformation`}> 
                                <button class="clientbutton">             
                                    Basic Information
                                </button>     
                            </Link>
                        </div>
                        <div class="col-3">
                            <Link to={`${url}/medicalinformation`} > 
                                <button class="clientbutton">             
                                    Medical Information
                                </button>     
                            </Link>
                        </div>
                        <div class="col-3">
                            <Link to={`${url}/calendar`} > 
                                <button class="clientbutton">             
                                    Transaction History
                                </button>     
                            </Link>
                        </div>
                        <div class="col-3">
                            <Link to='/home/clientlist' > 
                                <button class="clientbutton" style={{width: '50%', float:'right', fontSize:'20px'}}>             
                                    Go Back
                                </button>     
                            </Link>
                        </div>
                    </div>
                </div>
            <div className="row">
                <div className="col-12">
                    <div class="clientpage">
                    <Switch>
                        <Route path={`${path}/basicinformation`} >
                            <BasicInfo client={client} onSubmit={onSubmitting}/>    
                        </Route>
                        <Route path={`${path}/medicalinformation`} component={MedicalInfo}/>
                    </Switch>
                    </div>
                </div>
            </div>

        </div>

    )
}
