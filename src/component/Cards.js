import React from 'react'

function Cards(props) {
    return (
        <>


                            <div className='col-md-4 max-auto text-center'>
                                <div class="card">
                                    <img src={props.imgsrc} class="card-img-top" alt="..." />
                                        <div class="card-body">
                                            <h5 class="card-title font-weight-bold" >{props.title}</h5>
                                            <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                            <a href="#" class="btn btn-primary">Go somewhere</a>
                                        </div>
                                </div>
                            </div>

        </>
    )
}

export default Cards