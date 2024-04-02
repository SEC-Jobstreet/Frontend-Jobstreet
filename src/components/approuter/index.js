import { Route, Routes } from "react-router-dom";

import Account from "../../pages/account/account";
import Homepage from "../../pages/homepage";
import Login from "../../pages/login/login";
import NotFound from "../../pages/notfound";
import Register from "../../pages/register/register";
import DeletionConfirmation from "../deletioncomfirmation";
import JobsAlerts from "../jobalerts";
import MyAccount from "../myaccount/myaccount";
import Profile from "../profile";
import SavedJobs from "../savedjobs";
import Search from "../searchresult/joblisting";
import Setting from "../setting";

function AppRouter() {
  return (
    <Routes>
      <Route path="/" element={<Homepage />} />
      <Route path="login" element={<Login />} />
      <Route path="register" element={<Register />} />
      <Route path="search" element={<Search />} />
      <Route path="account/profile" element={<MyAccount />} />
      <Route>
        <Route path="account" element={<Account />}>
          <Route index element={<Setting />} />
          <Route path="profile" element={<Profile />} />
          <Route path="job_alerts" element={<JobsAlerts />} />
          <Route path="saved_jobs" element={<SavedJobs />} />
          <Route
            path="deletion_confirmation"
            element={<DeletionConfirmation />}
          />
        </Route>
      </Route>
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
}

export default AppRouter;
