import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { QuestionType } from "../quiz/quizSlice";


export type initialStateType = {
    category: string[],
    questions:QuestionType[]
}

const initialState:initialStateType = {
    category: [],
    questions:[]
}


const adminSlice = createSlice({
    name: "admin",
    initialState,
    reducers: {
        addCategory(state, action: PayloadAction<string>) {
            state.category.push( action.payload);
        },
        removeCategory(state, action: PayloadAction<string>) {
            state.category = state.category.filter((ele) => ele !== action.payload);
        }
    }
})


export const { addCategory, removeCategory } = adminSlice.actions;
export default adminSlice.reducer;