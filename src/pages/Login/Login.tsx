import { useFormik } from 'formik'
import React, { useEffect, useState } from 'react'
import { NavLink, useNavigate } from 'react-router-dom'
import { LoginModel } from '../../Models/loginModel/loginModel'
import * as yup from "yup";
import BeatLoader from "react-spinners/BeatLoader";
import HashLoader from "react-spinners/HashLoader";
import { loginAPI } from '../../redux/userReducer/userReducer';
import { DispatchType, StateType } from '../../redux/configStore';
import { useDispatch, useSelector } from 'react-redux';
import { history } from '../..';
type Props = {}

const Login = (props: Props) => {

  const [password, setPassword] = useState<boolean>(false)
  const [load, setLoad] = useState<boolean>(false)
  const { loading, userLogin } = useSelector((state:StateType) => state.userReducer)
  const dispatch:DispatchType = useDispatch();
  const navigate = useNavigate();
  // useEffect(() => {
  //   if(userLogin){
  //     navigate("/")
  //   }
  // }, [])

  const formLog = useFormik<LoginModel>({
    initialValues: {
      email: "",
      password: ""
    },
    validationSchema: yup.object().shape({
      email: yup.string().required("Email is required.").email("Email is invalid."),
    }),
    onSubmit: (values:LoginModel) => {
      setLoad(true)
      const actionLogin = loginAPI(values);
      dispatch(actionLogin)
      setTimeout(() => {setLoad(false)},2000)
    }
  })


  const handlePassword = () => {
    setPassword(!password);
  }

  return (
    <div className="login">
      <div className="login__content">
        {loading ? <HashLoader color='#17a98c' size={40} /> : <>
        <div className="back-to-home">
          <span>
            <NavLink to='/'>
            <svg width="60" height="20" viewBox="0 0 89 27" fill="none" xmlns="http://www.w3.org/2000/svg"><g fill="#000"><path d="m81.6 13.1h-3.1c-2 0-3.1 1.5-3.1 4.1v9.3h-6v-13.4h-2.5c-2 0-3.1 1.5-3.1 4.1v9.3h-6v-18.4h6v2.8c1-2.2 2.3-2.8 4.3-2.8h7.3v2.8c1-2.2 2.3-2.8 4.3-2.8h2zm-25.2 5.6h-12.4c.3 2.1 1.6 3.2 3.7 3.2 1.6 0 2.7-.7 3.1-1.8l5.3 1.5c-1.3 3.2-4.5 5.1-8.4 5.1-6.5 0-9.5-5.1-9.5-9.5 0-4.3 2.6-9.4 9.1-9.4 6.9 0 9.2 5.2 9.2 9.1 0 .9 0 1.4-.1 1.8zm-5.7-3.5c-.1-1.6-1.3-3-3.3-3-1.9 0-3 .8-3.4 3zm-22.9 11.3h5.2l6.6-18.3h-6l-3.2 10.7-3.2-10.8h-6zm-24.4 0h5.9v-13.4h5.7v13.4h5.9v-18.4h-11.6v-1.1c0-1.2.9-2 2.2-2h3.5v-5h-4.4c-4.3 0-7.2 2.7-7.2 6.6v1.5h-3.4v5h3.4z"></path></g><g fill="#17a98c"><path d="m85.3 27c2 0 3.7-1.7 3.7-3.7s-1.7-3.7-3.7-3.7-3.7 1.7-3.7 3.7 1.7 3.7 3.7 3.7z"></path></g></svg>
            </NavLink>
          </span>
        </div>
        <h2>Login</h2>
        <form className='form' onSubmit={formLog.handleSubmit}>
          <div className="form__content">
            <div className="form__input">
              <div className="input-content">
                <input type="text" name='email' required onChange={formLog.handleChange} onBlur={formLog.handleBlur}/>
                <i className="fa-solid fa-user"></i>
                <span>Email</span>
              </div>
              {(formLog.errors.email && formLog.touched.email) && <p className='messErr'>{formLog.errors.email}</p>}
            </div>
            <div className="form__input">
              <div className="input-content">
                <input type={password ? "text" : "password"} name='password' autoComplete='off' required onChange={formLog.handleChange}/>
                <i className="fa-solid fa-lock"></i>
                <span>Password</span>
                <a className='eye' onClick={handlePassword}>{password ? <i className="fa-solid fa-eye-low-vision"></i> : <i className="fa-solid fa-eye"></i>}</a>
              </div>
            </div>
            <div className="form__submit-login">
              <button type='submit'>
                {load ? <BeatLoader color='#fff' size={10} /> : 'Login'}
              </button>
            </div>
            <div className="form__info">
              <p>Don’t have an account? <NavLink to='/users/register'>Sign up</NavLink></p>
            </div>
          </div>
        </form>
        </> }
      </div>
    </div>
  )
}

export default Login