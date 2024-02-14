import React from "react";

import Header from "../components/Header/Header";
import RegistrationForm from "../components/Registration/RegistrationForm";

function Registration() {
    return (
        <div className='registration'>
        <Header/>
        <RegistrationForm/>
        </div>
    );
}

export default Registration;