import React, { useContext } from "react"
import styled from "styled-components"
import Bookmarks from "./components/Bookmarks"
import NewBookmarkForm from "./components/NewBookmarkForm"
import Notes from "./components/Notes"
import KanBan from "./components/KanBan"
import Calendar from "./components/Calendar"
import GitHub from "./components/GitHub"
import Authentication from "./components/Authentication"
import { UserContext } from "./context/UserContext"

const Workbench = styled.div`
	display: grid;
	grid-template-rows: fit-content 55% 20%;
	grid-template-columns: 50px 1fr 1fr 1fr 1fr 50px;
	min-height: 100vh;
	min-width: 100vw;
	row-gap: 16px;
	column-gap: 10px;

	div:nth-child(1) {
		grid-row: 1/2;
		grid-column: 2/6;
	}
	div:nth-child(2) {
		grid-row: 2/3;
		grid-column: 2/6;
	}
	div:nth-child(3) {
		grid-row: 3/4;
		grid-column: 2/3;
	}
	div:nth-child(4) {
		grid-row: 3/4;
		grid-column: 3/6;

	}

`

const GitNotes = styled.div`
		width: 98.5%;
		height: fit-content;
		margin: 0 auto 0 1.5%;
		display: flex;
		flex-direction: row;
		justify-content: space-between;
`

function App() {
	const { token } = useContext(UserContext)

	return (
		<Workbench className="App">
			{token ? (
				<>
					<Bookmarks />
					<KanBan />
					<Calendar />
					<GitNotes>
						<Notes />
						<GitHub />
					</GitNotes>
				</>
			) : (
				<Authentication />
			)}
		</Workbench>
	)
}

export default App
