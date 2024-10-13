import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export type QuestionType = {
  id: number;
  question: string;
  options: string[];
  correctAnswer: string;
};

export type QuizType = {
  questions: QuestionType[];
  answers: string[];
  currentQuestionIndex: number;
  score: number;
  category: number;
  totalQuestions: number;
  workoutQuestionCount: number;
};

const initialState: QuizType = {
  questions: [],
  answers: [],
  currentQuestionIndex: 0,
  score: 0,
  category: 0,
  totalQuestions: 0,
  workoutQuestionCount: 0,
};

const quizSlice = createSlice({
  name: "quiz",
  initialState,
  reducers: {
    setQuestions(state, action: PayloadAction<QuestionType[]>) {
      state.questions = action.payload;
      state.currentQuestionIndex = 0;
      state.score = 0;

      if (state.workoutQuestionCount === 0) {
        state.workoutQuestionCount =
          state.totalQuestions < 10 ? state.totalQuestions : 10;
      }
    },

    setCategory(state, action: PayloadAction<number>) {
      state.category = action.payload;
      if (state.workoutQuestionCount === 0) {
        state.workoutQuestionCount =
          state.totalQuestions < 10 ? state.totalQuestions : 10;
      }
    },

    setTotalQuestionCount(state, action: PayloadAction<number>) {
      state.totalQuestions = action.payload;
    },

    setWorkoutQuestionCount(state, action: PayloadAction<number>) {
      state.workoutQuestionCount = action.payload;
    },

    incrementScore(state) {
      state.score += 1;
    },

    setNextQuestionIndex(state) {
      if (state.workoutQuestionCount - 1 > state.currentQuestionIndex) {
        state.currentQuestionIndex += 1;
      }
    },

    resetQuiz(state) {
      (state.questions = []),
        (state.answers = []),
        (state.currentQuestionIndex = 0),
        (state.score = 0),
        (state.category = 0),
        (state.totalQuestions = 0),
        (state.workoutQuestionCount = 0);
    },
  },
});

export const {
  setQuestions,
  setCategory,
  setTotalQuestionCount,
  setWorkoutQuestionCount,
  incrementScore,
  setNextQuestionIndex,
  resetQuiz,
} = quizSlice.actions;

export default quizSlice.reducer;
