import {configureStore} from "@reduxjs/toolkit";
import answerReducer from "./slices/answerSlice";
import settingsReducer from "./slices/settingsSlice";

export default configureStore({
    reducer: {
        answer: answerReducer,
        settings: settingsReducer
    }
})