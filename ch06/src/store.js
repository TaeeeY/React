import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "./slices/counterSlice";

// Redux Store 설정
export default configureStore({
    reducer : { counter: counterReducer },
});