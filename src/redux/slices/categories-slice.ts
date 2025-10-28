import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import Category from "../../models/Category";

let categoriesInitialState = { data: [] };

let categoriesSlice = createSlice({
  name: "categories-slice",
  initialState: categoriesInitialState,
  reducers: {
    // هاي العمليات الموجودة في صفحة الcategories
    create(state: any, action: PayloadAction<Category>) {
      console.log("save category");
      state.data = [action.payload, ...state.data];
      console.log(state.data.length);
    },
    read(state: any, action: PayloadAction<Category[]>) {
      // action.payload صار array من objects
      if (Array.isArray(action.payload)) {
        state.data = action.payload;
      } else {
        state.data = [];
      }
    },
    update(state: any, action: PayloadAction<Category>) {
      const index = state.data.findIndex(
        (category: Category) => category.id === action.payload.id
      );
      if (index !== -1) state.data[index] = action.payload;
    },
    delete(state: any, action: PayloadAction<number>) {
      // حذف العنصر بناءً على id الحقيقي من السيرفر
      state.data = state.data.filter((element: Category) => element.id !== action.payload);
    },
  },
});

export const categoriesReducer = categoriesSlice.reducer;
export const categoriesActions = categoriesSlice.actions;

//npm install react-redux
// npm install @reduxjs/toolkit
