import React from 'react'
import download from '../images/Frame 19.png';
import Comman from './Comman';

function About() {

    return (

        <>
            <Comman 
            name="Welcome to About page" 
            imgsrc={download} 
            visit="#"  
            btnname="Contact Now"
            />
        </>
    )
}

export default About