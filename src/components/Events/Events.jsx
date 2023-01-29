import React from 'react'
import './Events.css'
import {Link,Outlet} from 'react-router-dom'

export default function Events() {
  return (
    <div>
        <ul className="nav justify-content-center">
            <li className="nav-item">
                <Link className='nav-link' to='previousevents'>PREV</Link>
            </li>
            <li className="nav-item">
                <Link className="nav-link" to='upcomingevents'>UPCO</Link>
            </li>
        </ul>
        <Outlet/>        
    </div>
  )
}
