import { useEffect } from "react";
import { useHeader } from "../../components/Layout/hooks/useHeader";

const Issues = () => {
  const { setHeaderConfig } = useHeader();

  useEffect(() => {
    setHeaderConfig({
      title: "Issue Tracker",
      showBack: false,
    });
  }, []);

  return <div>Issues</div>;
};

export default Issues;
