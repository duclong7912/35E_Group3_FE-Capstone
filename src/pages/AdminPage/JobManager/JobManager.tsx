import React, {useEffect} from 'react'
import { string } from 'yup';
import { closeModal, openModal} from '../../../hoc/Modal/modal';
import { addJobAPI, arrJobAPI, deleteJobAPI, editJobAPI, updateJobImgAPI } from '../../../redux/adminReducer/adminReducer';
import { DispatchType, StateType } from '../../../redux/configStore';
import { useDispatch, useSelector } from 'react-redux';
import { AdminJobModel } from '../../../Models/adminModel/adminModel';
import { useState } from 'react';
import { Pagination } from 'antd';
import { useFormik } from 'formik';
import * as yup from 'yup';
type Props = {}

const JobManager = (props: Props) => {

    const dispatch:DispatchType = useDispatch();
    const { arrJob } = useSelector((state:StateType) => state.adminReducer);
    const [currentPage, setCurrentPage] = useState<number>(1)
    const [pageSize, setPageSize] = useState<number>(10);
    const startIndex = (currentPage - 1) * pageSize;
    const endIndex = startIndex + pageSize;
    const [jobID, setJobID] = useState<number | null>(null)

    useEffect(() => {
        dispatch(arrJobAPI());
    }, [])

    const formAddJob = useFormik<AdminJobModel>({
        initialValues: {
            id: 0,
            tenCongViec: '',
            moTa: '',
            moTaNgan: '',
            nguoiTao: 1,
            maChiTietLoaiCongViec: 12,
            giaTien: 0,
            danhGia: 0,
            saoCongViec: 0,
            hinhAnh:''
        },
        validationSchema: yup.object().shape({
            tenCongViec: yup.string().required("Job name is required."),
            moTa: yup.string().required("Description is required."),
            moTaNgan: yup.string().required("Short description is required."),
            danhGia: yup.number().required("Rate is required.").typeError("Rate must be a number."),
            giaTien: yup.number().required("Price is required.").typeError("Price must be a number."),
            saoCongViec: yup.number().required("Star rating is required.").lessThan(6,"Star rating from 1 to 5.").typeError("Star rating must be a number."),
        }),
        onSubmit: (values:AdminJobModel) => { 
            dispatch(addJobAPI(values))
        }
    })

    const formEditJob = useFormik({
        initialValues: {
            id: 0,
            nguoiTao: 1,
            maChiTietLoaiCongViec: 12,
            tenCongViec: '',
            moTa: '',
            moTaNgan: '',
            giaTien: 0,
            danhGia: 0,
            saoCongViec: 0,
            hinhAnh:''
        },
        validationSchema: yup.object().shape({
            tenCongViec: yup.string().required("Job name is required."),
            moTa: yup.string().required("Description is required."),
            moTaNgan: yup.string().required("Short description is required."),
            danhGia: yup.number().required("Rate is required.").typeError("Rate must be a number."),
            giaTien: yup.number().required("Price is required.").typeError("Price must be a number."),
            saoCongViec: yup.number().required("Star rating is required.").lessThan(6,"Star rating from 1 to 5.").typeError("Star rating must be a number."),
        }),
        onSubmit: (values) => {
            dispatch(editJobAPI(values))
        }
    })

    
    const handleEditJob = (job:AdminJobModel) => {
        openModal(".update-modal");
        formEditJob.setValues(job)
    }

    const handleChange = (e:React.ChangeEvent<HTMLInputElement>) => {
        const { files } = e.target;
        if (jobID) {
            dispatch(updateJobImgAPI(jobID, (files as FileList)[0]))
        }
    }

    const handleClick = (id:number) => {
        setJobID(id)
    }

    const handleDeleteJob = (id:number) => {
        dispatch(deleteJobAPI(id))
    }

    const handlePagination = () => {  
        if(arrJob)
        return <Pagination
        current={currentPage}
        showLessItems
        pageSize={pageSize} 
        total={arrJob.length} 
        onChange={handlePageChange} 
        />
    }
    
    const handlePageChange = (pageNumber:number, pageSize:number) => {
        setCurrentPage(pageNumber)
        setPageSize(pageSize)
        window.scrollTo({top: 0, behavior: 'smooth'})
    }

  return (
    <div className='admin-job'>
        <div className="btn-add" onClick={() => openModal(".add-modal")}>
            <button>Add new job</button>
        </div>
        <table className="job__content">
            <thead>
                <tr>
                    <th style={{width:'4%'}}>ID</th>
                    <th style={{width:'25%'}}>Name</th>
                    <th style={{width:'12%'}}>Image</th>
                    <th style={{width:'40%'}}>Description</th>
                    <th style={{width:'6%'}}>Price</th>
                    <th style={{width:'6%'}}>Rate</th>
                    <th style={{width:'7%'}}>Actions</th>
                </tr>
            </thead>
            <tbody>
                {arrJob.slice(startIndex, endIndex).map((job:AdminJobModel, i:number) => {
                    return <tr key={i}>
                        <td><div>{job.id}</div></td>
                        <td><div>{job.tenCongViec}</div></td>
                        <td style={{paddingLeft: '0'}}>
                            <div className="job-img">
                                <label htmlFor={`jobImg${job.id}`} onClick={() => handleClick(job.id)}>
                                    <div className="camera">
                                        <i className="bx bx-camera"></i>
                                    </div>
                                    <img style={{width: '100%', height: '100%', objectFit: 'cover'}} src={job.hinhAnh} alt="img"/>
                                </label>
                                <input type="file" id={`jobImg${job.id}`} hidden onChange={handleChange}/>
                            </div>
                        </td>
                        <td><div>{job.moTaNgan}</div></td>
                        <td><div>{job.giaTien}</div></td>
                        <td><div>{job.danhGia}</div></td>
                        <td>
                            <span><i className='bx bx-message-square-edit' onClick={() => handleEditJob(job)}></i></span>
                            <span><i className='bx bxs-trash-alt' onClick={() => {handleDeleteJob(job.id)}}></i></span>
                        </td>
                    </tr>
                })}
            </tbody>
            
        </table>
        {handlePagination()}
        <div className="add-modal">
            <div className="modal__container">
                <div className="modal__content">
                      <div className="close-modal" onClick={() => {closeModal(".add-modal")}}>
                          <i className='bx bxs-x-square'></i>
                      </div>
                      <h2>Add Job</h2>
                    <form className="form" onSubmit={formAddJob.handleSubmit}>
                        <div className="form__content">
                            <div className="form__input">
                                <div className="input-content">
                                    <input type="text" name='tenCongViec' required onChange={formAddJob.handleChange} onBlur={formAddJob.handleBlur}/>
                                    <i className='bx bxs-briefcase'></i>
                                    <span>Job name</span>
                                </div>
                                {(formAddJob.errors.tenCongViec && formAddJob.touched.tenCongViec) && <p className='messErr'>{formAddJob.errors.tenCongViec}</p>}
                            </div>
                            <div className="form__input">
                                <div className="input-content">
                                    <input type="text" name='moTa' required onChange={formAddJob.handleChange} onBlur={formAddJob.handleBlur}/>
                                    <i className='bx bxs-comment-dots'></i>
                                    <span>Description</span>
                                </div>
                                {(formAddJob.errors.moTa && formAddJob.touched.moTa) && <p className='messErr'>{formAddJob.errors.moTa}</p>}
                            </div>
                            <div className="form__input">
                                <div className="input-content">
                                    <input type="text" name='moTaNgan' required onChange={formAddJob.handleChange} onBlur={formAddJob.handleBlur}/>
                                    <i className='bx bxs-comment'></i>
                                    <span>Short description</span>
                                </div>
                                {(formAddJob.errors.moTaNgan && formAddJob.touched.moTaNgan) && <p className='messErr'>{formAddJob.errors.moTaNgan}</p>}
                            </div>
                            <div className="form__input">
                                <div className="input-content">
                                    <input type="text" name='giaTien' required onChange={formAddJob.handleChange} onBlur={formAddJob.handleBlur}/>
                                    <i className='bx bxs-purchase-tag'></i>
                                    <span>Price</span>
                                </div>
                                {(formAddJob.errors.giaTien && formAddJob.touched.giaTien) && <p className='messErr'>{formAddJob.errors.giaTien}</p>}
                            </div>
                            <div className="form__input">
                                <div className="input-content">
                                    <input type="text" name='danhGia' required onChange={formAddJob.handleChange} onBlur={formAddJob.handleBlur}/>
                                    <i className="fa-solid fa-percent"></i>
                                    <span>Rate</span>
                                </div>
                                {(formAddJob.errors.danhGia && formAddJob.touched.danhGia) && <p className='messErr'>{formAddJob.errors.danhGia}</p>}
                            </div>
                            {/* <div className="form__input">
                                <div className="input-content">
                                    <input type="text" name='code' onChange={formAddJob.handleChange} onBlur={formAddJob.handleBlur}/>
                                    <i className='bx bx-barcode'></i>
                                    <span>Detail code</span>
                                </div>
                            </div> */}
                            <div className="form__input">
                                <div className="input-content">
                                    <input type="text" name='saoCongViec' required onChange={formAddJob.handleChange} onBlur={formAddJob.handleBlur}/>
                                    <i className='bx bxs-star'></i>
                                    <span>Star rating</span>
                                </div>
                                {(formAddJob.errors.saoCongViec && formAddJob.touched.saoCongViec) && <p className='messErr'>{formAddJob.errors.saoCongViec}</p>}
                            </div>
                            {/* <label htmlFor="file" className='d-flex align-items-center'>
                                <input type="file" name='hinhAnh' id='file'/>
                                <div>
                                    <i className='bx bx-upload'></i>
                                    <span>Upload image</span>
                                </div>
                                {formAddJob.values.hinhAnh !== '' && <img src={URL.createObjectURL(formAddJob.values.hinhAnh as any)} style={{marginLeft:'20px', width:'115px', height: '100%'}}/>}
                            </label> */}
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
                    <form className="form" onSubmit={formEditJob.handleSubmit}>
                        <div className="form__content">
                            <div className="form__input">
                                <div className="input-content">
                                    <input type="text" name='tenCongViec' required value={formEditJob.values.tenCongViec} onChange={formEditJob.handleChange} onBlur={formEditJob.handleBlur}/>
                                    <i className='bx bxs-briefcase'></i>
                                    <span>Job name</span>
                                </div>
                                {(formEditJob.errors.tenCongViec && formEditJob.touched.tenCongViec) && <p className='messErr'>{formEditJob.errors.tenCongViec}</p>}
                            </div>
                            <div className="form__input">
                                <div className="input-content">
                                    <input type="text" name='moTa' required value={formEditJob.values.moTa} onChange={formEditJob.handleChange} onBlur={formEditJob.handleBlur}/>
                                    <i className='bx bxs-comment-dots'></i>
                                    <span>Description</span>
                                </div>
                                {(formEditJob.errors.moTa && formEditJob.touched.moTa) && <p className='messErr'>{formEditJob.errors.moTa}</p>}
                            </div>
                            <div className="form__input">
                                <div className="input-content">
                                    <input type="text" name='moTaNgan' required value={formEditJob.values.moTaNgan} onChange={formEditJob.handleChange} onBlur={formEditJob.handleBlur}/>
                                    <i className='bx bxs-comment'></i>
                                    <span>Short description</span>
                                </div>
                                {(formEditJob.errors.moTaNgan && formEditJob.touched.moTaNgan) && <p className='messErr'>{formEditJob.errors.moTaNgan}</p>}
                            </div>
                            <div className="form__input">
                                <div className="input-content">
                                    <input type="text" name='giaTien' required value={formEditJob.values.giaTien} onChange={formEditJob.handleChange} onBlur={formEditJob.handleBlur}/>
                                    <i className='bx bxs-purchase-tag'></i>
                                    <span>Price</span>
                                </div>
                                {(formEditJob.errors.giaTien && formEditJob.touched.giaTien) && <p className='messErr'>{formEditJob.errors.giaTien}</p>}
                            </div>
                            <div className="form__input">
                                <div className="input-content">
                                    <input type="text" name='danhGia' required value={formEditJob.values.danhGia} onChange={formEditJob.handleChange} onBlur={formEditJob.handleBlur}/>
                                    <i className="fa-solid fa-percent"></i>
                                    <span>Rate</span>
                                </div>
                                {(formEditJob.errors.danhGia && formEditJob.touched.danhGia) && <p className='messErr'>{formEditJob.errors.danhGia}</p>}
                            </div>
                            {/* <div className="form__input">
                                <div className="input-content">
                                    <input type="text" name='code' required value={formEditJob.values}/>
                                    <i className='bx bx-barcode'></i>
                                    <span>Detail code</span>
                                </div>
                            </div> */}
                            <div className="form__input">
                                <div className="input-content">
                                    <input type="text" name='saoCongViec' required value={formEditJob.values.saoCongViec} onChange={formEditJob.handleChange} onBlur={formEditJob.handleBlur}/>
                                    <i className='bx bxs-star'></i>
                                    <span>Star rating</span>
                                </div>
                                {(formEditJob.errors.saoCongViec && formEditJob.touched.saoCongViec) && <p className='messErr'>{formEditJob.errors.saoCongViec}</p>}
                            </div>
                            {/* <label htmlFor="file">
                                <input type="file" name='file' id='file' />
                                <div>
                                    <i className='bx bx-upload'></i>
                                    <span>Upload image</span>
                                </div>
                            </label> */}
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