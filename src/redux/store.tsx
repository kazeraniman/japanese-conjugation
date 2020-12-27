import {configureStore} from "@reduxjs/toolkit";
import answerReducer from "./slices/answerSlice";

export default configureStore({
    reducer: {
        answer: answerReducer
    }
})