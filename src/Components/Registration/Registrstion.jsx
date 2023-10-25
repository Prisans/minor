import React from 'react'


const Registrstion = () => {
  return (
    <div className="container">
    <div className="img-screen"></div>

    <div className="txt-screen">

      <div className="txt2-container">
        <h1>New Account</h1>

        <div className="input-container">
          <input type="text" placeholder="First Name" required/>
          <input type="text" placeholder="Last Name" required/>
          <input type="email" placeholder="Email" required/>
          <input type="text" placeholder="continue further..." required/>
          <input type="password" placeholder="password" required />
          <input type="password" placeholder="Confirm Password" required />
          <button className='btn'>Regsiter</button>
        </div>


      </div>

    </div>
  </div>
  )
}

export default Registrstion