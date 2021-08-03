import React, { useContext, useState } from "react"
import { NoteContext } from "../context/NoteContext"
import NoteCard from "./NoteCard"
import NoteEntry from "./NoteEntry"
import { WidgetHeader } from "./GlobalComponents"
import { NotePad } from "./StyledComponents"
import plus from "./svg/plus-light.svg"


function Notes(props) {
	const [showAddNote, setShowAddNote] = useState(false)
	const { notesArray } = useContext(NoteContext)

	const toggleAddNote = () => setShowAddNote(!showAddNote)
	return (
		<NotePad id={props.id}>
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
							<img src={plus} alt="Add new task"/>
						</button>
			</WidgetHeader>
			{showAddNote && <NoteEntry toggle={toggleAddNote}/>}
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
