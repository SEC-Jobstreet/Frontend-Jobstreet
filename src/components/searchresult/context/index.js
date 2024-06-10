import React from "react";
import { useSelector } from "react-redux";

import { getSavedJob } from "../../../services/api";
import { selectUser } from "../../../store/user";

const StateContext = React.createContext();

function StateProvider({ children }) {
  const [savedJobs, setSaveJobs] = React.useState([]);

  const user = useSelector(selectUser);

  const contextValue = React.useMemo(
    () => ({ savedJobs, setSaveJobs }),
    [savedJobs, setSaveJobs]
  );

  React.useEffect(() => {
    const loadSavedJobs = async () => {
      if (user?.email) {
        // logged in
        const respone = await getSavedJob();
        if (respone.status === 200) {
          console.log(respone);
          if (respone.data.jobs === null) {
            setSaveJobs([]);
          } else {
            setSaveJobs(respone.data.jobs.map((item) => item.id));
          }
        }
      }
    };
    loadSavedJobs();
  }, []);

  return (
    <StateContext.Provider value={contextValue}>
      {children}
    </StateContext.Provider>
  );
}

const useJobsState = () => React.useContext(StateContext);

export { StateProvider, useJobsState };
