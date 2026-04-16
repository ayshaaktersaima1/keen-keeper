import React, { createContext, useContext } from 'react';
import { FriendsContext } from './FriendsContextProvider';

export const TimelineContext = createContext();

const TimelineContextProvider = ({ children }) => {

    const { checkIns } = useContext(FriendsContext);

    const timelineTypeCount = {
        callTypeCount: checkIns.filter(checkIn => checkIn.type === 'Call').length,
        textTypeCount: checkIns.filter(checkIn => checkIn.type === 'Text').length,
        videoTypeCount: checkIns.filter(checkIn => checkIn.type === 'Video').length,
    }

    return <TimelineContext.Provider value={{ timelineTypeCount }}>{children}</TimelineContext.Provider>;

};

export default TimelineContextProvider;