import React, { createContext, useState } from "react";


const SearchContext = createContext();

const SearchProvider = ({ children }) => {
    const [isSearchOpen, setIsSearchOpen] = useState(false)

    let data = {
        isSearchOpen,
        setIsSearchOpen
    }
    return (
      <SearchContext.Provider value={data}>
        {children}
      </SearchContext.Provider>
    );
  };

  export { SearchContext, SearchProvider };