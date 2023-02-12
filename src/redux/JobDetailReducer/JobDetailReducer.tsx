import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import {
  Comment,
  JobDetailModel,
  JobDetailState,
  PostComment,
  ThueCongViec,
} from "../../Models/jobDetail/jobDetailModel";
import { http } from "../../util/config";
import { DispatchType } from "../configStore";

const initialState: JobDetailState = {
  arrJobDetail: [],
  arrComment: [],
  postComment: [],
};

const JobDetailReducer = createSlice({
  name: "JobDetailReducer",
  initialState,
  reducers: {
    jobDetailAction: (
      state: JobDetailState,
      action: PayloadAction<JobDetailModel[]>
    ) => {
      state.arrJobDetail = action.payload;
    },

    commentDetailAction: (
      state: JobDetailState,
      action: PayloadAction<Comment[]>
    ) => {
      state.arrComment = action.payload;
    },

    // postCommentAction: (
    //   state: JobDetailState,
    //   action: PayloadAction<PostComment[]>
    // ) => {
    //   state.postComment = action.payload;
    // },
  },
});

export const { jobDetailAction, commentDetailAction } =
  JobDetailReducer.actions;

export default JobDetailReducer.reducer;

//----------------action async----

export const getDetailByIdApi = (id: string | undefined) => {
  return async (dispatch: DispatchType) => {
    const result = await http.get(`/cong-viec/lay-cong-viec-chi-tiet/${id}`);
    const action: PayloadAction<JobDetailModel[]> = jobDetailAction(
      result.data.content
    );
    dispatch(action);
  };
};

export const getCommentByIdApi = (id: string | undefined | number) => {
  return async (dispatch: DispatchType) => {
    const result = await http.get(
      `/binh-luan/lay-binh-luan-theo-cong-viec/${id}`
    );
    const action: PayloadAction<Comment[]> = commentDetailAction(
      result.data.content
    );
    dispatch(action);
  };
};

export const postCommentApi = (value: PostComment) => {
  return async (dispatch: DispatchType) => {
    try {
      await http.post("/binh-luan", value);
      dispatch(getCommentByIdApi(value.maCongViec));
      // const action: PayloadAction<PostComment[]> = postCommentAction(
      //   result.data.content
      // );
      // dispatch(action);
    } catch (error) {
      console.log(error);
    }
  };
};

export const hireJob = (value: ThueCongViec) => {
  return async () => {
    try {
      await http.post("/thue-cong-viec", value);
    } catch (error) {
      console.log(error);
    }
  };
};
