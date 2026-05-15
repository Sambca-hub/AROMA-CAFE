import React from 'react'

const Contact = () => {
  return (
    <div className='contact'>
        <h1 className='title'>Contact</h1>
        <form>
        <div className='form-field'><h4>Enter Name:</h4>
        <input type="text" placeholder=" enter your name"/><br/><br/></div>
        <div className='form-field'><h4>Email:</h4>
        <input type="email" placeholder="  enter your email address"/><br/><br/></div>
        <div className='form-field'><h4>Subject:</h4>
         <input type="text" placeholder=" subject"/><br/><br/></div>
         <div className='form-field'><h4>Message:</h4>
         <textarea rows="5" placeholder=" enter your message"></textarea><br/><br/></div>
         
        <input class="btn" type="submit" value="Send Message"/>
    </form>

        </div>
  )
}

export default Contact