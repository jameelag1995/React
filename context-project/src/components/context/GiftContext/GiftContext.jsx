import { createContext, useContext } from "react";

export const GiftContext = createContext({ gifts: [] });

export function GiftContextProvider({ children }) {
    const gifts = ["apple", "orange", "banana", "peach", "grapes"];
    return (
        <GiftContext.Provider value={gifts}>{children}</GiftContext.Provider>
    );
}
export const useGift = () => {
    return useContext(GiftContext);
};
