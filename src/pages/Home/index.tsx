import { useEffect, useState } from "react";
import { useHeader } from "../../components/Layout/hooks/useHeader";
import IssuesTable from "../../components/issue/issueTable/IssuesTable";
import useMediaQuery from "@mui/material/useMediaQuery";
import { useTheme } from "@mui/material/styles";
import IssueCardList from "../../components/issue/issueCard/IssueCardList";
import useGetIssues from "../../services/issue/hooks/useGetIssues";
import AppState from "../../components/AppState/AppState";

export default function Home() {
  const { setHeaderConfig } = useHeader();
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));

  // pagination state
  const [page, setPage] = useState(0);
  const [pageSize, setPageSize] = useState(10);

  const { data, isPending, isError, error } = useGetIssues({
    page: page + 1,
    pageSize,
  });

  console.log("API data =>", data);
  console.log("data.data =>", data?.data);

  useEffect(() => {
    setHeaderConfig({
      title: "Issue Tracker",
      showBack: false,
    });
  }, []);

  const isEmpty = data && data.data.length === 0;

  if (isPending || isError || isEmpty) {
    return <AppState isLoading={isPending} error={error} empty={isEmpty} />;
  }

  return (
    <div>
      {isMobile ? (
        <IssueCardList issues={data.data} />
      ) : (
        <IssuesTable
          issues={data.data ?? []}
          count={data.items}
          page={page}
          pageSize={pageSize}
          onPageChange={setPage}
          onPageSizeChange={setPageSize}
        />
      )}
    </div>
  );
}
