import React, { createContext } from "react";
import AOS from "aos";
import "aos/dist/aos.css"; // Import AOS styles

// Create context
const AppStore = createContext();

export default function StoreStorage({ children }) {
  return <AppStore.Provider value={{}}>{children}</AppStore.Provider>;
}
export { AppStore };
