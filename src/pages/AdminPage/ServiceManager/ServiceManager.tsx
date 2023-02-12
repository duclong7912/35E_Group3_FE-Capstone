import React, { useEffect, useState } from 'react'
import { useLocation } from 'react-router-dom'
import { closeModal, openModal } from '../../../hoc/Modal/modal'
import { DispatchType, StateType } from '../../../redux/configStore'
import { useDispatch, useSelector } from 'react-redux'
import { addServiceAPI, arrServiceAPI, deleteServiceAPI, editServiceAPI } from '../../../redux/adminReducer/adminReducer'
import { ServiceModel } from '../../../Models/adminModel/adminModel'
import { Pagination } from 'antd'
import { useFormik } from 'formik'
import * as yup from 'yup'

type Props = {}

const ServiceManager = (props: Props) => {

    const { arrService } = useSelector((state:StateType) => state.adminReducer) 
    const dispatch:DispatchType = useDispatch();
    const [currentPage, setCurrentPage] = useState<number>(1)
    const [pageSize, setPageSize] = useState<number>(10);
    const startIndex = (currentPage - 1) * pageSize;
    const endIndex = startIndex + pageSize

    useEffect(() => {
        dispatch(arrServiceAPI());
    }, [])

    const formAddService = useFormik<ServiceModel>({
        initialValues: {
            id: 0,
            maCongViec:  0,
            maNguoiThue: 0,
            ngayThue:    '',
            hoanThanh:  false
        },
        validationSchema: yup.object().shape({
            maCongViec: yup.number().required("Job ID is required.").typeError("Job ID must be a number."),
            maNguoiThue: yup.number().required("Hirer ID is required.").typeError("Hirer ID must be a number."),
            ngayThue: yup.string().required("Hire date is required."),
            hoanThanh: yup.string().required("Condition is required.")
        }),
        onSubmit: (values:ServiceModel) => {
            dispatch(addServiceAPI(values))
        }
    })

    const formEditService = useFormik<ServiceModel>({
        initialValues: {
            id: 0,
            maCongViec:  0,
            maNguoiThue: 0,
            ngayThue:    '',
            hoanThanh:  true
        },
        validationSchema: yup.object().shape({
            maCongViec: yup.number().required("Job ID is required.").typeError("Job ID must be a number."),
            maNguoiThue: yup.number().required("Hirer ID is required.").typeError("Hirer ID must be a number."),
            ngayThue: yup.string().required("Hire date is required."),
            hoanThanh: yup.string().required("Condition is required.")
        }),
        onSubmit: (values:ServiceModel) => {
            dispatch(editServiceAPI(values))
        }
    })

    const handleEditService = (service:ServiceModel) => {
        openModal(".update-modal")
        formEditService.setValues(service)
    }

    const handleSelectCondition = (e:React.ChangeEvent<HTMLInputElement>) => {
        const { value } = e.target;
        formEditService.setFieldValue("hoanThanh", value === "true" ? true : false)
    }

    const handleDeleteService = (id:number) => {
        dispatch(deleteServiceAPI(id))
    }

    const handlePagination = () => {  
        if(arrService)
        return <Pagination
            current={currentPage}
            showLessItems
            pageSize={pageSize} 
            total={arrService.length} 
            onChange={handlePageChange} 
        />
    }

    const handlePageChange = (pageNumber:number, pageSize:number) => {
        setCurrentPage(pageNumber)
        setPageSize(pageSize)
        window.scrollTo({top: 0, behavior: 'smooth'})
    }

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
                {arrService.slice(startIndex, endIndex).map((service:ServiceModel, i:number) => {
                    return (
                    <tr key={i}>
                        <td>{service.id}</td>
                        <td>{service.maCongViec}</td>
                        <td>{service.maNguoiThue}</td>
                        <td>{service.ngayThue}</td>
                        <td>{service.hoanThanh ? "Complete" : "Incomplete"}</td>
                        <td>
                            <span><i className='bx bx-message-square-edit' onClick={() => handleEditService(service)}></i></span>
                            <span><i className='bx bxs-trash-alt' onClick={() => handleDeleteService(service.id)}></i></span>
                        </td>
                    </tr>
                    )
                })}
            </tbody>
        </table>
        {handlePagination()}
        <div className="add-modal add-service">
            <div className="modal__container">
                <div className="modal__content">
                    <div className="close-modal" onClick={() => closeModal(".add-modal")}>
                        <i className='bx bxs-x-square'></i>
                    </div>
                    <h2>Add Service</h2>
                    <form className="form" onSubmit={formAddService.handleSubmit}>
                        <div className="form__content">
                            <div className="form__input form-jobType">
                                <div className="input-content">
                                    <input type="text" name='id' disabled placeholder='0' />
                                    <i className="bx bx-task"></i>
                                    <span>ID</span>
                                </div>
                            </div>
                            <div className="form__input">
                                <div className="input-content">
                                    <input type="text" name='maCongViec' required onChange={formAddService.handleChange} onBlur={formAddService.handleBlur}/>
                                    <i className='bx bxs-briefcase-alt'></i>
                                    <span>Job ID</span>
                                </div>
                                {(formAddService.errors.maCongViec && formAddService.touched.maCongViec) && <p className='messErr'>{formAddService.errors.maCongViec}</p>}
                            </div>
                            <div className="form__input">
                                <div className="input-content">
                                    <input type="text" name='maNguoiThue' required onChange={formAddService.handleChange} onBlur={formAddService.handleBlur}/>
                                    <i className='bx bxs-user-circle'></i>
                                    <span>Hirer ID</span>
                                </div>
                                {(formAddService.errors.maNguoiThue && formAddService.touched.maNguoiThue) && <p className='messErr'>{formAddService.errors.maNguoiThue}</p>}
                            </div>
                            <div className="form__input hire-date">
                                <div className="input-content">
                                    <input type="text" placeholder='12/09/2002' name='ngayThue' required onChange={formAddService.handleChange} onBlur={formAddService.handleBlur}/>
                                    <i className='bx bxs-calendar-check'></i>
                                    <span>Hire date</span>
                                </div>
                                {(formAddService.errors.ngayThue && formAddService.touched.ngayThue) && <p className='messErr'>{formAddService.errors.ngayThue}</p>}
                            </div>
                            <div className="form__condition">
                                <input type="radio" id='complete' name='hoanThanh' value="true" onChange={formAddService.handleChange} onBlur={formAddService.handleBlur}/>
                                <input type="radio" id='incomplete' name='hoanThanh' value="false" onChange={formAddService.handleChange} onBlur={formAddService.handleBlur}/>
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
                                {(formAddService.errors.hoanThanh && formAddService.touched.hoanThanh) && <p className='messErr'>{formAddService.errors.hoanThanh}</p>}
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
                    <form className="form" onSubmit={formEditService.handleSubmit}>
                        <div className="form__content">
                            <div className="form__input form-jobType">
                                <div className="input-content">
                                    <input type="text" name='id' disabled placeholder='0' value={formEditService.values.id}/>
                                    <i className="bx bx-task"></i>
                                    <span>ID</span>
                                </div>
                            </div>
                            <div className="form__input">
                                <div className="input-content">
                                    <input type="text" name='maCongViec' required value={formEditService.values.maCongViec} onChange={formEditService.handleChange} onBlur={formEditService.handleBlur}/>
                                    <i className='bx bxs-briefcase-alt'></i>
                                    <span>Job ID</span>
                                </div>
                                {(formEditService.errors.maCongViec && formEditService.touched.maCongViec) && <p className='messErr'>{formEditService.errors.maCongViec}</p> }
                            </div>
                            <div className="form__input">
                                <div className="input-content">
                                    <input type="text" name='maNguoiThue' required value={formEditService.values.maNguoiThue} onChange={formEditService.handleChange} onBlur={formEditService.handleBlur}/>
                                    <i className='bx bxs-user-circle'></i>
                                    <span>Hirer ID</span>
                                </div>
                                {(formEditService.errors.maNguoiThue && formEditService.touched.maNguoiThue) && <p className='messErr'>{formEditService.errors.maNguoiThue}</p> }
                            </div>
                            <div className="form__input">
                                <div className="input-content">
                                    <input type="text" name='ngayThue' required value={formEditService.values.ngayThue} onChange={formEditService.handleChange} onBlur={formEditService.handleBlur}/>
                                    <i className='bx bxs-calendar-check'></i>
                                    <span>Hire date</span>
                                </div>
                                {(formEditService.errors.ngayThue && formEditService.touched.ngayThue) && <p className='messErr'>{formEditService.errors.ngayThue}</p> }
                            </div>
                            <div className="form__condition">
                                <input type="radio" id='u-complete' name='hoanThanh' value="true" checked={formEditService.values.hoanThanh} onChange={handleSelectCondition}/>
                                <input type="radio" id='u-incomplete' name='hoanThanh' value="false" checked={!formEditService.values.hoanThanh} onChange={handleSelectCondition}/>
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
                                {(formAddService.errors.hoanThanh && formAddService.touched.hoanThanh) && <p className='messErr'>{formAddService.errors.hoanThanh}</p>}
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