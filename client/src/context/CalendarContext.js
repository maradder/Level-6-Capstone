import React, { createContext } from 'react';

const CalendarContext = createContext()
const CalendarContextProvider = props => {
    return (
        <CalendarContext.Provider>
            {props.children}
        </CalendarContext.Provider>
    )
}

export { CalendarContext, CalendarContextProvider }