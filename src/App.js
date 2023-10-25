import React from 'react'
import SignUp from './Components/SignUp/SignUp'
// import Registrstion from './Components/Registration/Registrstion'
// import Profile from './Components/Teacher/Profile/Profile'
import Home from './Components/Home/Home'
import { BrowserRouter,Route , Routes} from "react-router-dom";
import Registrstion from './Components/Registration/Registrstion';
import Course from './Components/Main/Course/Course';

const App = () => {
  return (
    <>
    <BrowserRouter>
    
    <Routes>
      <Route element={<Home/>} path='/' />
      <Route element={<Registrstion/>}  path='/signUp'/>
      <Route element={<SignUp/>}  path='/login'/>
      <Route element={<Course/>} path='/course'/>
    </Routes>

    </BrowserRouter>
    

    {/* <--------------------------Home-----------------------------------> */}
        

        
    

    {/* <--------------------------------SignUp------------------> */}

  
    {/* <Registrstion/> */}

    {/* <--------------------------------SignUp------------------> */}

    {/* <-----------------------Teacher----------------> */}
    {/* <Profile/> */}
    
   
    
    </>
  )
}

export default App