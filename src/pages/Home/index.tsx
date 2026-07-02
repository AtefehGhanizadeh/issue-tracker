import { useEffect } from "react";
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
  const { data, isPending, isError, error } = useGetIssues();

  useEffect(() => {
    setHeaderConfig({
      title: "Issue Tracker",
      showBack: false,
    });
  }, []);

  const isEmpty = data && !data.length ? true : false;

  if (isPending || isError || isEmpty) {
    return <AppState isLoading={isPending} error={error} empty={isEmpty} />;
  }

  if (data && data.length) {
    return (
      <div>
        {isMobile ? (
          <IssueCardList issues={data} />
        ) : (
          <IssuesTable issues={data} />
        )}
      </div>
    );
  }
}
