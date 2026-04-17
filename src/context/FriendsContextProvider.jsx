import React, { useState } from 'react';
import { FriendsContext } from './FriendsContext';


const FriendsContextProvider = ({ children }) => {

    const [checkIns, setCheckIns] = useState([]);
    const obj = { checkIns, setCheckIns };

    return <FriendsContext.Provider value={obj}>{children}</FriendsContext.Provider>
};

export default FriendsContextProvider;