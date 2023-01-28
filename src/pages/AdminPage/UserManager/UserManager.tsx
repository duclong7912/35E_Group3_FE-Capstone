import React, {useState, useEffect} from 'react'
import { closeModal, openModal } from '../../../hoc/Modal/modal';

type Props = {}

const UserManager = (props: Props) => {

  return (
    <div className='admin-user'>
        <div className="btn-add">
            <button onClick={() => openModal(".add-modal")}>Add new admin</button>
        </div>
        <form className="form">
            <div className="form__content">
                <div className="form__input">
                    <input type="search" name='search' required />
                    <i className='bx bx-search'></i>
                    <span>Search username</span>
                </div>
            </div>
        </form>
        <table className="user__content">
                <thead>
                    <tr>
                        <th style={{width:'7%'}}>ID</th>
                        <th style={{width:'21%'}}>Name</th>
                        <th style={{width:'8%'}}>Role</th>
                        <th style={{width:'30%'}}>Certification</th>
                        <th style={{width:'26%'}}>Skill</th>
                        <th style={{width:'8%'}}>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>1</td>
                        <td>Long</td>
                        <td>Admin</td>
                        <td>
                            <span>education</span>
                            <span>cyber</span>
                            <span>cybersoft</span>
                        </td>
                        <td>
                            <span>HTML</span>
                        </td>
                        <td>
                            <span><i className='bx bx-message-square-edit' onClick={() => openModal(".update-modal")}></i></span>
                            <span><i className='bx bxs-trash-alt'></i></span>
                        </td>
                    </tr>
                    <tr>
                        <td>1</td>
                        <td>Long</td>
                        <td>Admin</td>
                        <td>
                            <span>education</span>
                            <span>cyber</span>
                            <span>cybersoft</span>
                        </td>
                        <td>
                            <span>HTML</span>
                        </td>
                        <td>
                            <span><i className='bx bx-message-square-edit' onClick={() => openModal(".update-modal")}></i></span>
                            <span><i className='bx bxs-trash-alt'></i></span>
                        </td>
                    </tr>
                </tbody>
        </table>
        <div className="add-modal">
            <div className="modal__container">
                <div className="modal__content">
                    <div className="close-modal" onClick={() => closeModal(".add-modal")}>
                        <i className='bx bxs-x-square'></i>
                    </div>
                    <h2>Add Admin</h2>
                    <form className="form">
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
                                <input type="text" name='phone' required />
                                <i className="fa-solid fa-phone"></i>
                                <span>Phone</span>
                            </div>
                        </div>
                        <button type='submit'>Submit</button>
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
                    <form className="form">
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
                                <input type="text" name='birthday' required />
                                <i className='bx bxs-cake'></i>
                                <span>Birthday</span>
                            </div>
                            <div className="form__input">
                                <input type="text" name='phone' required />
                                <i className="fa-solid fa-phone"></i>
                                <span>Phone</span>
                            </div>
                            <div className="form__input">
                                <input type="text" name='role' required />
                                <i className="fa-solid fa-user-secret"></i>
                                <span>Role</span>
                            </div>
                            <div className="form__input" >
                                <input type="text" name='certification' required/>
                                <i className="fa-solid fa-circle-check"></i>
                                <span>Certification</span>
                            </div>
                            <div className="form__input" >
                                <input type="text" name='skills' required/>
                                <i className="fa-solid fa-code"></i>
                                <span>Skills</span>
                            </div>
                            <div className="form__gender">
                                <input type="radio" id='male' name='gender' value={"true"}/>
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