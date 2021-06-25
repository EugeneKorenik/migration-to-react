import React from 'react';
import $ from 'jquery';
import { Link } from 'react-router-dom';

const JQueryComponent = (props) => {
    const hiddenValue = $("input").value;
    return (
        <div className="jquery-component">
            <h1>This is jquery component</h1>
            <p>Hidden value of application: {hiddenValue}</p>
            <Link to="/">To main page</Link>
        </div>
    );
};

export default JQueryComponent;
