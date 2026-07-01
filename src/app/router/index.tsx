import { BrowserRouter, Route, Routes } from "react-router-dom";
import Layout from "../../components/Layout";
import Issues from "../../pages/Issues";

function AppRouter() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<Issues />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default AppRouter;
