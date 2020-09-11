import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import AccountProvider from "./context/providers/AccountProvider";
import DataProvider from "./context/providers/DataProvider";
import './assets/styles/index.scss';
import AppLayout from './layouts';

const App = () => {
    return (
        <Router>
          <AccountProvider>
            <DataProvider>
              <AppLayout/>
            </DataProvider>
          </AccountProvider>
        </Router>
    )
}

export default App;