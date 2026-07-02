import {
  SET_FILTERS,
  SET_PAGINATION,
  SET_SORT,
  RESET_FILTERS,
} from "./actionTypes";

import type { IssuesState } from "../types";
import type { IssuesAction } from "../types";

const initialState: IssuesState = {
  filters: {
    search: "",
    status: "",
    priority: "",
    assignee: "",
  },
  pagination: {
    page: 1,
    pageSize: 10,
  },
  sort: {
    field: "createdAt",
    order: "desc",
  },
};

export function issuesReducer(
  state = initialState,
  action: IssuesAction
): IssuesState {
  switch (action.type) {
    case SET_FILTERS:
      return {
        ...state,
        filters: {
          ...state.filters,
          ...action.payload,
        },
      };

    case SET_PAGINATION:
      return {
        ...state,
        pagination: action.payload,
      };

    case SET_SORT:
      return {
        ...state,
        sort: action.payload,
      };

    case RESET_FILTERS:
      return initialState;

    default:
      return state;
  }
}