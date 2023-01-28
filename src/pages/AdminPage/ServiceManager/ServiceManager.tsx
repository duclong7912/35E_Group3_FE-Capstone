import React, { useEffect } from 'react'
import { useLocation } from 'react-router-dom'
import { closeModal, openModal } from '../../../hoc/Modal/modal'

type Props = {}

const ServiceManager = (props: Props) => {
  return (
    <div className='admin-service'>
        <div className="btn-add" onClick={() => openModal(".add-modal")}>
            <button>Add service</button>
        </div>
        <table className="serivce__content">
            <thead>
                <tr>
                    <th style={{width:'10%'}}>ID</th>
                    <th style={{width:'10%'}}>JobID</th>
                    <th style={{width:'10%'}}>Hirer ID</th>
                    <th style={{width:'35%'}}>Hire Day</th>
                    <th style={{width:'25'}}>Condition</th>
                    <th style={{width:'10%'}}>Actions</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td>1</td>
                    <td>1209</td>
                    <td>129</td>
                    <td>2022-11-30T16:01:25.867Z</td>
                    <td>Completed</td>
                    <td>
                        <span><i className='bx bx-message-square-edit' onClick={() => openModal(".update-modal")}></i></span>
                        <span><i className='bx bxs-trash-alt'></i></span>
                    </td>
                </tr>
            </tbody>
        </table>
        <div className="add-modal add-service">
            <div className="modal__container">
                <div className="modal__content">
                    <div className="close-modal" onClick={() => closeModal(".add-modal")}>
                        <i className='bx bxs-x-square'></i>
                    </div>
                    <h2>Add Service</h2>
                    <form className="form">
                        <div className="form__content">
                            <div className="form__input form-jobType">
                                <input type="text" name='id' disabled placeholder='0' />
                                <i className="bx bx-task"></i>
                                <span>ID</span>
                            </div>
                            <div className="form__input">
                                <input type="text" name='jobId' required />
                                <i className='bx bxs-briefcase-alt'></i>
                                <span>Job ID</span>
                            </div>
                            <div className="form__input">
                                <input type="password" name='hirerId' required />
                                <i className='bx bxs-user-circle'></i>
                                <span>Hirer ID</span>
                            </div>
                            <div className="form__input">
                                <input type="text" name='hireDate' required />
                                <i className='bx bxs-calendar-check'></i>
                                <span>Hire date</span>
                            </div>
                            <div className="form__condition">
                                <input type="radio" id='complete' name='condition' value={"true"}/>
                                <input type="radio" id='incomplete' name='condition' value={"false"}/>
                                <div className="condition__tilte">
                                    <i className='bx bx-check-shield'></i>
                                    <span>Condition</span>
                                </div>
                                <div className="condition">
                                    <label htmlFor="complete">
                                        <span className='dot dot-complete'></span>
                                        <span className='complete'>Complete</span>
                                    </label>
                                    <label htmlFor="incomplete">
                                        <span className='dot dot-incomplete'></span>
                                        <span className='incomplete'>Incomplete</span>
                                    </label>
                                </div>
                            </div>
                        </div>
                        <button type='submit'>Submit</button>
                    </form>
                </div>  
            </div>
        </div>
        <div className="update-modal update-service">
            <div className="modal__container">
                <div className="modal__content">
                    <div className="close-modal" onClick={() => closeModal(".update-modal")}>
                        <i className='bx bxs-x-square'></i>
                    </div>
                    <h2>Update Service</h2>
                    <form className="form">
                        <div className="form__content">
                            <div className="form__input form-jobType">
                                <input type="text" name='id' disabled placeholder='0' />
                                <i className="bx bx-task"></i>
                                <span>ID</span>
                            </div>
                            <div className="form__input">
                                <input type="text" name='jobId' required />
                                <i className='bx bxs-briefcase-alt'></i>
                                <span>Job ID</span>
                            </div>
                            <div className="form__input">
                                <input type="password" name='hirerId' required />
                                <i className='bx bxs-user-circle'></i>
                                <span>Hirer ID</span>
                            </div>
                            <div className="form__input">
                                <input type="text" name='hireDate' required />
                                <i className='bx bxs-calendar-check'></i>
                                <span>Hire date</span>
                            </div>
                            <div className="form__condition">
                                <input type="radio" id='u-complete' name='condition' value={"true"}/>
                                <input type="radio" id='u-incomplete' name='condition' value={"false"}/>
                                <div className="condition__tilte">
                                    <i className='bx bx-check-shield'></i>
                                    <span>Condition</span>
                                </div>
                                <div className="condition">
                                    <label htmlFor="u-complete">
                                        <span className='dot dot-complete'></span>
                                        <span className='complete'>Complete</span>
                                    </label>
                                    <label htmlFor="u-incomplete">
                                        <span className='dot dot-incomplete'></span>
                                        <span className='incomplete'>Incomplete</span>
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

export default ServiceManager