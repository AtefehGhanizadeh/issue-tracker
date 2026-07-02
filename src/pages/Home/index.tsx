import { useTheme } from "@mui/material/styles";
import useMediaQuery from "@mui/material/useMediaQuery";
import { setPagination } from "../../app/store/issues/actions";
import { useAppDispatch, useAppSelector } from "../../app/store/issues/hooks";
import AppState from "../../components/AppState/AppState";

import IssueCardList from "../../components/issue/issueCard/IssueCardList";
import IssuesTable from "../../components/issue/issueTable/IssuesTable";
import useGetIssues from "../../services/issue/hooks/useGetIssues";

import {
  selectIssuesFilters,
  selectIssuesPagination,
  selectIssuesSort,
} from "../../app/store/issues/selector";
import IssuesFiltersBar from "../../components/issue/IssuesFiltersBar";

export default function Home() {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));
  const dispatch = useAppDispatch();

  const filters = useAppSelector(selectIssuesFilters);
  const pagination = useAppSelector(selectIssuesPagination);
  const sort = useAppSelector(selectIssuesSort);

  const { data, isPending, isError, error } = useGetIssues({
    page: pagination.page,
    pageSize: pagination.pageSize,
    search: filters.search,
    status: filters.status || undefined,
    priority: filters.priority || undefined,
    assignee: filters.assignee,
    sortBy: sort.field,
    order: sort.order,
  });


  const isEmpty = !!data && data.data.length === 0;

  if (isPending || isError || isEmpty) {
    return <AppState isLoading={isPending} error={error} empty={isEmpty} />;
  }

  return (
    <div>
      {isMobile ? (
        <IssueCardList issues={data?.data ?? []} />
      ) : (
        <div>
          <IssuesFiltersBar />
          <IssuesTable
            issues={data?.data ?? []}
            count={data?.items ?? 0}
            page={pagination.page - 1}
            pageSize={pagination.pageSize}
            onPageChange={(newPage) => {
              dispatch(
                setPagination({
                  page: newPage + 1,
                  pageSize: pagination.pageSize,
                }),
              );
            }}
            onPageSizeChange={(newSize) => {
              dispatch(
                setPagination({
                  page: 1,
                  pageSize: newSize,
                }),
              );
            }}
          />
        </div>
      )}
    </div>
  );
}
