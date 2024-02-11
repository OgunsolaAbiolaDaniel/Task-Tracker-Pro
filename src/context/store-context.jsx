import { createContext } from "react";

export const StoreContext = createContext(null);

export default function StoreContextProvider({ children }) {
  return <StoreContext.Provider value="uere">{children}</StoreContext.Provider>;
}