import {
  useDispatch,
  useSelector,
  type TypedUseSelectorHook,
} from "react-redux";
import type { RootState } from "../rootReducer";

export const useAppDispatch = useDispatch;
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
