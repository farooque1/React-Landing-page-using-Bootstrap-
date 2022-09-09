import React from 'react'
import download from '../images/download.png';
import About from './About';
import Comman from './Comman';
import Contact from './Contact';
import Services from './Services';

function Home() {

    return (

        <>
            <Comman 
            name="Grow your business with" 
            imgsrc={download} 
            visit="#"  
            btnname="Get Started"
            />

        <About />
        <Services />
        <Contact /> 
        </>
    )
}

export default Home