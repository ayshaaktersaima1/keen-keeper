import React, { createContext, useState } from 'react';

export const FriendsContext = createContext();

const FriendsContextProvider = ({ children }) => {

    const [checkIns, setCheckIns] = useState([]);
    const obj = { checkIns, setCheckIns };

    return <FriendsContext.Provider value={obj}>{children}</FriendsContext.Provider>
};

export default FriendsContextProvider;