import { useDispatch } from "react-redux";
import { AppDispatcher } from "store/store";

export const useAppDispatch = () => useDispatch<AppDispatcher>()