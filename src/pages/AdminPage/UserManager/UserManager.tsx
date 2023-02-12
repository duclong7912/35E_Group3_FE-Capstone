import React, {useState, useEffect, ChangeEvent} from 'react'
import { closeModal, openModal } from '../../../hoc/Modal/modal';
import { DispatchType, StateType } from '../../../redux/configStore';
import { useDispatch, useSelector } from 'react-redux';
import { addAdminAPI, deleteUserAPI, editUserAPI, getArrUserAPI, searchUserAPI, userInfoAPI } from '../../../redux/adminReducer/adminReducer';
import { Pagination } from 'antd';
import { AddAdminModel, AdminEditUser, UserModel } from '../../../Models/adminModel/adminModel';
import found from '../../../assets/img/found.png';
import { useFormik } from 'formik';
import * as yup from 'yup';
import { regexName, regexPhone } from '../../../util/config';
import { BeatLoader } from 'react-spinners';
import HashLoader from "react-spinners/HashLoader";
import { useParams } from 'react-router-dom';
import useTag from '../../../hooks/useTag';

type Props = {}

const UserManager = (props: Props) => {

    const { arrUser, userInfo } = useSelector((state:StateType) => state.adminReducer)
    const [currentPage, setCurrentPage] = useState<number>(1)
    const [pageSize, setPageSize] = useState<number>(10);
    const [load, setLoad] = useState<boolean>(false)
    const startIndex = (currentPage - 1) * pageSize;
    const endIndex = startIndex + pageSize
    const dispatch:DispatchType = useDispatch();
    useEffect(() => {
       dispatch(getArrUserAPI());
    },[])

    const formAdmin = useFormik<AddAdminModel>({
        initialValues: {
            email: '',
            name: '',
            password: '',
            phone: '',
            role: "ADMIN"
        },
        validationSchema: yup.object().shape({
            email: yup.string().required("Email is required.").email("Email is invalid."),
            name: yup.string().required("Name is required.").matches(regexName, "Name is invalid."),
            password: yup.string().required("Password is required.").min(8,"Password must be more than 8 characters."),
            phone: yup.string().required("Phone is required.").matches(regexPhone, "Phone is invalid."),
        }),
        onSubmit: async (values) => {
            setLoad(true)
            await dispatch(addAdminAPI(values))
            setTimeout(() => {setLoad(false)},2000)
        }
    })

    const formEditUser = useFormik<AdminEditUser>({
        initialValues: {
            id: 0,
            email: '',
            name: '',
            birthday: '',
            role: '',
            phone: '',
            certification: [],
            skill: [],
            gender: true,
        }, 
        onSubmit: (values) => {
            dispatch(editUserAPI(values))
            closeModal(".update-modal")
        }
    })

    
    const [ cert, skill , handleCertChange, handleSkillChange, handleDeleteCert, handleDeleteSkill ] = useTag(formEditUser?.values)
    
    useEffect(() => {
        if(cert?.length > 0) {
          formEditUser.setFieldValue('certification', cert)
        }
        if(skill?.length > 0){
          formEditUser.setFieldValue("skill", skill)
        }
    }, [cert, skill])

    const handlePagination = () => {  
        if(arrUser)
        return <Pagination
            current={currentPage}
            showLessItems
            pageSize={pageSize} 
            total={arrUser.length} 
            onChange={handlePageChange} 
        />
    }

    const handlePageChange = (pageNumber:number, pageSize:number) => {
        setCurrentPage(pageNumber)
        setPageSize(pageSize)
        window.scrollTo({top: 0, behavior: 'smooth'})
    }
    
    const handleSearch = (e:React.ChangeEvent<HTMLInputElement>) => {
        const { value } = e.target
        if( value ) {
            setCurrentPage(1)
            dispatch(searchUserAPI(value))
        } else{
            dispatch(getArrUserAPI());
        }
    }

    useEffect(() => {
        formEditUser.setValues({...userInfo as any})
    }, [userInfo])

    const handleEditUser = (user: UserModel) => {
        openModal(".update-modal");
        dispatch(userInfoAPI(user.id))
    }

    const handleDeleteUser = (user:UserModel) => {
        const { id } = user;
        dispatch(deleteUserAPI(id))
    }

    const genderSelection = (e:React.ChangeEvent<HTMLInputElement>) => {
        const { value } = e.target;
        formEditUser.values.gender = value === "true" ? true : false;
        formEditUser.setValues({...formEditUser.values})
    }

  return (
    <div className='admin-user'>
        <div className="btn-add">
            <button onClick={() => openModal(".add-modal")}>Add new admin</button>
        </div>
        <div className="form">
            <div className="form__content">
                <div className="form__input">
                    <div className="input-content">
                        <input type="search" name='search' required onChange={handleSearch}/>
                        <i className='bx bx-search'></i>
                        <span>Search username</span>
                    </div>
                </div>
            </div>
        </div>
        <table className="user__content">
                <thead>
                    <tr>
                        <th style={{width:'10%'}}>ID</th>
                        <th style={{width:'20%'}}>Name</th>
                        <th style={{width:'10%'}}>Role</th>
                        <th style={{width:'25%'}}>Certification</th>
                        <th style={{width:'25%'}}>Skill</th>
                        <th style={{width:'10%'}}>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {arrUser.length > 0 ?
                    arrUser?.slice(startIndex, endIndex).map((user:UserModel, i:number) => {
                        return <tr key={i}>
                        <td>{user.id}</td>
                        <td>{user.name}</td>
                        <td>{user.role}</td>
                        <td>
                            {user?.certification !== null && user?.certification.map((item, t) => {
                                return <span key={t}>{item}</span>
                            })}
                        </td>
                        <td>
                            {user?.skill !== null && user?.skill.map((item, l) => {
                                return <span key={l}>{item}</span>
                            })}
                        </td>
                        <td>
                            <span><i className='bx bx-message-square-edit' onClick={() => {handleEditUser(user)}}></i></span>
                            <span><i className='bx bxs-trash-alt' onClick={() => handleDeleteUser(user)}></i></span>
                        </td>
                    </tr>
                    })
                    :
                    <tr>
                        <td colSpan={6} className='found'>
                            <div className="empty-data">
                                <img src={found} alt="" />
                            </div>
                            <div className="no-data">No data</div>
                        </td>
                    </tr>
                    }
                </tbody>
        </table>
        {handlePagination()}
        <div className="add-modal">
            <div className="modal__container">
                <div className="modal__content">
                    <div className="close-modal" onClick={() => closeModal(".add-modal")}>
                        <i className='bx bxs-x-square'></i>
                    </div>
                    <h2>Add Admin</h2>
                    <form className="form" onSubmit={formAdmin.handleSubmit}>
                        <div className="form__content">
                            <div className="form__input">
                                <div className="input-content">
                                    <input type="text" name='email' required onChange={formAdmin.handleChange} onBlur={formAdmin.handleBlur}/>
                                    <i className="fa-solid fa-envelope"></i>
                                    <span>Email</span>
                                </div>
                                {(formAdmin.errors.email && formAdmin.touched.email) && <p className='messErr'>{formAdmin.errors.email}</p>}
                            </div>
                            <div className="form__input">
                                <div className="input-content">
                                    <input type="text" name='name' required onChange={formAdmin.handleChange} onBlur={formAdmin.handleBlur}/>
                                    <i className="fa-solid fa-user"></i>
                                    <span>Name</span>
                                </div>
                                {(formAdmin.errors.name && formAdmin.touched.name) && <p className='messErr'>{formAdmin.errors.name}</p>}
                            </div>
                            <div className="form__input">
                                <div className="input-content">
                                    <input type="password" name='password' autoComplete='off' required onChange={formAdmin.handleChange} onBlur={formAdmin.handleBlur}/>
                                    <i className="fa-solid fa-lock"></i>
                                    <span>Password</span>
                                </div>
                                {(formAdmin.errors.password && formAdmin.touched.password) && <p className='messErr'>{formAdmin.errors.password}</p>}
                            </div>
                            <div className="form__input">
                                <div className="input-content">
                                    <input type="text" name='phone' required onChange={formAdmin.handleChange} onBlur={formAdmin.handleBlur}/>
                                    <i className="fa-solid fa-phone"></i>
                                    <span>Phone</span>
                                </div>
                                {(formAdmin.errors.phone && formAdmin.touched.phone) && <p className='messErr'>{formAdmin.errors.phone}</p>}
                            </div>
                        </div>
                        <button type='submit'>
                            {load ? <BeatLoader color='#fff' size={10} /> : 'Add admin'}
                        </button>
                    </form>
                </div>
            </div>
        </div>
        <div className="update-modal update-user">
            <div className="modal__container">
                <div className="modal__content">
                    <div className="close-modal" onClick={() => closeModal(".update-modal")}>
                        <i className='bx bxs-x-square'></i>
                    </div>
                    <h2>Update User</h2>
                    <form className="form" onSubmit={formEditUser.handleSubmit}>
                        <div className="form__content">
                            <div className="form__input">
                                <div className="input-content">
                                    <input type="text" name='email' required value={formEditUser.values.email || ""} disabled/>
                                    <i className="fa-solid fa-envelope"></i>
                                    <span>Email</span>
                                </div>
                            </div>
                            <div className="form__input">
                                <div className="input-content">
                                    <input type="text" name='name' required value={formEditUser.values.name || ""} onChange={formEditUser.handleChange}/>
                                    <i className="fa-solid fa-user"></i>
                                    <span>Name</span>
                                </div>
                            </div>
                            <div className="form__input">
                                <div className="input-content">
                                    <input type="text" name='birthday' required value={formEditUser.values.birthday || ""} onChange={formEditUser.handleChange}/>
                                    <i className='bx bxs-cake'></i>
                                    <span>Birthday</span>
                                </div>
                            </div> 
                            <div className="form__input">
                                <div className="input-content">
                                    <input type="text" name='phone' required value={formEditUser.values.phone || ""} onChange={formEditUser.handleChange}/>
                                    <i className="fa-solid fa-phone"></i>
                                    <span>Phone</span>
                                </div>
                            </div>
                             <div className="form__input">
                                <div className="input-content">
                                    <input type="text" name='role' required value={formEditUser.values.role || ""} onChange={formEditUser.handleChange}/>
                                    <i className="fa-solid fa-user-secret"></i>
                                    <span>Role</span>
                                </div>
                            </div>
                            <div className="form__gender">
                                <input type="radio" 
                                    id='male' 
                                    name='gender' 
                                    value="true"
                                    onChange={genderSelection}
                                    checked={formEditUser.values.gender ? true : false}
                                />

                                <input type="radio" 
                                    id='female' 
                                    name='gender' 
                                    value="false"
                                    onChange={genderSelection}    
                                    checked={!formEditUser.values.gender}
                                />

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
                            <div className="form__input cert">
                                <div className="input-content">
                                    <ul>
                                        {cert?.map((item:string, i:number) => {
                                            return <li key={i}>
                                            <span>{item}</span>
                                            <i className="fa-solid fa-circle-xmark" onClick={() => handleDeleteCert(item)}></i>
                                        </li>
                                        })}
                                    </ul>
                                    <input type="text" name='certification' onKeyUp={handleCertChange} onKeyPress={e => { e.which === 13 && e.preventDefault() }}/>
                                    <i className="fa-solid fa-circle-check"></i>
                                    <span>Certification</span>
                                </div> 
                            </div>
                            <div className="form__input skill">
                                <div className="input-content">
                                    <ul>
                                        {skill?.map((item:string, i:number) => {
                                            return <li key={i}>
                                            <span>{item}</span>
                                            <i className="fa-solid fa-circle-xmark" onClick={() => handleDeleteSkill(item)}></i>
                                        </li>
                                        })}
                                    </ul>
                                    <input type="text" name='skills' onKeyUp={handleSkillChange} onKeyPress={e => { e.which === 13 && e.preventDefault() }}/>
                                    <i className="fa-solid fa-code"></i>
                                    <span>Skills</span>
                                </div>
                            </div>
                        </div>
                        <button type='submit'>Submit</button>
                    </form>
                </div>  
            </div>
        </div>
    </div>
  )
}

export default UserManager