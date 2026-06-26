/**
 * Custom hook to consume AppContext.
 * Throws if used outside of AppProvider.
 */

import { useContext } from "react";
import { AppContext } from "../context/AppContext";

export function useAppContext() {
  const context = useContext(AppContext);
  return context;
}

export default useAppContext;
