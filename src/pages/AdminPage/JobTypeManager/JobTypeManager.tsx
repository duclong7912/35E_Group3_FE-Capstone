import React, { useEffect, useState } from 'react'
import { closeModal, openModal } from '../../../hoc/Modal/modal';
import { DispatchType, StateType } from '../../../redux/configStore';
import { useDispatch, useSelector } from 'react-redux';
import { addJobTypeAPI, arrJobTypeAPI, deleteJobTypeAPI, editJobTypeAPI } from '../../../redux/adminReducer/adminReducer';
import { useFormik } from 'formik';
import * as yup from 'yup';
import { JobTypeModel } from '../../../Models/adminModel/adminModel';
import { Pagination } from 'antd';

type Props = {}

const JobTypeManager = (props: Props) => {

    const dispatch:DispatchType = useDispatch();
    const { arrJobType } = useSelector((state:StateType) => state.adminReducer)
    const [currentPage, setCurrentPage] = useState<number>(1)
    const [pageSize, setPageSize] = useState<number>(10);
    const startIndex = (currentPage - 1) * pageSize;
    const endIndex = startIndex + pageSize
    useEffect(() => {
        dispatch(arrJobTypeAPI())
    }, [])

    const formType = useFormik<JobTypeModel>({
        initialValues: {
            id: 0,
            tenLoaiCongViec: ''
        },
        validationSchema: yup.object().shape({
            tenLoaiCongViec: yup.string().required("Job Type is required.")
        }),
        onSubmit: (values) => {
            dispatch(addJobTypeAPI(values))
        }
    })

    const formEditType = useFormik({
        initialValues: {
            id: 0,
            tenLoaiCongViec: ''
        },
        validationSchema: yup.object().shape({
            tenLoaiCongViec: yup.string().required("Job Type is required.")
        }),
        onSubmit: (values) => {
            dispatch(editJobTypeAPI(values));
        }
    })

    const handleEditJobType = (type:JobTypeModel) => {
        openModal(".update-modal")
        formEditType.setValues(type)
    }

    const handleDeleteType = (id:number) => {
        dispatch(deleteJobTypeAPI(id))
    }

    const handlePagination = () => {  
        if(arrJobType)
        return <Pagination
            current={currentPage}
            showLessItems
            pageSize={pageSize} 
            total={arrJobType.length} 
            onChange={handlePageChange} 
        />
    }

    const handlePageChange = (pageNumber:number, pageSize:number) => {
        setCurrentPage(pageNumber)
        setPageSize(pageSize)
        window.scrollTo({top: 0, behavior: 'smooth'})
    }

  return (
    <div className='admin-jobtype'>
        <div className="btn-add" onClick={() => openModal(".add-modal")}>
            <button>Add new job type</button>
        </div>
        <table className="jobtype__content">
            <thead>
                <tr>
                    <th style={{width:'13%'}}>ID</th>
                    <th style={{width:'43%'}}>Job Type Name</th>
                    <th style={{width:'43%'}}>Actions</th>
                </tr>
            </thead>
            <tbody>
                {arrJobType.slice(startIndex, endIndex).map((type:JobTypeModel, i:number) => {
                    return <tr key={i}>
                    <td>{type.id}</td>
                    <td>{type.tenLoaiCongViec}</td>
                    <td>
                        <span><i className='bx bx-message-square-edit' onClick={() => handleEditJobType(type)}></i></span>
                        <span><i className='bx bxs-trash-alt' onClick={() => handleDeleteType(type.id)}></i></span>
                    </td>
                </tr>
                })}
            </tbody>
        </table>
        {handlePagination()}
        <div className="add-modal">
            <div className="modal__container">
                <div className="modal__content">
                    <div className="close-modal" onClick={() => closeModal(".add-modal")}>
                        <i className='bx bxs-x-square'></i>
                    </div>
                    <h2>Add Job Type</h2>
                    <form className="form" onSubmit={formType.handleSubmit}>
                        <div className="form__content">
                            <div className="form__input form-jobType w-100" style={{display: 'unset'}}>
                                <div className="input-content">
                                    <input type="text" name='email' disabled placeholder='0'/>
                                    <i className='bx bx-task'></i>
                                    <span>ID</span>
                                </div>
                            </div>
                            <div className="form__input w-100">
                                <div className="input-content">
                                    <input type="text" name='tenLoaiCongViec' required onChange={formType.handleChange} onBlur={formType.handleBlur}/>
                                    <i className='bx bxs-briefcase-alt'></i>
                                    <span>Job type</span>
                                </div>
                                {(formType.errors.tenLoaiCongViec && formType.touched.tenLoaiCongViec) && <p className='messErr'>{formType.errors.tenLoaiCongViec}</p>}
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
                    <form className="form" onSubmit={formEditType.handleSubmit}>
                        <div className="form__content" style={{display: 'unset'}}>
                            <div className="form__input form-jobType w-100">
                                <div className="input-content">
                                    <input type="text" name='email' disabled placeholder='0' value={formEditType.values.id} onChange={formEditType.handleChange}/>
                                    <i className='bx bx-task'></i>
                                    <span>ID</span>
                                </div>
                            </div>
                            <div className="form__input w-100">
                                <div className="input-content">
                                    <input type="text" name='tenLoaiCongViec' required value={formEditType.values.tenLoaiCongViec} onChange={formEditType.handleChange} onBlur={formEditType.handleBlur}/>
                                    <i className='bx bxs-briefcase-alt'></i>
                                    <span>Job type</span>
                                </div>
                                {(formEditType.errors.tenLoaiCongViec && formEditType.touched.tenLoaiCongViec) && <p className='messErr'>{formEditType.errors.tenLoaiCongViec}</p>}
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