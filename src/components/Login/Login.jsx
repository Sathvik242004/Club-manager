import React from 'react'
import {Link,Outlet} from 'react-router-dom'
import {Row,Col} from 'react-bootstrap'

export default function Login() {
  return (
    <div>
      <Row>

      </Row>
      {/* <ul className="nav justify-content-center">
        <li className="nav-item">
            <Link className='nav-link' to='studentlogin'>StudentLogin</Link>
        </li>
        <li className="nav-item">
            <Link className="nav-link" to='clublogin'>ClubLogin</Link>
        </li>
      </ul> */}
      <Outlet/>
    </div>
  )
}