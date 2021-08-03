import React, { useState, useContext, useEffect } from "react"
import DatePicker from "react-datepicker"
import "react-datepicker/dist/react-datepicker.css"
import { NoteContext } from "../context/NoteContext"
import { NewNote } from "./StyledComponents"


function NoteEntry(props) {
    const { saveNote } = useContext( NoteContext )
    const toggleAddNote = props.toggle
    const initNote = {
        title: "",
        dateReminder: "dueDate",
        note: "",
    }
    const [newNote, setNewNote] = useState( initNote )  
    const [dueDate, setDueDate] = useState( new Date() )

    const handleChange = e => {
        const { name, value } = e.target
        setNewNote( prevState => ( {
            ...prevState,
            [name]: value
        } ) )
    }

    const handleCancel = e => {
		e.preventDefault()
		setNewNote(initNote)
		toggleAddNote()
	}

    useEffect( () => {
        setNewNote( prevState => ( {
            ...prevState,
            dateReminder: dueDate,
        } ) )
    }, [dueDate] )

    return (
        <NewNote>
            <section>
                <label>
                    Note Title:{" "}
                    <input required="true" name="title" value={newNote.title} onChange={handleChange} type="text" />
                </label>
                <label>
                    Remind me on:{" "}
                    <DatePicker
                        selected={dueDate}
                        onChange={date => setDueDate( date )}
                    />
                </label>
            </section>
            <label>
                Note: <textarea required="true" name="note" value={newNote.note} onChange={handleChange} />
            </label>
            <section>
				<button id="saveTaskButton" onClick={() => saveNote( newNote )}>
					Save Bookmark
				</button>
				<button
					id="cancelTaskButton"
					type="button"
					onClick={handleCancel}>
					Cancel
				</button>
			</section>
        </NewNote>
    )
}

export default NoteEntry
