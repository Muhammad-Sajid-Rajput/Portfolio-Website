/**
 * Custom hook to consume AppContext
 * Provides easy access to global app data with error handling
 */

import { useContext } from "react";
import { AppContext } from "../context/AppContext";

export function useAppContext() {
  const context = useContext(AppContext);

  if (!context) {
    throw new Error("useAppContext must be used within AppProvider");
  }

  return context;
}

export default useAppContext;
