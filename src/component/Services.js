import React from 'react'
import Cards from './Cards';
import data from './data';

function Services() {
    return (
        <>

            <div className='my-5'>
                <h1 className='text-center service'>Our Services</h1>
            </div>

            <div className='container mb-5'>
                <div className='row'>
                    <div className='col-12 max-auto'>
                        <div className='row gy-4'>
                        {
                        data.map((val,ind)=>{
                        return  <Cards key={ind} imgsrc={val.imgsrc} title={val.title}/>

                        })}   
                           
                        
                        </div>
                    </div>
                </div>
            </div>

        </>
    )
}

export default Services