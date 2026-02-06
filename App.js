/*import React from 'react';
import"./style.css"
export default function Head (){

  return<div>
 <h1>Employee Details</h1>
     <p>---------------</p>
     <h4>Employee Id: 134</h4>
    <h4>Employee Name: POOJA</h4>
    <h4>Employee Company: xyz</h4>
    <h4>Employee Salary: 4674567</h4>
    <h4>Employee Location: Bengaluru</h4> 
   <h4>Employee Phone: 456789987</h4>
    </div>
};
// export default Head;
*/

// Mini Project Youtube



import './style.css';

function YouTube() {
  return (
  <div className="container">
      <div className="login-card">
        <h1>YouTube</h1>
        

        <input type="text" placeholder="Your username" />
        <input type="password" placeholder="Password" />

        <div className="options">
          <label>
            <input type="checkbox" /> Remember me
          </label>
          <span>Forgot Password?</span>
        </div>

        <button>Log In</button>

        <p className="signup">
          Don’t have an account? <span>Sign Up</span>
        </p>
      </div>
    </div>
  );
}

export default YouTube;

/*
// Props

import React from 'react';

function Parent(props){
  return<h1>Hello,{props.name}</h1>
};
export default Child
function Child(){
  return (
    <Parent   name="Pooja" />  // concept of jsx (javascirpt xml)
  )
} 


  // State

  import React , {useState} from 'react';

  function State(){

    const[message,setMessage] = useState("Hello")
    
    return <div>

    <h1>{message}</h1>

    <button
    onClick = {()=>setMessage("Pooja")}

    
    >Change Text</button>
    </div>
  };

  export default State

  */



 //Counting Buffer System

