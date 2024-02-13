import React from "react";
import { faSignOutAlt } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';


import Header from "../components/Header/Header";

function Logout() {
    return (
        <div className="logout">
            <Header/>
        <p className="logout-text">You have been logged out.</p>
        <FontAwesomeIcon icon={faSignOutAlt} size="2x"/>
        </div>
    )
}


export default Logout;