import { BrowserRouter, Route, Routes } from "react-router-dom";
import Layout from "../../components/Layout";
import Home from "../../pages/Home";
import IssueDetailsPage from "../../pages/IssueDetailsPage";
import CreateIssuePage from "../../pages/CreateIssuePage";
import EditIssuePage from "../../pages/EditIssuePage";
import NotFound from "../../pages/NotFound";

function AppRouter() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<Home />} />
          <Route path="/issues/:id" element={<IssueDetailsPage />} />
          <Route path="/new-issue" element={<CreateIssuePage />} />
          <Route path="/issues/:id/edit" element={<EditIssuePage />} />
        </Route>
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
}

export default AppRouter;
