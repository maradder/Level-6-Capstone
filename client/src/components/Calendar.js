import React from "react"
import FullCalendar from "@fullcalendar/react" // must go before plugins
import dayGridPlugin from "@fullcalendar/daygrid" // a plugin!
import { CalendarWidget } from "./StyledComponents"

function Calendar(props) {
	return (
		<CalendarWidget id={props.id}>
			<FullCalendar
				plugins={[dayGridPlugin]}
				initialView="dayGridMonth"
			/>{" "}
		</CalendarWidget>
	)
}

export default Calendar
