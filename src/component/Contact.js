import React,{useState} from 'react'

function Contact() {

    const [data,setdata] = useState({
        
        fullname:"",
        phone:"",
        email:"",
        msg:"",

    })

    const InputEvent =(e)=>{
        const {name,value}=e.target;
        setdata((pre)=>{
            return {
                ...pre,
                [name] : value,
            }
        })
    }

    const formsubmit = (e) =>{
        e.preventDefault();
        alert(`${data}`);
        console.log(data)
    };


    return (
        <>
            <div className='my-5'>
                <h1 className='text-center'>Contact Us</h1>
            </div>

            <div className='container contact_div'>
                <div className='row'>
                    <div className='col-md-6 col-10 mx-auto'>
                        <form onSubmit={formsubmit}>
                            <div class="mb-3">
                                <label for="exampleFormControlInput1" class="form-label">
                                    Full Name
                                </label>
                                <input
                                    type="text"
                                    name="fullname"
                                    value={data.fullname}
                                    onChange={InputEvent}
                                    class="form-control"
                                    id="exampleFormControlInput1"
                                    placeholder="Full Name"
                                />
                            </div>

                            <div class="mb-3">
                                <label for="exampleFormControlInput1" class="form-label">
                                    Phone
                                </label>
                                <input
                                    type="text"
                                    name="phone"
                                    value={data.phone}
                                    onChange={InputEvent}
                                    class="form-control"
                                    id="exampleFormControlInput1"
                                    placeholder="Phone number"
                                />
                            </div>


                            <div class="mb-3">
                                <label for="exampleFormControlInput1" class="form-label">
                                    Email address
                                </label>
                                <input
                                    type="email"
                                    name="email"
                                    value={data.email}
                                    onChange={InputEvent}
                                    class="form-control"
                                    id="exampleFormControlInput1"
                                    placeholder="name@example.com"
                                />
                            </div>

                            <div class="mb-3">
                                <label for="exampleFormControlTextarea1" class="form-label">
                                    Example textarea
                                </label>
                                <textarea
                                    class="form-control"
                                    name="msg"
                                    value={data.msg}
                                    onChange={InputEvent}
                                    id="exampleFormControlTextarea1"
                                    rows="3"
                                >

                                </textarea>
                            </div>

                            <div class="col-auto">
                                <button type="submit" class="btn btn-outline-primary mb-5">Submit Form</button>
                            </div>

                        </form>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Contact