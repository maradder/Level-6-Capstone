import React, { useState, useContext, useEffect, createContext } from "react"
import userAxios from "./userAxios"

const NoteContext = createContext()

const NoteContextProvider = props => {
	const [notesArray, setNotesArray] = useState([])

	const getNotes = () => {
		userAxios.get("/api/note").then(res => {
			setNotesArray(prevState => [...res.data])
		})
	}

	useEffect(() => {
		getNotes()
	}, [])

	const saveNote = newNote => {
		userAxios.post("/api/note", newNote).then(res => {
			setNotesArray(prevState => [res.data, ...prevState])
		})
	}

	const changeNote = note => {
		const noteIndex = notesArray.findIndex(
			existingNote => existingNote._id === note._id
		)
		const existingNote = notesArray[noteIndex]
		userAxios
			.put(`/api/note/${note._id}`, note)
			.then(res => {
				const updatedNote = Object.assign(existingNote, res.data)
				setNotesArray(prevState => [
					...prevState.slice(0, noteIndex),
					updatedNote,
					...prevState.slice(noteIndex + 1),
				])
			})
			.catch(err => alert(err.response.data.errMsg))
	}

	const deleteNote = noteId => {
		userAxios.delete(`/api/note/${noteId}`).then(res => {
			const noteIndex = notesArray.findIndex(
				existingNote => existingNote._id === noteId
			)
			setNotesArray(prevState => [
				...prevState.slice(0, noteIndex),
				...prevState.slice(noteIndex + 1),
			])
		})
	}

	return (
		<NoteContext.Provider value={{ saveNote, notesArray, setNotesArray, changeNote,
            deleteNote }}>
			{props.children}
		</NoteContext.Provider>
	)
}

export { NoteContext, NoteContextProvider }
