import React from 'react'


function Comman(props) {

    return (

        <>
            <section id="header" className=''>
                <div className='container nav_bg'>
                    <div className='row'>
                        <div className='col-12 '>
                            <div className='row'>
                                <div className='col-md-6 pt-5 pt-lg-0 order-2 order-lg-1'>
                                    <h1>{props.name}
                                        <strongs className="brand-name"> DIGITAL TECH</strongs>
                                    </h1>
                                    <h2 className='my-3'>
                                        We are the team for development the projects...
                                    </h2>
                                    <div className='mt-3'>
                                        <a href="" className='btn-get-started'>{props.btnname}</a>
                                    </div>
                                </div>
                                <div className='col-lg-6 order-1 order-lg-2 header-img'>
                                    <img src={props.imgsrc} className="img-fluid animated" alt="home img" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Comman