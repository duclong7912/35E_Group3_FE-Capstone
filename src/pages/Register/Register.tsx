import React from 'react'
import { NavLink } from 'react-router-dom';

type Props = {}


const Register = (props: Props) => {

  const hadleChange = (e:any) => {
    console.log(e.target.value);
    
  }

  return (
    <div className="register">
      <div className="register__content">
        <h2>Register</h2>
        <form className='form'>
          <div className="form__content">
            <div className="form__input">
              <input type="text" name='email' required />
              <i className="fa-solid fa-envelope"></i>
              <span>Email</span>
            </div>
            <div className="form__input">
              <input type="text" name='name' required />
              <i className="fa-solid fa-user"></i>
              <span>Name</span>
            </div>
            <div className="form__input">
              <input type="password" name='password' required />
              <i className="fa-solid fa-lock"></i>
              <span>Password</span>
            </div>
            <div className="form__input">
              <input type="password" name='confirmPassword' required />
              <i className="fa-solid fa-lock"></i>
              <span>Confirm Password</span>
            </div>
            <div className="form__input">
              <input type="text" name='phone' required />
              <i className="fa-solid fa-phone"></i>
              <span>Phone</span>
            </div>
            <div className="form__input">
              <input type="date" name='date' required />
              <i className="fa-solid fa-cake-candles"></i>
              <span>Your birthday</span>
            </div>
            <div className="form__gender">
              <input type="radio" id='male' name='gender' value={"true"} onChange={hadleChange}/>
              <input type="radio" id='female' name='gender' value={"false"}/>
              <div className="gender__tilte">
                <i className="fa-solid fa-venus-mars"></i>
                <span>Gender</span>
              </div>
              <div className="category">
                <label htmlFor="male">
                  <span className='dot dot-male'></span>
                  <span className='gender'>Male</span>
                </label>
                <label htmlFor="female">
                  <span className='dot dot-female'></span>
                  <span className='gender'>Female</span>
                </label>
              </div>
            </div>
            <div className="form__submit-login">
              <button type='submit'>submit</button>
            </div>
            <div className="form__info">
              <p>Already have an account? <NavLink to='/users/login'>Log in</NavLink></p>
            </div>
          </div>
        </form>
      </div>
    </div>
  )
}

export default Register