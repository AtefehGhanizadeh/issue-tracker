import { combineReducers } from "redux";
import { issuesReducer } from "./issues/reducer";

export const rootReducer = combineReducers({
  issues: issuesReducer,
});

export type RootState = ReturnType<typeof rootReducer>;
