import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import {
  JobSearchState,
  UserSearch,
} from "../../Models/jobSearch/jobSearchModel";
import { http } from "../../util/config";
import { DispatchType } from "../configStore";

const initialState: JobSearchState = {
  arrJobSearch: [],
};

const jobResultReducer = createSlice({
  name: "jobResultReducer",
  initialState,
  reducers: {
    jobSearchAction: (
      state: JobSearchState,
      action: PayloadAction<UserSearch[]>
    ) => {
      state.arrJobSearch = action.payload;
    },
  },
});

export const { jobSearchAction } = jobResultReducer.actions;

export default jobResultReducer.reducer;

///----------------action asycn---------

export const jobSearchApi = (param: string) => {
  return async (dispatch: DispatchType) => {
    const result = await http.get(
      `/cong-viec/lay-danh-sach-cong-viec-theo-ten/${param}`
    );
    const action: PayloadAction<UserSearch[]> = jobSearchAction(
      result.data.content
    );
    dispatch(action);
  };
};
