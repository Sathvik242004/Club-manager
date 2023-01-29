import React from 'react'
import "./Home.css"
import Carousel from 'react-bootstrap/Carousel'
import {Button,Row,Col,Card,Form} from 'react-bootstrap';

function Home() {
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
          <button className='reg bg-white'>Register </button>
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
        <button className='reg bg-white'>Register </button>
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
        <button className='reg bg-white'>Register </button>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
    </div>
  )
}

export default Home;