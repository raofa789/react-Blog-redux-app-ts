import { createSlice } from "@reduxjs/toolkit";
import Blog from "../../models/Blogs";

//    للحالة

type BlogState = {
  data: Blog[];
  selectedBlog?: Blog | null;
};
let initialState: BlogState = {
  data: JSON.parse(localStorage.getItem("blogs") || "[]"),
  selectedBlog: null,
};
let blogsSlice = createSlice({
  name: "blogs-slice",
  initialState: initialState,
  reducers: {
    //هاي العمليات الموجودة في صفحة Blog
    create(state: any, action: { payload: Blog }) {
      state.data.push = action.payload; //اضافة blog جديد
    },
    read(state: any, action: { payload: Blog }) {},
    update(state: any, action: { payload: Blog }) {
      const index = state.data.findIndex(
        (blog: Blog) => blog._id === action.payload._id
      );
      if (index !== -1) {
        state.data[index] = action.payload;
      }
      localStorage.setItem("blogs", JSON.stringify(state.data));
    },
    delete(state: any, action: { payload: Blog | number }) {
      state.data = state.data.filter(
        (element: Blog) => element._id !== action.payload
      );
    },
  },
});

export const blogsReducer = blogsSlice.reducer;
export const blogsActions = blogsSlice.actions;
//npm install react-redux
// npm install @reduxjs/toolkit
