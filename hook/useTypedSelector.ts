import { useSelector, TypedUseSelectorHook } from "react-redux";
import { RooteState } from "store/store";

export const useTypedSelector: TypedUseSelectorHook<RooteState> = useSelector