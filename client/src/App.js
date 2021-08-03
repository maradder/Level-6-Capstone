import React, { useContext, useEffect } from "react"
import Bookmarks from "./components/Bookmarks"
import Notes from "./components/Notes"
import KanBan from "./components/KanBan"
import Calendar from "./components/Calendar"
import GitHub from "./components/GitHub"
import Authentication from "./components/Authentication"
import { UserContext } from "./context/UserContext"
import { KanbanContext } from "./context/KanbanContext"
import { NoteContext } from "./context/NoteContext"
import { BookmarkContext } from "./context/BookmarkContext"
import {
	GitNotes,
	Workbench
} from "./components/StyledComponents"



function App() {
	const { token } = useContext( UserContext )
	const { getBookmarks } = useContext( BookmarkContext )
	const { getTodos } = useContext( KanbanContext )
	const { getNotes } = useContext( NoteContext )


	useEffect( () => {
		getBookmarks()
		getTodos()
		getNotes()
	}, [token] )

	return (
		<Workbench className="App">
			{token ? (
				<>
					<Bookmarks id="bookmarkComp" idmodal="bookmarkModal" />
					<KanBan id="kanbanComp" />
					<Calendar id="calendarComp" />
					<GitNotes id="gitNotesComp">
						<Notes id="notesComp" />
						<GitHub id="githubComp" />
					</GitNotes>
				</>
			) : (
				<Authentication id="authComp" />
			)}
		</Workbench>
	)
}

export default App
