import { useState } from "react";
import "./Userdetails.css"

import axios from "axios";
import baseurl from "../Api";
const Userdetails = () => {

    const [email,setEmail]=useState('')
  
  const [error, setError] = useState('');
 


  

  

     const handleSubmit = async (e) => {
      e.preventDefault();
  
      try {
       

      const response = await axios.post(baseurl+'/register/registerview', {
        email: email,
        
      });
        
  
        if (response.data.success) {
          alert('Search successful');
          console.log(response.data);
         
        } 
        else {
            setError('Invalid User ID or Password. Please try again.');
            console.log(response.data);
  
          }
    } catch (err) {
        setError('Error occurred during login. Please try again.');
      }
    };
  return (
    <div className="register">
      <span className="registerTitle">User Details</span>
   <form className="registerForm" onSubmit={handleSubmit}>
   <label>Email</label>
   <input
            type="text"
            name="username"
            className='registerInput'
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            
          />
          {error && <p style={{ color: 'red' }}>{error}</p>}
      <button  className="registerButton" type="submit"  >Search</button>   
   </form>
    </div>
  )
}

export default Userdetails
