import {createSlice} from "@reduxjs/toolkit";

export const answerSlice = createSlice({
    name: "answer",
    initialState: {
        writtenAnswer: ""
    },
    reducers: {
        setWrittenAnswer: (state, action) => {
            state.writtenAnswer = action.payload
        }
    }
});

export const { setWrittenAnswer } = answerSlice.actions;

export const selectWrittenAnswer = state => state.answer.writtenAnswer;

export default answerSlice.reducer;

