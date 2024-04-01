import { useSelector } from "react-redux";
import { Route, Routes } from "react-router-dom";

import Account from "../../pages/account/account";
import Homepage from "../../pages/homepage";
import Login from "../../pages/login";
import NotFound from "../../pages/notfound";
import Register from "../../pages/register";
import { selectUser } from "../../store/user";
import DeletionConfirmation from "../deletioncomfirmation";
import JobsAlerts from "../jobalerts";
import Profile from "../profile";
import SavedJobs from "../savedjobs";
import Search from "../searchresult/joblisting";
import Setting from "../setting";

import ProtectedRoute from "./protectedroute";

function AppRouter() {
  const user = useSelector(selectUser);

  return (
    <Routes>
      <Route exact path="/" element={<Homepage />} />
      <Route exact path="login" element={<Login />} />
      <Route exact path="register" element={<Register />} />
      <Route exact path="search" element={<Search />} />
      <Route element={<ProtectedRoute isAllowed={!!user?.email} />}>
        <Route path="account" element={<Account />}>
          <Route index element={<Setting />} />
          <Route path="profile" element={<Profile />} />
          <Route path="job_alerts" element={<JobsAlerts />} />
          <Route path="saved_jobs" element={<SavedJobs />} />
          <Route
            path="deletion_confirmation"
            element={<DeletionConfirmation />}
          />
          <Route path="*" element={<NotFound />} />
        </Route>
      </Route>
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
}

export default AppRouter;