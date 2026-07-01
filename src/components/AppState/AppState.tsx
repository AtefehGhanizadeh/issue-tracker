import EmptyState from "./EmptyState";
import Error from "./Error";
import Loading from "./Loading";

type Props = {
  isLoading: boolean;
  error: any;
  empty: boolean;
};

export default function AppState({ isLoading, error, empty }: Props) {
  if (isLoading) return <Loading />;

  if (error) return <Error />;

  if (empty) return <EmptyState />;

  return null;
}
