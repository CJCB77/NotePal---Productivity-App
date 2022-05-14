import React from 'react'
import FormSide from './FormSide'
import googleIcon from '../imgs/googleIcon.svg'
import facebookIcon from '../imgs/facebookIcon.svg'

export default function Login() {

  const [userCredentials, setUserCredentials] = React.useState({
    email: '',
    password: ''
  })

  function handleChange(e) {
    const { name, value } = e.target
    setUserCredentials({
      ...userCredentials,
      [name] : value
    })
    console.log(userCredentials)
  }

  return (
    <section className='login'>
      <FormSide />
      <div className='login__main'>
        <h1>Hello Again!</h1>
        <h2>Enter your credentials to access your account</h2>
        <form action="">
          <div className='form__field'>
            <label htmlFor="">Email</label>
            <input type="text" name="email" id="email" 
              value={userCredentials.email} onChange={handleChange} />
          </div>
          <div className='form__field'>
            <label htmlFor="">Password</label>
            <input name="password" id="password" type="password"
              value={userCredentials.password} onChange={handleChange} />
          </div>
          <div className='form__details'>
            <div className='form__checkbox'>
              <input type="checkbox" name="remember" id="remember" />
              <label htmlFor="">Remember me</label>
            </div>
            <a href='#' className='recovery'>Forgot password?<span className='txt--black'> Recovery</span></a>
          </div>
          <button className='form__btn'>Login</button>
        </form>
        <div className='separator'>
          <hr className='separator__line'/>
          <p>or</p>
          <hr className='separator__line'/>
        </div>
        <div className='auth__socials'>
          <button className='btn--google'>
            <img src={googleIcon} alt="" />
            Sign up with Google
          </button>
          <button className='btn--facebook'>
            <img src={facebookIcon} alt="" />
            Sign up with Facebook
          </button>
        </div>
      </div>
    </section>
  )
}
