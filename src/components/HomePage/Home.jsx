import React from 'react'
import "./Home.css"
import Carousel from 'react-bootstrap/Carousel'

function Home() {
  return (
    <div>
        <Carousel className=''>
      <Carousel.Item interval={1000}>
        <img
          className="d-block w-100"
          src="Assets/scinti.jpg "
          alt="First slide" width="100px" height="450px"
        />
        <Carousel.Caption>
          <div className="first text-dark">
            <h2>scintillashunzatvnrvjiet <br/> February 5,6 <br/> Grab your Passes</h2>
          </div>
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
            <h4>If you are in safe location? <br/> Please do respond for popup?</h4>
          </div>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="Assets/code.jpg "
          alt="Third slide" width="100px" height="450px"
        />
        <Carousel.Caption>
        <div className="first text-dark ">
            <h4>If not ? <br/> We will share your location to your Emergency contacts </h4>
          </div>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
    </div>
  )
}

export default Home;
