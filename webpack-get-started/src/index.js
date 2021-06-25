import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import ReactDOM from 'react-dom';
import Application from './components/Application.jsx';

ReactDOM.render(
    <Router>
        <Application />
    </Router>,
    document.getElementById('root')
);