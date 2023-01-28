import React, {useEffect} from 'react'
import { string } from 'yup';
import { closeModal, openModal} from '../../../hoc/Modal/modal';

type Props = {}

const JobManager = (props: Props) => {

  return (
    <div className='admin-job'>
        <div className="btn-add" onClick={() => openModal(".add-modal")}>
            <button>Add new job</button>
        </div>
        <table className="job__content">
            <thead>
                <tr>
                    <th style={{width:'7%'}}>ID</th>
                    <th style={{width:'21%'}}>Name</th>
                    <th style={{width:'12%'}}>Image</th>
                    <th style={{width:'36%'}}>Description</th>
                    <th style={{width:'8%'}}>Price</th>
                    <th style={{width:'8%'}}>Rate</th>
                    <th style={{width:'8%'}}>Actions</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td>1</td>
                    <td>Long</td>
                    <td>Admin</td>
                    <td>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ratione possimus repellat iusto quia animi vero.</td>
                    <td>20</td>
                    <td>100</td>
                    <td>
                        <span><i className='bx bx-message-square-edit' onClick={() => {openModal(".update-modal")}}></i></span>
                        <span><i className='bx bxs-trash-alt'></i></span>
                    </td>
                </tr>
            </tbody>
        </table>
        <div className="add-modal">
            <div className="modal__container">
                <div className="modal__content">
                      <div className="close-modal" onClick={() => {closeModal(".add-modal")}}>
                          <i className='bx bxs-x-square'></i>
                      </div>
                      <h2>Add Job</h2>
                    <form className="form">
                        <div className="form__content">
                            <div className="form__input">
                                <input type="text" name='jobName' required />
                                <i className='bx bxs-briefcase'></i>
                                <span>Job name</span>
                            </div>
                            <div className="form__input">
                                <input type="text" name='description' required />
                                <i className='bx bxs-comment-dots'></i>
                                <span>Description</span>
                            </div>
                            <div className="form__input">
                                <input type="text" name='shortDescription' required />
                                <i className='bx bxs-comment'></i>
                                <span>Short description</span>
                            </div>
                            <div className="form__input">
                                <input type="text" name='price' required />
                                <i className='bx bxs-purchase-tag'></i>
                                <span>Price</span>
                            </div>
                            <div className="form__input">
                                <input type="text" name='rate' required />
                                <i className="fa-solid fa-percent"></i>
                                <span>Rate</span>
                            </div>
                            <div className="form__input">
                                <input type="text" name='code' required />
                                <i className='bx bx-barcode'></i>
                                <span>Detail code</span>
                            </div>
                            <div className="form__input">
                                <input type="text" name='starRating' required />
                                <i className='bx bxs-star'></i>
                                <span>Star rating</span>
                            </div>
                            <label htmlFor="file">
                                <input type="file" name='file' id='file' />
                                <div>
                                    <i className='bx bx-upload'></i>
                                    <span>Upload image</span>
                                </div>
                            </label>
                        </div>
                        <button type='submit'>Submit</button>
                    </form>
                </div>
            </div>
        </div>
        <div className="update-modal">
            <div className="modal__container">
                <div className="modal__content">
                      <div className="close-modal" onClick={() => {closeModal(".update-modal")}}>
                          <i className='bx bxs-x-square'></i>
                      </div>
                      <h2>Update Job</h2>
                    <form className="form">
                        <div className="form__content">
                            <div className="form__input">
                                <input type="text" name='jobName' required />
                                <i className='bx bxs-briefcase'></i>
                                <span>Job name</span>
                            </div>
                            <div className="form__input">
                                <input type="text" name='description' required />
                                <i className='bx bxs-comment-dots'></i>
                                <span>Description</span>
                            </div>
                            <div className="form__input">
                                <input type="text" name='shortDescription' required />
                                <i className='bx bxs-comment'></i>
                                <span>Short description</span>
                            </div>
                            <div className="form__input">
                                <input type="text" name='price' required />
                                <i className='bx bxs-purchase-tag'></i>
                                <span>Price</span>
                            </div>
                            <div className="form__input">
                                <input type="text" name='rate' required />
                                <i className="fa-solid fa-percent"></i>
                                <span>Rate</span>
                            </div>
                            <div className="form__input">
                                <input type="text" name='code' required />
                                <i className='bx bx-barcode'></i>
                                <span>Detail code</span>
                            </div>
                            <div className="form__input">
                                <input type="text" name='starRating' required />
                                <i className='bx bxs-star'></i>
                                <span>Star rating</span>
                            </div>
                            <label htmlFor="file">
                                <input type="file" name='file' id='file' />
                                <div>
                                    <i className='bx bx-upload'></i>
                                    <span>Upload image</span>
                                </div>
                            </label>
                        </div>
                        <button type='submit'>Submit</button>
                    </form>
                </div>
            </div>
        </div>
    </div>
  )
}

export default JobManager