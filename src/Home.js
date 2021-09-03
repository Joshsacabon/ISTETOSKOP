import React from 'react'
import { Switch, Route, Link, useRouteMatch } from 'react-router-dom';
import { ClientList } from './ClientList';
import { Dashboard } from './Dashboard';

function Home() {

    let { path, url } = useRouteMatch();

    return (
        <div className="body1">
            <div class="row g-3 align-items-center">
                    <div className="headerhome">
                        <button class="headerbutton">Logout</button> 
                        <div class="headerbutton"> | </div>
                        <button class="headerbutton">Contact Us</button>  
                        <div class="headerbutton"> | </div>
                        <button class="headerbutton">About</button> 
                    </div>
                </div>
            <div className="row">
                <div class="col-3 ">
                    <div class="sidenav vh-100">
                        <img class="imgalign" 
                            src="https://www.freeiconspng.com/thumbs/medical-icon-png/health-insurance-icon-png-3.png" 
                            title="Title of image" 
                            alt="alt text here"/>

                            <hr className="linehr"/>
                                <Link to={`${url}/dashboard`}> 
                                    <button class="tablinks">             
                                        Dashboard
                                    </button>     
                                </Link>

                            <hr className="linehr"/>
                            <Link to={`${url}/clientlist`} > 
                                    <button class="tablinks">             
                                        Client
                                    </button>     
                                </Link>
                            <hr className="linehr"/>
                            <button class="tablinks" onclick="contenttab(event, 'Calendar')" > Calendar</button>
                            <hr className="linehr"/>
                    </div>
                </div>
                <div className="col-9">
                    <div class="homearticle">
                    <Switch>
                        <Route path={`${path}/dashboard`} component={Dashboard}/>
                        <Route path={`${path}/clientlist`} component={ClientList}/>
                    </Switch>
                    </div>
                </div>
            </div>

        </div>

    )
}
export default Home;