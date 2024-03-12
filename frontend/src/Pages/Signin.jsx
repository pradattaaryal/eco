import React, { useState } from 'react';
import './CSS/Ls.css';

const Signin = () => {
   const [formdata, setFormdata] = useState({
    email: "",
    password: ""
  });
  const changeHandler = (e) => {
    setFormdata({ ...formdata, [e.target.name]: e.target.value });
  };
  
  const Signin = async (e) => {console.log(formdata);
    e.preventDefault();
    try {
      const response = await fetch('https://eco-backend-boxa.onrender.com/signup', {
        method: 'POST',
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formdata),
      });
   
      let responseData = await response.json();
       
      if (responseData ) {
        localStorage.setItem('auth-token', responseData.token);
       window.location.replace('/');
        console.log("response received")
      } else {
        // Handle unsuccessful login here
        console.error("Login failed:", responseData);
      }
    } catch (error) {
      console.error("Error during login:", error);
      // Handle the error appropriately (e.g., show an error message to the user)
    }
  };

  return (
    <div className='ls'>
      <div className="ls-container">
        <h1>Signin</h1>
        <form onSubmit={Signin}> {/* Use onSubmit event handler */}
          <div className="ls-fields">
            <input type="email" name='email' value={formdata.email} onChange={changeHandler} placeholder='Email Address' autoComplete="username" />
            <input type="password" name='password' value={formdata.password} onChange={changeHandler} placeholder='Password' autoComplete="current-password" />
          </div>
          <button type="submit">Continue</button> {/* Use type="submit" */}
           
          <div className="ls-agree">
            <input type="checkbox" name='checkbox' id='checkbox' />
            <p> Signup as Admin</p>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Signin;
