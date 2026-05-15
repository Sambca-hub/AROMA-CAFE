import React from 'react'

const Reserve = () => {
  return (
    <div className='reserve'>
      
      <h1 className='title2'>Reservation Form</h1>
        <form>
        <h4>Enter Name:</h4>
        <input type="text" placeholder=" enter your name"/><br/><br/>
        <h4>Phone Number:</h4>
        <input type="tel" placeholder=" enter your phone number"/><br/><br/>
        <h4>Guests:</h4>
        <select>
          <option value="1">1 Guest</option>
          <option value="2">2 Guests</option>
          <option value="3">3 Guests</option>
          <option value="4">4 Guests</option>
          <option value="5">5 Guests</option>
          <option value="6">6 Guests</option>
          <option value="7">Above 6 Guests</option>
        </select><br/><br/>
         <h4>Request:</h4>
         <textarea rows="5" placeholder=" Allergies, dietary  restrictions, etc. or special requests"></textarea><br/><br/>
         <h4>Date and Time:</h4>
          <input type="datetime-local"/><br/><br/>
        <input class="btn" type="submit" value="Reserve a Table"/>
    </form>
    </div>
  )
}

export default Reserve