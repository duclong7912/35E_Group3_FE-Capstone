import React from 'react'
import { closeModal, openModal } from '../../../hoc/Modal/modal';

type Props = {}

const JobTypeManager = (props: Props) => {
  return (
    <div className='admin-jobtype'>
        <div className="btn-add" onClick={() => openModal(".add-modal")}>
            <button>Add new job type</button>
        </div>
        <table className="jobtype__content">
            <thead>
                <tr>
                    <th style={{width:'30%'}}>ID</th>
                    <th style={{width:'30%'}}>Job Type Name</th>
                    <th style={{width:'30%'}}>Actions</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td>1</td>
                    <td>Long</td>
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
                    <h2>Add Job Type</h2>
                    <form className="form">
                        <div className="form__content">
                            <div className="form__input form-jobType w-100" style={{display: 'unset'}}>
                                <input type="text" name='email' disabled placeholder='0'/>
                                <i className='bx bx-task'></i>
                                <span>ID</span>
                            </div>
                            <div className="form__input w-100">
                                <input type="text" name='jobType' required />
                                <i className='bx bxs-briefcase-alt'></i>
                                <span>Job type</span>
                            </div>
                        </div>
                        <button type='submit'>Submit</button>
                    </form>
                </div>  
            </div>
        </div>
        <div className="update-modal">
            <div className="modal__container">
                <div className="modal__content">
                    <div className="close-modal" onClick={() => closeModal(".update-modal")}>
                        <i className='bx bxs-x-square'></i>
                    </div>
                    <h2>Update Job Type</h2>
                    <form className="form">
                        <div className="form__content" style={{display: 'unset'}}>
                            <div className="form__input form-jobType w-100">
                                <input type="text" name='email' disabled placeholder='0'/>
                                <i className='bx bx-task'></i>
                                <span>ID</span>
                            </div>
                            <div className="form__input w-100">
                                <input type="text" name='jobType' required />
                                <i className='bx bxs-briefcase-alt'></i>
                                <span>Job type</span>
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

export default JobTypeManager