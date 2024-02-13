import React from "react";

import Header from "../components/Header/Header";
import Logo from "../components/Logo/Logo";
import LoginForm from "../components/Login/LoginForm";
import Footer from "../components/Footer/Footer";


function Home() {
    return (
        <div className="home">
            <Header/>
            <Logo/>
            <LoginForm/>
            <Footer/>
        </div>
    )
}

export default Home;