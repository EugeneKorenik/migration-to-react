import React from 'react';
import {Link} from 'react-router-dom';

const EmptyComponent = (props) => {
    return (
        <div className="lodash-component">
            <h1>This is simple empty component</h1>
            <Link to='/'>To main page</Link>
        </div>
    );
};

export default EmptyComponent;