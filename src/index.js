import React from 'react';
import {render} from 'react-dom';
import {BrowserRouter as Router} from 'react-router-dom';
import AccountProvider from "./context/providers/AccountProvider";
import DataProvider from "./context/providers/DataProvider";
import './assets/styles/index.scss';
import AppLayout from './layouts';


render(
    <Router>
        <AccountProvider>
            <DataProvider>
                <AppLayout/>
            </DataProvider>
        </AccountProvider>
    </Router>
    , document.getElementById('root'));