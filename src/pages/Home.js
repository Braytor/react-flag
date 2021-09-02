import Navigation from "../components/navigation";
import Logo from "../components/Logo";
import React from "react";
import Countries from "../components/Countries";

const Home = ()=>{
    return (
        <div className='home'>

            <Navigation></Navigation>
            <Logo />

            <Countries />
        </div>
    )
}

export default Home;
