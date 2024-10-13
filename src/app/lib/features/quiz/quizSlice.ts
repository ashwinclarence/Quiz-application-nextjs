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
    score: number
    category:string
}

const initialState:QuizType = {
    questions: [],
    answers: [],
    currentQuestionIndex: 0,
    score: 0,
    category:""
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
    }
})


export const {setQuestions,setCategory } = quizSlice.actions;
export default quizSlice.reducer;