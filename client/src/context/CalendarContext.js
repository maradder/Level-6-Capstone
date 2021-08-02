import React, { useState, createContext } from 'react';
import userAxios from './userAxios'



const CalendarContext = createContext()
const CalendarContextProvider = props => {
    return (
        <CalendarContext.Provider>
            {props.children}
        </CalendarContext.Provider>
    )
}

export { CalendarContext, CalendarContextProvider }