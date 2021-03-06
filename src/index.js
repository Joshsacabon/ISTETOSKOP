import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import 'bootstrap/dist/css/bootstrap.css';
import App from './App';
import Registration from './Registration'
import Home from './Home'
import { BrowserRouter, Route, Switch  } from 'react-router-dom'
import * as serviceWorker from './serviceWorker';
import { Practitioner } from './Practitioner';
import { Client } from './Client';
import CreateClient from './ClientPage/CreateClient';
import EditClient from './ClientPage/EditClient';


ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={App} />
        <Route path="/create" component={Registration}/>
        <Route path="/home" component={Home}/>
        <Route path="/createclient" component={CreateClient}/>
        <Route path="/editclient/:id" component={EditClient}/>
        <Route path="/practitioner" component={Practitioner}/>
        <Route path="/client" component={Client}/>
      </Switch>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();