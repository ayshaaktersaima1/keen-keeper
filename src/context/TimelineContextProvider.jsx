import React, { createContext, useState } from 'react';

export const TimelineContext = createContext();

const TimelineContextProvider = ({ children }) => {

    const [timelineTypeCount, setTimelineTypeCount] = useState({});
    const obj = { timelineTypeCount, setTimelineTypeCount };
    return <TimelineContext.Provider value={obj}>{children}</TimelineContext.Provider>;

};

export default TimelineContextProvider;