import React, { createContext, useContext, useState } from "react";

const initialValues = {
  requisitionDetails: {
    gender: "",
    noOfOpenings: 0,
    requisitionTitle: "",
    urgency: "",
  },
  jobDetails: {
    jobDetails: "",
    jobLocation: "",
    jobTitle: "",
  },
  interviewSettings: {
    interviewDuration: "",
    interviewLanguage: "",
    interviewMode: "",
  },
};

const DataContext = createContext<
  | {
      state: typeof initialValues;
      setState: React.Dispatch<React.SetStateAction<typeof initialValues>>;
    }
  | undefined
>(undefined);

const DataProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [state, setState] = useState(initialValues);

  return (
    <DataContext.Provider value={{ state, setState }}>
      {children}
    </DataContext.Provider>
  );
};

export const useData = () => {
  const context = useContext(DataContext);
  if (!context)
    throw Error("useAuthContext can only be used inside an AuthProvider");
  return context;
};

export default DataProvider;
