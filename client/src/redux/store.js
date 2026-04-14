import { configureStore } from "@reduxjs/toolkit";
import leadReducer from "./leadSlice";
import courseReducer from "./courseSlice";
import courseReviewReducer from "./courseReviewSlice";
import amountReducer from './amountSlice'



export const store = configureStore({
  reducer: {
    lead: leadReducer,
    courses: courseReducer,
    courseReview: courseReviewReducer,
    amount: amountReducer,
  
  },
});