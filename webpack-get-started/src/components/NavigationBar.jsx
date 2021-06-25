import React from 'react';
import { Link } from 'react-router-dom';

const NavigationBar = (props) => {
    return (
        <div className="navigation-bar">
            <ul>
                <li><Link to="/empty">Empty component</Link></li>
                <li><Link to="/jquery">JQuery component</Link></li>
                <li><Link to="/lodash">Lodash component</Link></li>
                <li><Link to="/vehicles">JSP component</Link></li>
            </ul>
        </div>
    );
};

export default NavigationBar;
