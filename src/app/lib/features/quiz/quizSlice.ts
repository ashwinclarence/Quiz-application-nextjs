import { createSlice, PayloadAction } from "@reduxjs/toolkit";


export type QuestionType = {
    id: number;
    question: string;
    options: string[];
    correctAnswer: string;
}


export type QuizType = {
    questions: QuestionType[];
    answers: string[];
    currentQuestionIndex: number;
    score: number;
    category: string;
    totalQuestions:number
}

const initialState:QuizType = {
    questions: [],
    answers: [],
    currentQuestionIndex: 0,
    score: 0,
    category: "",
    totalQuestions:0
}

const quizSlice = createSlice({
    name:"quiz",
    initialState,
    reducers: {
        setQuestions(state, action: PayloadAction<QuestionType[]>) {
            state.questions = action.payload;
        },
        setCategory(state, action: PayloadAction<string>) {
            state.category = action.payload;
        },
        setTotalQuestionCount(state, action: PayloadAction<number>) {
            state.totalQuestions = action.payload;
        }
    }
})


export const {setQuestions,setCategory,setTotalQuestionCount } = quizSlice.actions;
export default quizSlice.reducer;