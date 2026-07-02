import type { IssueFilters, IssuePagination, IssueSort } from "../types";

import {
  SET_FILTERS,
  SET_PAGINATION,
  SET_SORT,
  RESET_FILTERS,
} from "./actionTypes";

// -------------------- Filters --------------------
export const setFilters = (payload: Partial<IssueFilters>) => ({
  type: SET_FILTERS,
  payload,
});

// -------------------- Pagination --------------------
export const setPagination = (payload: IssuePagination) => ({
  type: SET_PAGINATION,
  payload,
});

// -------------------- Sort --------------------
export const setSort = (payload: IssueSort) => ({
  type: SET_SORT,
  payload,
});

// -------------------- Reset --------------------
export const resetFilters = () => ({
  type: RESET_FILTERS,
});
