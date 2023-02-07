import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { JobTypeModel, JobTypeState } from "../../Models/jobType/jobType";
import { http } from "../../util/config";
import { DispatchType } from "../configStore";

const initialState: JobTypeState = {
  arrJobType: [],
};

const jobTypeReducer = createSlice({
  name: "jobTypeReducer",
  initialState,
  reducers: {
    jobTypeAction: (
      state: JobTypeState,
      action: PayloadAction<JobTypeModel[]>
    ) => {
      state.arrJobType = action.payload;
    },
  },
});

export const { jobTypeAction } = jobTypeReducer.actions;

export default jobTypeReducer.reducer;

//----------------------action async------

export const getTypeByIdApi = (id: string | undefined) => {
  return async (dispatch: DispatchType) => {
    const result = await http.get(
      `/cong-viec/lay-chi-tiet-loai-cong-viec/${id}`
    );
    const action: PayloadAction<JobTypeModel[]> = jobTypeAction(
      result.data.content
    );
    dispatch(action);
  };
};
