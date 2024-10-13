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
    category: number;
    totalQuestions: number
    workoutQuestionCount:number
}

const initialState:QuizType = {
    questions: [],
    answers: [],
    currentQuestionIndex: 0,
    score: 0,
    category: 0,
    totalQuestions: 0,
    workoutQuestionCount:0
}

const quizSlice = createSlice({
    name:"quiz",
    initialState,
    reducers: {
        setQuestions(state, action: PayloadAction<QuestionType[]>) {
            state.questions = action.payload;
        },
        setCategory(state, action: PayloadAction<number>) {
            state.category = action.payload;
        },
        setTotalQuestionCount(state, action: PayloadAction<number>) {
            state.totalQuestions = action.payload;
        },
        setWorkoutQuestionCount(state, action: PayloadAction<number>) {
            state.workoutQuestionCount = action.payload;
        }
    }
})


export const {setQuestions,setCategory,setTotalQuestionCount,setWorkoutQuestionCount } = quizSlice.actions;
export default quizSlice.reducer;