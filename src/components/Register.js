import React from 'react'
import FormSide from './FormSide'
import googleIcon from '../imgs/googleIcon.svg'
import facebookIcon from '../imgs/facebookIcon.svg'

export default function Register() {

  return (
    <section className='register' >
      <FormSide />
      <div className='register__main'>
        <h1 className='register__title'>Get Started</h1>
        <a className='register__link' href="#">Already have an account?<span className='link--blue'>Log in</span></a>
        <div className='register__socials'>
          <button className='btn--google'>
            <img src={googleIcon} alt="" />
            Sign up with Google
          </button>
          <button className='btn--facebook'>
            <img src={facebookIcon} alt="" />
            Sign up with Facebook
          </button>
        </div>
        <div className='separator'>
          <hr className='separator__line'/>
          <p>or</p>
          <hr className='separator__line'/>
        </div>
        <form action="" className='register__form'>
          <div className='register__field'>
            <label htmlFor="email">Email</label>
            <input type="text" name="email" id="email"/>
          </div>
          <div className='register__field'>
            <label htmlFor="password">Password</label>
            <input type="password" name="password" id="password"/>
          </div>
          <div className='register__terms'>
            <input type="checkbox" id='terms' />
            <label htmlFor="terms">I agree to platform Terms of Services and Privacy Policy</label>
          </div>
          <button className='register__btn'>Register</button>
        </form>
      </div>
    </section>
  )
}
