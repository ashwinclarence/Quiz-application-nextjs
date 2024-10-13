import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "./store";


export const useAppDispatch: () => AppDispatch = useDispatch;

// this will help not to write the state:RootState in useSelector in each call
export const useAppSelector: (selector:(state:RootState)=>unknown) => unknown = useSelector;