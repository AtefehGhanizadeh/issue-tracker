import type { RootState } from "../rootReducer";

export const selectIssuesFilters = (state: RootState) =>
  state.issues.filters;

export const selectIssuesPagination = (state: RootState) =>
  state.issues.pagination;

export const selectIssuesSort = (state: RootState) =>
  state.issues.sort;

