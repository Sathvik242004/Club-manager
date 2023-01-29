import React,{useState} from 'react'
import "./Home.css"
import Carousel from 'react-bootstrap/Carousel'
import {Button,Row,Col,Card,Form} from 'react-bootstrap';
const EventList = require('./EventList');

function Home() {


  
  const [query,setQuery]= useState("")
  // console.log(EventList.filter(event=>event.name.toLowerCase().includes("ha")))

  return (

    <div>
      
     
      <div className="current p-3 ">
        <h1 > Annual Fest at VNRvjiet</h1>
      </div>


        <Carousel className=''>
      <Carousel.Item interval={1000}>
        <img
          className="d-block w-100"
          src="Assets/scinti.jpg "
          alt="First slide" width="100px" height="450px"
        />
        <Carousel.Caption>
          <div className="first ">
            <h1>scintillashunzatvnrvjiet <br/> February 5 </h1>
          </div>
          <button className='btn btn-white'>Register </button>
        </Carousel.Caption>
      </Carousel.Item>
     
      <Carousel.Item interval={500}>
        <img
          className="d-block w-100"
          src="Assets/hack.jpg "
          alt="Second slide" width="100px" height="450px"
        />
        <Carousel.Caption>
        <div className="first text-white">
            <h1>VJ Hackathon  <br/> February 6,7 </h1>
        </div>
        <button className=' btn btn-white'>Register </button>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="Assets/code.jpg "
          alt="Third slide" width="100px" height="450px"
        />
        <Carousel.Caption>
        <div className="first ">
            <h1>Coding Contest <br/>February 4 </h1>
        </div>
        <button className='btn btn-white'>Register </button>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>

    <div className='contain  mb-5'>      
      <h2 className='m-4 mt-5 mb-2 '>Search the Event <br/> to Register 
        
          <input type="text" placeholder='Search' className='search mt-4' onChange={(e)=>setQuery(e.target.value)} />

          </h2> 
          {/* <ul className='list mt-3'> <h3 className='eve mt-3'> Events </h3>
             {EventList.filter(event=>event.name.toLowerCase().includes(query)).map((event)=>(
              <li key={event.id} className='listevent '>{event.name}</li>
             ))}

          </ul> */}



      <img id='girl' src="https://img.freepik.com/free-vector/group-college-university-students-hanging-out_74855-5251.jpg  " alt="" />      
    </div>
    
    </div>
  )
}

export default Home;