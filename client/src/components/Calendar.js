import React from 'react';
import styled from "styled-components"
import FullCalendar from '@fullcalendar/react' // must go before plugins
import dayGridPlugin from '@fullcalendar/daygrid' // a plugin!

function Calendar() {
    const CalendarWidget = styled.div`
    height: fit-content;
    width: 20vw;
    border: 1px solid #121212;
    border-radius: 8px;
    min-width: 300px;
    background-color: #f3f6f9;

    @media screen and (max-width: 1160px) {
            width: 100vw;
        }

    `
    return (
        <CalendarWidget>
<FullCalendar
        plugins={[ dayGridPlugin ]}
        initialView="dayGridMonth"
      />        </CalendarWidget>
    )
}

export default Calendar

