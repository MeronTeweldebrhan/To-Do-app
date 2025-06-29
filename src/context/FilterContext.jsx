/* eslint-disable react-refresh/only-export-components */
import { createContext, useContext, useState } from "react";

export const FilterContext = createContext();

export function FilterProvider({ children }) {
  const [filter, setFilter] = useState("all");
  return (
    <FilterContext.Provider value={{ filter, setFilter }}>
      {children}
    </FilterContext.Provider>
  );
}

export const useFilter = () => useContext(FilterContext);