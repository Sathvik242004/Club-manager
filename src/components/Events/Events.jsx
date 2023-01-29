import React from 'react'
import './Events.css'
import {Link,Outlet} from 'react-router-dom'
import {useForm} from 'react-hook-form'


export default function Events() {
  let {register,handleSubmit,formState:{errors}}=useForm()
  let submitForm=(userObj)=>{
    console.log(userObj)
  }
  return (
    <div>
      <h1 className="text-center text-primary">Create An Event</h1>
      <div id="dim">
    <div className=" reg container mt-5 ">
      <style> @import url('https://fonts.googleapis.com/css2?family=Archivo+Narrow:ital,wght@0,500;1,400&family=Berkshire+Swash&family=Carter+One&family=DM+Serif+Text:ital@1&family=Khand&family=Oleo+Script&family=Permanent+Marker&family=Righteous&display=swap'); </style>
        <form onSubmit={handleSubmit(submitForm)}>
          <div className="row row-cols-1 row-cols-lg-2">
          <div className="col mx-auto">            
                    <label htmlFor="eventname">Event-Name</label>
                    <input type="text"  className='form-control mb-3' placeholder='Username' {...register("eventname",{required:{value:"true",message:"* Eventname is required"},minLength:{value:4,message:"* Eventname is Too Small"}})}/>
                    {errors.firstname?.message && <p className="text-danger">{errors.firstname?.message}</p> }            
          </div>
          <div className="col mx-auto" >
            <label htmlFor="email">Email</label>
            <input type="email" className='form-control' placeholder='emali id'  {...register("email",{required:{value:"true",message:"* email is required"}})}/>
            {errors.email?.message &&<p className="text-danger">{errors.email?.message}</p>}   
          </div>

          <div className="col mx-auto">
            <label htmlFor="number">Phone Number</label>
            <input type="number"  id="" className='form-control' placeholder="phone number" {...register("number",{required:{value:"true",message:"*Phone number is required"},minLength:{value:10,message:"*Phone number length should be 10"},maxLength:{value:10,message:"*Phone number length should be 10"}})} />
            {errors.number?.message && <p className='text-danger'>{errors.number?.message}</p> }
          </div>
          </div> 

          <div className="row row-cols-1 ">
        
          </div>
          
          <button type='submit' className="btn mr-0 mt-3">Submit</button>
         

           
          </form>
    </div></div>




        <ul className="nav justify-content-center">
            <li className="nav-item">
                <Link className='btn nav-link' to='previousevents'>PreviousEvents</Link>
            </li>
            <li className="nav-item">
                <Link className="btn nav-link" to='upcomingevents'>UpcommingEvents</Link>
            </li>
        </ul>
        <Outlet/>        
    </div>
  )
}
