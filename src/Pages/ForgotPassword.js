import React from 'react';
import './Pages/Forgotpassword.css';


function Forgotpassword() {
  return (
    <div className='brand'>

      <div className="navbar">
         <img src="./Assets/Vector.png" alt="logo" />
         <h2 className='media-title'>Media Hub</h2>
         <button className='sigup'>Sign up</button>
      </div>

      <div className='container'>
        <div className="pass">
          <h1>Forgot Password?</h1>
          <input type="text" placeholder='Enter Email Address' />
        </div> 
        <div className='get-title'>
          <h4>Didn’t get an email? <span>Resend</span><h4 className='add'>00:30</h4></h4>
        </div>
      <div className="submit-btn">
        <button>submit</button>
      </div>
      </div>
    </div>
  );
}

export default Forgotpassword;