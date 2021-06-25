import React from 'react';
import {Link} from 'react-router-dom';
import _ from 'lodash';

const LodashComponent = (props) => {
    const array = [1,2,3,4,5,6];
    const result = _.chunk(array, 2);
    const stringResult = JSON.stringify(result);

    return (
        <div className="lodash-component">
            <h1>This is lodash component</h1>
            <p>Lodash result: {stringResult}</p>
            <Link to='/'>To main page</Link>
        </div>
    );
};

export default LodashComponent;
