import React from 'react'
import './Form.css'

const Form = () => {

  return (
    <div className='Form'>
        <h2>REGISTER TO CHAMAA</h2>
      <form action="#">
      <div className="name">
        <input type="text" id='name' autoComplete='off'/>
        <label htmlFor="name">Your Name</label>
      </div>

      <div className="email">
        <input type="email" name="email" id="email" autoComplete='off' />
        <label htmlFor="email">Email Address</label>
      </div>

      <div className="password">
        <input type="password" name="password" id="password" autoComplete='off' />
        <label htmlFor="password">Password</label>
      </div>

      <div className="register">
        <input type="submit" value="Register" />
      </div>
      </form>
    </div>
  )
}

export default Form
