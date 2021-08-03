import React, { useState, useContext } from "react"
import DatePicker from "react-datepicker"
import "react-datepicker/dist/react-datepicker.css"
import { NoteContext } from "../context/NoteContext"
import { NoteInstance } from "./StyledComponents"


function NoteCard(props) {
	const [resultsMode, setResultsMode] = useState(true)
	const { title, note, dateReminder, key, id } = props
	const { changeNote, deleteNote } = useContext(NoteContext)
	const dateReminderObject = new Date(dateReminder)
	const [dueDate, setDueDate] = useState(dateReminderObject)
	const toggleResultsMode = () => setResultsMode(!resultsMode)

	const [modifiedNote, setModifiedNote] = useState({
		title: title,
		note: note,
		dueBy: dueDate,
		_id: id,
	})

	const handleEditChange = e => {
		const { name, value } = e.target
		setModifiedNote(prevState => ({
			...prevState,
			[name]: value,
		}))
	}

	const saveEdit = e => {
		e.preventDefault()
		changeNote(modifiedNote)
		toggleResultsMode()
	}

	return (
		<NoteInstance key={key}>
			{resultsMode ? (
				<div>
					<section>
						<p className="label">Title: <p>{title}</p></p>
						<p className="label">Reminder: <p>{dateReminderObject.toDateString()}</p></p>
					</section>
					<p className="label">Note: <p>{note}</p></p>
				</div>
			) : (
				<div>
					<section>
						<p className="label">Title: <p>
							<input onChange={handleEditChange} type="text" name="title" value={modifiedNote.title} />
						</p></p>
						<p className="label">
							Reminder:{" "}<p>
							<DatePicker
								selected={dueDate}
								onChange={date => setDueDate(date)}
							/></p>
						</p>
					</section>
					<p className="label">Note: <p>
						<textarea onChange={handleEditChange} type="text" name="note" value={modifiedNote.note} />
					</p></p>
				</div>
			)}
			<div
				style={{
					display: "flex",
					flexDirection: "row",
					justifyContent: "space-between",
				}}>
				<div>
					<button type="button" onClick={toggleResultsMode}>
						{resultsMode ? "Edit" : "Cancel"}
					</button>
					{!resultsMode && (
						<button type="button" onClick={saveEdit}>
							Save
						</button>
					)}
				</div>
				<button type="button" onClick={() => deleteNote(id)}>
					Delete
				</button>
			</div>
		</NoteInstance>
	)
}

export default NoteCard
