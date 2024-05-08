import { Route, Routes, BrowserRouter } from "react-router-dom";
import { routes } from "../constants/routes-constants";
import Home from "../pages/home";
import Global from "../pages/global";

function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path={routes.global} element={<Global />}>
          <Route path={routes.home} element={<Home />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
export default Router;
