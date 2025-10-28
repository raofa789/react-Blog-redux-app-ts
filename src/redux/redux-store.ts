import { configureStore } from "@reduxjs/toolkit";
import { categoriesReducer } from "./slices/categories-slice";
import { blogsReducer } from "./slices/blogs-slice";

const reduxStore = configureStore({
  reducer: {
    categories: categoriesReducer,
    blogs: blogsReducer,
  },
});

export default reduxStore;

// تعريف RootState لاستخدامه في useSelector
export type RootState = ReturnType<typeof reduxStore.getState>;

// تعريف AppDispatch لاستخدامه مع useDispatch إذا أحببت
export type AppDispatch = typeof reduxStore.dispatch;
