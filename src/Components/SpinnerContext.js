import { createContext, useState } from "react";
import { LoadingSpinner } from "./LoadingSpinner";

export const SpinnerContext = createContext(null);

const SpinnerContextProvider = ({ children }) => {
  const [loading, setLoading] = useState(true);
  return (
    <SpinnerContext.Provider
      value={{
        loading,
        setLoading,
      }}
    >
      {loading && <LoadingSpinner />}
      {children}
    </SpinnerContext.Provider>
  );
};

export default SpinnerContextProvider;
