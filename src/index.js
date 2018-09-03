import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

import { BrowserRouter, Route, Switch } from 'react-router-dom';
import App from './App';
import Navbar from './components/navbar';
import Meryoul from './meryoul';
import Site from './site';

import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(
    <BrowserRouter>
        <div>
        <Navbar/>
        <Switch>
            <Route exact path='/' component={App}></Route>
            <Route path='/meryoul' component={Meryoul}></Route>
            <Route path='/site' component={Site}></Route>
        </Switch>
        </div>
    </BrowserRouter>
    , document.getElementById('root'));
registerServiceWorker();
