
import React from "react";
import './App.css'; 

function Enquires(){
    return(
<main>
   
   <h1 class="header">Enquires</h1>
    
    <form id="your_info">
        <div id="form_header"><b>You're Info</b></div>
        <div id="name_div">
          <label for="name">First Name:</label>
          <input type="text" name="firstname" required></input>
          </div>
          <div id="LastName">
          <label for="name">Last Name:</label>
          <input type="text" name="lastname" required></input>
        </div>
        <div id="country_div">
          <label for="country">Country:</label>
          <input type="text" name="country" required></input>
        </div>
        <div id="email_div">    
          <label for="email">Email:</label>
          <input type="text" name="email" id="email" required></input>
        </div>  
        <div id="phone_div">
          <label for="phone">Phone Number:</label>
          <input type="text" name="phone" required></input>
        </div>
          <button id="submit">Submit</button>
          </form>

        <div>
          <p id="MoreInfo">Need More Info?</p>
          <p id="call">Call 1-(888)-892-2228</p>
        </div>

          
</main>
    )
}
export default Enquires;