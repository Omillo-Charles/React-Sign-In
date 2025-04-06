import React from 'react'
import 'bootstrap-icons/font/bootstrap-icons.css';
import './Form.css'

const Form = () => {

  return (
    <div className='Form'>

      <form action="#">
      <h2>REGISTER TO CHAMAA</h2>
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
        <i class="bi bi-eye-slash"></i>
      </div>

      <div className="register">
        <input type="submit" value="Register" />
      </div>

        <div className="login">
            <p>Already have an an account? <span className='loginSpan'>login.</span></p>
        </div>
      <div className="auth">
        <div className="google">
        <i class="bi bi-google"> Google</i>
        </div>

        <div className="facebook">
        <i class="bi bi-facebook"> Facebook</i>
        </div>
      </div>
      </form>
    </div>
  )
}

export default Form
