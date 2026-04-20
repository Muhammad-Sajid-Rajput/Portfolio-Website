import { useMemo } from "react";
import { AppContext } from "./AppContextCreate";

export { AppContext };

export function AppProvider({
  children,
  socialLinks = [],
  contactInfo = {},
  siteMeta = {},
}) {
  const value = useMemo(
    () => ({
      socialLinks,
      contactInfo,
      siteMeta,
    }),
    [socialLinks, contactInfo, siteMeta],
  );

  return <AppContext.Provider value={value}>{children}</AppContext.Provider>;
}
