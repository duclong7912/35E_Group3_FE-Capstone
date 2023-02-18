import { PayloadAction, createSlice } from '@reduxjs/toolkit'
import { AddAdminModel, AdminEditUser, AdminJobModel, AdminState, JobTypeModel, ServiceModel, UserModel } from '../../Models/adminModel/adminModel';
import { DispatchType, StateType } from '../configStore';
import { http } from '../../util/config';
import { toast } from 'react-toastify';
import { history } from '../..';
import { closeModal } from '../../hoc/Modal/modal';

const initialState:AdminState = {
  arrUser: [],
  userInfo: null,
  arrJob: [],
  arrJobType: [],
  arrService: []
}

const adminReducer = createSlice({
  name: "adminReducer",
  initialState,
  reducers: {
    arrUserAction: (state: AdminState, action:PayloadAction<UserModel[]>) => {
        state.arrUser = action.payload
    },
    userInfoAction: (state:AdminState, action:PayloadAction<UserModel>) => {
      state.userInfo = action.payload
    },
    arrJobAction: (state:AdminState, action:PayloadAction<AdminJobModel[]>) => {
      state.arrJob = action.payload
    },
    arrJobTyeAction: (state:AdminState, action:PayloadAction<JobTypeModel[]>) => {
      state.arrJobType = action.payload
    },
    arrServiceAction: (state:AdminState, action: PayloadAction<ServiceModel[]>) => {
      state.arrService = action.payload
    } 
  }
});

export const { arrUserAction, userInfoAction, arrJobAction, arrJobTyeAction, arrServiceAction } = adminReducer.actions

export default adminReducer.reducer

// ------- Users action async -------

// get all user 
export const getArrUserAPI = () => {
  return async (dispatch:DispatchType) => {
      const result = await http.get(`/users`);
      dispatch(arrUserAction(result.data.content))
  }
}

// search user
export const searchUserAPI = (keyword:string) => {
  return async (dispatch:DispatchType) => {
    const result = await http.get(`/users/phan-trang-tim-kiem?pageIndex=1&pageSize=10000&keyword=${keyword}`);
    dispatch(arrUserAction(result.data.content.data))
  }
}

// add admin
export const addAdminAPI = (values:AddAdminModel) => {
  return async (dispatch:DispatchType) => {
    try {
      await http.post("/users", values)
      toast.success("Add admin successfully.", {autoClose: 3000});
      closeModal(".add-modal")
      dispatch(getArrUserAPI())
    } catch (error) {
      toast.error("Email already exists.", {autoClose: 3000})
    }

  }
}

// update user 
export const editUserAPI = (values: AdminEditUser) => {
  return async (dispatch:DispatchType) => {
    await http.put(`/users/${values.id}`, values)
    dispatch(getArrUserAPI())
    toast.success(`Edit user#${values.id} successfully.`, {autoClose: 3000});
  }
}

// user info
export const userInfoAPI = (id:number) => {
  return async (dispatch:DispatchType) => {
    const result = await http.get(`/users/${id}`)
    dispatch(userInfoAction(result.data.content))
  }
}

// delete user
export const deleteUserAPI = (id:number) => {
  return async (dispatch:DispatchType) => {
    await http.delete(`/users?id=${id}`)
    dispatch(getArrUserAPI())
    toast.success(`Delete user#${id} successfully.`, {autoClose: 3000});
  }
} 

// ------- Job action async -------

// get all job
export const arrJobAPI = () => {
  return async(dispatch:DispatchType) => {
    const result =  await http.get("/cong-viec");
    dispatch(arrJobAction(result.data.content))
  }
}

// add Job 
export const addJobAPI = (values:AdminJobModel) => {
  return async (dispatch:DispatchType) => {
    try{
      await http.post("/cong-viec", values)
      dispatch(arrJobAPI())
      toast.success(`Add job successfully.`, {autoClose: 3000});
      closeModal(".add-modal")
    } catch (err) {
      console.log(err)
    }
  }
}

