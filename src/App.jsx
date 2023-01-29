import './App.css';
import RootLayout from './components/RootLayout'
import Clubs from './components/Clubs/Clubs'
import Home from './components/HomePage/Home'
import Login from './components/Login/Login'
import Events from './components/Events/Events'
import StudentLogin from './components/Login/StudentLogin/StudentLogin'
import ClubLogin from './components/Login/ClubLogin/ClubLogin'
import PreviousEvents from './components/PreviousEvents/PreviousEvents'
import UpcomingEvents from './components/UpcomingEvents/UpcomingEvents'
import Register from './components/Register/Register'
import { createBrowserRouter,RouterProvider } from 'react-router-dom';

function App() {
  const router=createBrowserRouter([
    {
      path:"/",
      element:<RootLayout/>,
      children:[
        {
          path:"/",
          element:<Home/>
        },
        {
          path:"/clubs",
          element:<Clubs/>
        },
        {
          path:"/events",
          element:<Events/>,
          children:[
            {
              path:"previousevents",
              element:<PreviousEvents/>
            },
            {
              path:"upcomingevents",
              element:<UpcomingEvents/>
            }
          ]
        },
        {
          path:"/login",
          element:<Login/>,
          children:[
            {
              path:'studentlogin',
              element:<StudentLogin/>
            },
            {
              path:'clublogin',
              element:<ClubLogin/>
            }
          ]
        },
        {
          path:"/register",
          element:<Register/>
        }      
      ]
    }
  ])
  return (
    <div >
      
      <RouterProvider router={router}/>
    </div>
  );
}

export default App;