import React, { useState, useContext, useEffect } from "react"
import styled from "styled-components"
import DatePicker from "react-datepicker"
import "react-datepicker/dist/react-datepicker.css"
import axios from "axios"
import { NoteContext } from "../context/NoteContext"

const Note = styled.div`
	height: fit-content;
	margin: 4px 24px 16px 24px;
	padding: 4px;
	width: auto;
	border: 1px solid #121212;
	border-radius: 8px;

	p {
		margin: 4px auto;
	}

	section {
		display: flex;
		flex-direction: row;
		width: 100%;
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
`
function NoteEntry() {
    const { saveNote } = useContext( NoteContext )
    const [newNote, setNewNote] = useState( {
        title: "",
        dateReminder: "dueDate",
        note: "",
    } )
    const [dueDate, setDueDate] = useState( new Date() )

    const handleChange = e => {
        const { name, value } = e.target
        setNewNote( prevState => ( {
            ...prevState,
            [name]: value
        } ) )
    }

    useEffect( () => {
        setNewNote( prevState => ( {
            ...prevState,
            dateReminder: dueDate,
        } ) )
    }, [dueDate] )

    return (
        <Note>
            <section>
                <label>
                    Note Title:{" "}
                    <input name="title" value={newNote.title} onChange={handleChange} type="text" />
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
                Note: <textarea name="note" value={newNote.note} onChange={handleChange} />
            </label>
            <button onClick={() => saveNote( newNote )}>Save Note</button>
        </Note>
    )
}

export default NoteEntry
