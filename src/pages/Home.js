import React from "react";

import Logo from "../components/Logo/Logo";
import LoginForm from "../components/Login/LoginForm";
// import Footer from "../components/Footer/Footer";

function Home() {
    return (
        <div className="home">
            <Logo/>
            <LoginForm/>
            {/* <Footer/> */}

        </div>
    )
}

export default Home;