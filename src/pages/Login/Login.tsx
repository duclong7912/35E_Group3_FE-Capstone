import React from 'react'
import { NavLink } from 'react-router-dom'

type Props = {}

const Login = (props: Props) => {

  const handleClick = () => {
    const reg = document.querySelector('.temp__card');
    
    
  }

  return (
    <div className="login">
      <div className="login__content">
        <h2>Login</h2>
        <form className='form'>
          <div className="form__content">
            <div className="form__input">
              <input type="text" name='email' required />
              <i className="fa-solid fa-user"></i>
              <span>Email</span>
            </div>
            <div className="form__input">
              <input type="text" name='password' required />
              <i className="fa-solid fa-lock"></i>
              <span>Password</span>
            </div>
            <div className="form__submit-login">
              <button type='submit'>Login</button>
            </div>
            <div className="form__info">
              <p>Don’t have an account? <NavLink to='/users/register' onClick={() => {handleClick()}}>Sign up</NavLink></p>
            </div>
          </div>
        </form>
      </div>
    </div>
  )
}

export default Login