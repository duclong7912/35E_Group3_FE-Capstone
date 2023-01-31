import { PayloadAction, createSlice } from '@reduxjs/toolkit'
import { DispatchType } from '../configStore';
import { JobMenuModel, JobMenuState } from '../../Models/jobMenu/jobMenuModel';
import { http } from '../../util/config';

const initialState:JobMenuState = {
    arrJobMenu: []
}

const jobMenuReducer = createSlice({
  name: 'jobMenuReducer',
  initialState,
  reducers: {
    jobMenuAction: (state: JobMenuState, action: PayloadAction<JobMenuModel[]>) => {
        state.arrJobMenu = action.payload;
    }
  }
});

export const { jobMenuAction } = jobMenuReducer.actions

export default jobMenuReducer.reducer

// -------- action sync --------

export const jobMenuAPI = () => {
    return async (dispatch: DispatchType) => {
        const result = await http.get("/cong-viec/lay-menu-loai-cong-viec");
        const action:PayloadAction<JobMenuModel[]> = jobMenuAction(result.data.content);
        dispatch(action) 
    }
}
