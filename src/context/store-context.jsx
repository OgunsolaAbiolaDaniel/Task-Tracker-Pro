import { createContext, useContext, useState } from "react";
import {DefaultData} from './DefaultData.js'
export const StoreContext = createContext(null);

export default function StoreContextProvider({ children }) {
    const [mainState, setMainState] = useState(DefaultData);
  return <StoreContext.Provider value={[mainState, setMainState]}>{children}</StoreContext.Provider>;
}

export function useStoreContext() {
    const context = useContext(StoreContext);
    if (!context) {
        throw new Error('useStoreContext must be used withthin StoreContextProvider');
    }
    return context;
}