import React from 'react';
import { Link } from 'react-router-dom';

class JspComponent extends React.Component {

    componentDidMount() {
        const vehiclesUri = "http://localhost:8080/vehicles";
        fetch(vehiclesUri)
            .then(response => response.text())
            .then(bodyValue => {
                const domParser = new DOMParser();
                const receivedDocument = domParser.parseFromString(bodyValue, 'application/xhtml+xml');

                const vehiclesList = receivedDocument.querySelector('#vehicles');
                const jspVehiclesDiv = document.querySelector('#jsp-vehicles');

                jspVehiclesDiv.append(vehiclesList);
            });
    }

    render() {
        return (
            <div>
                <div id="jsp-vehicles">
                </div>
                <Link to='/'>To main page</Link>
            </div>
        );
    }

}

export default JspComponent;