import { useFormik } from 'formik';
import React, { useEffect, useState } from 'react'
import { NavLink, useNavigate } from 'react-router-dom';
import { RegisterModel } from '../../Models/registerModel/registerModels';
import * as yup from 'yup';
import { loadingAction, resgisterAPI } from '../../redux/userReducer/userReducer';
import { useDispatch, useSelector } from 'react-redux';
import { DispatchType, StateType } from '../../redux/configStore';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import BeatLoader from "react-spinners/BeatLoader";
import HashLoader from "react-spinners/HashLoader";

type Props = {}


const Register = (props: Props) => {

  const [load, setLoad] = useState<boolean>(false)
  const [password, setPassword] = useState<boolean>(false)
  const [confirmPassword, setConfirmPassword] = useState<boolean>(false)
  const { loading, userLogin } = useSelector((state:StateType) => state.userReducer)
  const dispatch:DispatchType = useDispatch();
  const navigate = useNavigate();
  const regexName = /^[a-zA-Z_ÀÁÂÃÈÉÊẾÌÍÒÓÔÕÙÚĂĐĨŨƠàáâãèéêìíòóôõùúăđĩũơƯĂẠẢẤẦẨẪẬẮẰẲẴẶ" + "ẸẺẼỀỀỂưăạảấầẩẫậắằẳẵặẹẻẽềềểếỄỆỈỊỌỎỐỒỔỖỘỚỜỞỠỢỤỦỨỪễệỉịọỏốồổỗộớờởỡợ" + "ụủứừỬỮỰỲỴÝỶỸửữựỳỵỷỹ\\s]+$/
  const regexPhone = /\(?([0-9]{3})\)?([ .-]?)([0-9]{3})\2([0-9]{4})/;

  useEffect(() => {
    if(userLogin){
      navigate("/")
    }
  }, [])

  const formReg = useFormik<RegisterModel>({
    initialValues: {
      email: "",
      name: "",
      password: "",
      confirmPassword: "",
      phone: "",
      birthday: "",
      gender: "",
    }, 
    validationSchema: yup.object().shape({
      email: yup.string().required("Email is required.").email("Email is invalid."),
      name: yup.string().required("Name is required.").matches(regexName, "Name is invalid."),
      password: yup.string().required("Password is required.").min(8,"Password must be more than 8 characters."),
      confirmPassword: yup.string().required("Password is required.")
      .min(8, "Password must be more than 8 characters.")
      .oneOf([yup.ref("password")], "Password dont match."),
      phone: yup.string().required("Phone is required.").matches(regexPhone, "Phone is invalid."),
      birthday: yup.string().required("Birthday is required."),
      gender: yup.string().required("Please select your gender.")
    }),
    onSubmit: (values:RegisterModel) => {
      setLoad(true)
      const actionRegister = resgisterAPI(values)
      dispatch(actionRegister)
      setTimeout(() => {setLoad(false)},2000)
    }
  })

  const handlePassword = () => {
    setPassword(!password)
  }
  const handleConfirmPassword = () => {
    setConfirmPassword(!confirmPassword)
  }
  return (
    <div className="register">
      <ToastContainer />
      <div className="register__content">
        {loading ? <HashLoader color='#17a98c' size={40} /> : <>
        <h2>Register</h2>
        <form className='form' onSubmit={formReg.handleSubmit}>
          <div className="form__content">
            <div className="form__input">
              <div className="input-content">
                <input type="text" id='email' name='email' required value={formReg.values.email} onChange={formReg.handleChange} onBlur={formReg.handleBlur}/>
                <i className="fa-solid fa-envelope"></i>
                <span>Email</span>
              </div>
              {(formReg.errors.email && formReg.touched.email) && <p className='messErr'>{formReg.errors.email}</p>}
            </div>
            <div className="form__input">
              <div className="input-content">
                <input type="text" id='name' name='name' required value={formReg.values.name} onChange={formReg.handleChange} onBlur={formReg.handleBlur}/>
                <i className="fa-solid fa-user"></i>
                <span>Name</span>
              </div>
              {(formReg.errors.name && formReg.touched.name) && <p className='messErr'>{formReg.errors.name}</p>}
            </div>
            <div className="form__input">
              <div className='input-content'>
                <input type={password ? "text" : "password"} id='password'  name='password' required value={formReg.values.password} autoComplete='off' onChange={formReg.handleChange} onBlur={formReg.handleBlur}/>
                <i className="fa-solid fa-lock"></i>
                <span>Password</span>
                <a className='eye' onClick={handlePassword}>{password ? <i className="fa-solid fa-eye-low-vision"></i> : <i className="fa-solid fa-eye"></i>}</a>
              </div>
              {(formReg.errors.password && formReg.touched.password) && <p className='messErr'>{formReg.errors.password}</p>}
            </div>
            <div className="form__input">
              <div className="input-content">
                <input type={confirmPassword ? "text" : "password"} id='confirmPassword' name='confirmPassword' required value={formReg.values.confirmPassword} autoComplete='off' onChange={formReg.handleChange} onBlur={formReg.handleBlur}/>
                <i className="fa-solid fa-lock"></i>
                <span>Confirm Password</span>
                <a className='eye' onClick={handleConfirmPassword}>{confirmPassword ? <i className="fa-solid fa-eye-low-vision"></i> : <i className="fa-solid fa-eye"></i>}</a>
              </div>
              {(formReg.errors.confirmPassword && formReg.touched.confirmPassword) && <p className='messErr'>{formReg.errors.confirmPassword}</p>}
            </div>
            <div className="form__input">
              <div className="input-content">
                <input type="text" id='phone' name='phone' required value={formReg.values.phone} onChange={formReg.handleChange} onBlur={formReg.handleBlur}/>
                <i className="fa-solid fa-phone"></i>
                <span>Phone</span>
              </div>
              {(formReg.errors.phone && formReg.touched.phone) && <p className='messErr'>{formReg.errors.phone}</p>}
            </div>
            <div className="form__input">
              <div className="input-content">
                <input type="date" id='birthday' name='birthday' required value={formReg.values.birthday} onChange={formReg.handleChange} onBlur={formReg.handleBlur}/>
                <i className="fa-solid fa-cake-candles"></i>
                <span>Your birthday</span>
              </div>
              {(formReg.errors.birthday && formReg.touched.birthday) && <p className='messErr'>{formReg.errors.birthday}</p>}
            </div>
            <div className="form__gender">
              <input type="radio" id='male' name='gender' value="true" onChange={formReg.handleChange} onBlur={formReg.handleBlur}/>
              <input type="radio" id='female' name='gender' value="false" onChange={formReg.handleChange} onBlur={formReg.handleBlur}/>
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
              {(formReg.errors.gender && formReg.touched.gender) && <p className='messErr'>{formReg.errors.gender}</p>}
            </div>
            <div className="form__submit-login">
              <button type='submit'>
                {load ? <BeatLoader color='#fff' size={10} /> : 'Create my account'}
              </button>
            </div>
            <div className="form__info">
              <p>Already have an account? <NavLink to='/users/login'>Log in</NavLink></p>
            </div>
          </div>
        </form>
        </> }
      </div>
    </div>
  )
}

export default Register