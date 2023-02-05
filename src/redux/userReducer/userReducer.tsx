import { PayloadAction, createSlice } from '@reduxjs/toolkit'
import { RegisterModel } from '../../Models/registerModel/registerModels';
import { DispatchType } from '../configStore';
import axios from 'axios';
import { ACCESS_TOKEN, ROLE, USER_LOGIN, getStoreJson, http, setCookie, setStore, setStoreJson } from '../../util/config';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { history } from '../../';
import { EditUserModel, JobHired, ProfileModel, UserState } from '../../Models/userModel/userModel';
import { LoginModel } from '../../Models/loginModel/loginModel';

const initialState:UserState = {
  loading: false,
  userLogin: getStoreJson(USER_LOGIN) ,
  jobHired: null
}

const userReducer = createSlice({
  name: 'userReducer',
  initialState,
  reducers: {
    loadingAction: (state:UserState, action:PayloadAction<boolean>) => {
      state.loading = action.payload
    },
    loginAction: (state:UserState, action:PayloadAction<ProfileModel>) => {
      state.userLogin = action.payload
    },
    jobHiredAction: (state:UserState, action: PayloadAction<JobHired[]>) => {
      state.jobHired = action.payload
    }
  }
});

export const { loadingAction, loginAction, jobHiredAction } = userReducer.actions

export default userReducer.reducer


// --------- action sync ---------

// --- Register
export const resgisterAPI = (value:RegisterModel) => {
  return async (dispatch:DispatchType) => {
    try {
      const result = await http.post("/auth/signup", value);
      toast.success("Register account successfully.", {autoClose: 3000});
      const action = loadingAction(true);
      dispatch(action)
      setTimeout(() => {history.push("/users")},2500)
      setTimeout(() => {dispatch(loadingAction(false))},3000)
    } catch (error:any) {
      setTimeout(() => {toast.error("Email already exists.", {autoClose: 3000})},200);
    }
  }
}

// --- Login

export const loginAPI = (value:LoginModel) => {
  return async (dispatch:DispatchType) => {
    try {
      const result = await http.post("/auth/signin", value);
      toast.success("Login successfully.", {autoClose: 3000});
      
      dispatch(loadingAction(true))
      const action = loginAction(result.data.content.user);
      dispatch(action)

      setTimeout(() => {history.push("/")},2500)
      setTimeout(() => {dispatch(loadingAction(false))},3000);

      setStoreJson(USER_LOGIN, result.data.content.user)
      setStore(ROLE, result.data.content.user.role)
      setStore(ACCESS_TOKEN, result.data.content.token)
      setCookie(ACCESS_TOKEN, result.data.content.token, 30)
      setCookie(ROLE, result.data.content.user.role, 30)
    } catch (error) {
      setTimeout(() => {toast.error("Email or password is incorrect.", {autoClose: 3000})},200);
    }
  }
}

export const profileAPI = (id:number) => {
  return async (dispatch:DispatchType) => {
    const result = await http.get(`/users/${id}`);
    const actionUser = loginAction(result.data.content)
    dispatch(actionUser)
  }
}

export const updateProfileAPI = (values:EditUserModel) => {
  return async (dispatch:DispatchType) => {
    const result = await http.put(`/users/${values.id}`, values)
    toast.success("Update profile successfully.", {autoClose: 3000});
  }
}

export const changeAvatarAPI = (file:any) => {
  return async (dispatch:DispatchType) => {
    try {
      await http.post("/users/upload-avatar",
      { formFile: file }, {headers: { "Content-Type": "multipart/form-data" }});
      const { id } = getStoreJson(USER_LOGIN)
      dispatch(profileAPI(id))
      toast.success("Change avatar successfully.", {autoClose: 3000});
    } catch (error) {
      console.log(error)
    }
  }
}

export const getJobHiredAPI = () => {
  return async (dispatch:DispatchType) => {
    const result = await http.get("/thue-cong-viec/lay-danh-sach-da-thue");
    dispatch(jobHiredAction(result.data.content))
  }
}

export const deleteJobHiredAPI = (id:number) => {
  return async (dispatch:DispatchType) => {
    await http.delete(`/thue-cong-viec/${id}`);
    dispatch(getJobHiredAPI())
    toast.success(`Delete #${id} successfully.`, {autoClose: 3000});
  }
}