// edit job
export const editJobAPI = (values:AdminJobModel) => {
  return async (dispatch:DispatchType) => {
    try {
      await http.put(`/cong-viec/${values.id}`, values)
      dispatch(arrJobAPI())
      toast.success(`Edit job#${values.id} successfully.`, {autoClose: 3000});
      closeModal(".update-modal")
    } catch (error) {
      console.log(error)
    }
  }
}

// delete job
export const deleteJobAPI = (id:number) => {
  return async (dispatch:DispatchType) => {
    await http.delete(`/cong-viec/${id}`)
    toast.success(`Delete job#${id} successfully.`, {autoClose: 3000});
    dispatch(arrJobAPI())
  }
}

// update img job
export const updateJobImgAPI = (id:number, file:any) => {
  return async (dispatch:DispatchType) => {
    try {
      await http.post(`/cong-viec/upload-hinh-cong-viec/${id}`, { formFile: file }, {headers: { "Content-Type": "multipart/form-data" }});
      toast.success(`Update image successfully.`, {autoClose: 3000});
      dispatch(arrJobAPI())
    } catch (error) {
      toast.error("Image size is too large.", {autoClose: 3000});
    }
  }
}


// ------- Job type action async -------

// get arr job type
export const arrJobTypeAPI = () => {
  return async (dispatch:DispatchType) => {
    const result = await http.get('/loai-cong-viec')
    dispatch(arrJobTyeAction(result.data.content))
  }
}

// add jobtype
export const addJobTypeAPI = (values:JobTypeModel) => {
  return async(dispatch:DispatchType) => {
    try {
      await http.post(`/loai-cong-viec`, values)
      toast.success(`Add job type successfully.`, {autoClose: 3000});
      dispatch(arrJobTypeAPI())
      closeModal(".add-modal")
    } catch (error) {
      console.log(error)
    }
  }
}

// edit job type
export const editJobTypeAPI = (values:JobTypeModel) => {
  return async (dispatch:DispatchType) => {
    try{
      await http.put(`/loai-cong-viec/${values.id}`, values)
      dispatch(arrJobTypeAPI())
      toast.success(`Edit job type #${values.id} successfully.`, {autoClose: 3000});
      closeModal(".update-modal")
    }catch (err) {
      console.log(err)
    }
  }
}

// delete job type
export const deleteJobTypeAPI = (id:number) => {
  return async (dispatch:DispatchType) => {
    await http.delete(`/loai-cong-viec/${id}`)
    toast.success(`Delete job type#${id} successfully.`, {autoClose: 3000});
    dispatch(arrJobTypeAPI())
  }
}

// ------- Users action async -------

// get arr service
export const arrServiceAPI = () => {
  return async (dispatch:DispatchType) => {
    const result = await http.get("/thue-cong-viec");
    dispatch(arrServiceAction(result.data.content))
  }
}

// add service
export const addServiceAPI = (values:ServiceModel) => {
  return async (dispatch:DispatchType) => {
    await http.post("/thue-cong-viec", values)
    toast.success(`Add service successfully.`, {autoClose: 3000});
    closeModal(".add-modal")
    dispatch(arrServiceAPI())
  }
}

// edit service
export const editServiceAPI = (values:ServiceModel) => {
  return async (dispatch:DispatchType) => {
    try {
      await http.put(`/thue-cong-viec/${values.id}`, values)
      toast.success(`Edit service#${values.id} successfully.`, {autoClose: 3000});
      closeModal(".update-modal")
      dispatch(arrServiceAPI())
    } catch (error) {
      console.log(error)
    } 
  }
}

// delete service
export const deleteServiceAPI = (id:number) => {
  return async (dispatch:DispatchType) => {
    await http.delete(`/thue-cong-viec/${id}`)
    toast.success(`Delete service#${id} successfully.`, {autoClose: 3000});
    dispatch(arrServiceAPI())
  }
}