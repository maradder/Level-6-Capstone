import React, { useContext, useState } from "react"
import styled from "styled-components"
import { NoteContext } from "../context/NoteContext"
import NoteCard from "./NoteCard"
import NoteEntry from "./NoteEntry"
import { WidgetHeader } from "./GlobalComponents"
import plus from './svg/plus-light.svg'


const NotePad = styled.div`
	height: 41vh;
	width: 50%;
	border: 1px solid #121212;
	border-radius: 8px;
	background-color: #f3f6f9;
overflow-y: scroll;

	@media screen and (max-width: 1160px) {
		height: fit-content;
		width: 100%;
		margin-bottom: 50px;
		overflow-y: none;
	}
`
function Notes() {
	const [showAddNote, setShowAddNote] = useState(false)
	const { notesArray } = useContext(NoteContext)

	const toggleAddNote = () => setShowAddNote(!showAddNote)
	return (
		<NotePad>
			<WidgetHeader className="cardHeader">
				<h5>Notes</h5>{" "}
				<button
					onClick={toggleAddNote}
					style={{
						border: "none",
						backgroundColor: "transparent",
						minWidth: "fit-content",
						minHeight: "fit-content",
						maxWidth: "fit-content",
						maxHeight: "fit-content",
					}}>
					<i className="fas fa-plus"/>
				</button>
			</WidgetHeader>
			{showAddNote && <NoteEntry />}
			{notesArray.map((note, index) => {
				return (
					<NoteCard
						key={index}
						title={note.title}
						note={note.note}
						dateReminder={note.dateReminder}
						id={note._id}
					/>
				)
			})}
		</NotePad>
	)
}

export default Notes
