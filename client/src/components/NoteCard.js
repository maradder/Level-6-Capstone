import React, { useState, useContext } from "react"
import styled from "styled-components"
import DatePicker from "react-datepicker"
import "react-datepicker/dist/react-datepicker.css"
import { NoteContext } from "../context/NoteContext"

const Note = styled.div`
	height: fit-content;
	margin: 4px 24px 16px 24px;
	padding: 4px;
	max-width: 100%;
	border: 1px solid #121212;
	border-radius: 8px;
	display: flex;
	flex-direction: column;

	p {
		margin: 4px auto;
	}

	section {
		display: flex;
		flex-direction: column;
		justify-content: space-between;
	}

	label {
		display: flex;
		flex-direction: column;
	}

	textarea {
		min-width: 100%;
		max-width: 100%;
	}

	.label {
		display: flex;
		flex-direction: row;
		justify-content: space-between;
		min-width: 100%;
		font-weight: bold;
	}
	
`

function NoteCard(props) {
	const [resultsMode, setResultsMode] = useState(true)
	const { title, note, dateReminder, key, id } = props
	const { changeNote, deleteNote } = useContext(NoteContext)
	const dateReminderObject = new Date(dateReminder)
	const today = new Date()
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
		<Note key={key}>
			{resultsMode ? (
				<div>
					<section>
						<p className="label">Title: <p>{title}</p></p>
						{/* <p className="label"><p>{today.toDateString()}</p></p> */}
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
		</Note>
	)
}

export default NoteCard
