import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { JobListModel, JobListState } from "../../Models/jobList/jobListModel";
import { http } from "../../util/config";
import { DispatchType } from "../configStore";

const initialState: JobListState = {
  arrJobList: [],
};

const jobListReducer = createSlice({
  name: "jobListReducer",
  initialState,
  reducers: {
    jobListAction: (
      state: JobListState,
      action: PayloadAction<JobListModel[]>
    ) => {
      state.arrJobList = action.payload;
    },
  },
});

export const { jobListAction } = jobListReducer.actions;

export default jobListReducer.reducer;

//---------------------action async---------

export const getListByIdApi = (id: string | undefined) => {
  return async (dispatch: DispatchType) => {
    const result = await http.get(
      `/cong-viec/lay-cong-viec-theo-chi-tiet-loai/${id}`
    );
    const action: PayloadAction<JobListModel[]> = jobListAction(
      result.data.content
    );

    dispatch(action);
  };
};

export const jobSearchApi = (param: string | undefined) => {
  return async (dispatch: DispatchType) => {
    const result = await http.get(
      `/cong-viec/lay-danh-sach-cong-viec-theo-ten/${param}`
    );
    const action: PayloadAction<JobListModel[]> = jobListAction(
      result.data.content
    );
    dispatch(action);
  };
};
