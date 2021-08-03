import styled from "styled-components"

//////////////////////////////////////////////////////////////
////////////////////    APP.js    ////////////////////////////
//////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////

export const GitNotes = styled.div`
	width: 98.5%;
	height: fit-content;
	margin: 0 auto 0 1.5%;
	display: flex;
	flex-direction: row;
	justify-content: space-between;
	grid-row: 3/4;
	grid-column: 3/6;
	@media only screen and (max-width: 1100px) {
		grid-row: 4;
		grid-column: 1/2;
		flex-direction: column;
		margin: 0 auto 72px auto;
		width: 95vw;
	}
`
export const Workbench = styled.div`
	position: absolute;
	display: grid;
	grid-template-rows: fit-content 55% 20%;
	grid-template-columns: 50px 1fr 1fr 1fr 1fr 50px;
	min-height: 100vh;
	min-width: 100vw;
	row-gap: 16px;
	column-gap: 10px;

	/* div:nth-child(1) { */
	#bookmarkComp {
		grid-row: 1/2;
		grid-column: 2/6;
	}
	#kanbanComp {
		grid-row: 2/3;
		grid-column: 2/6;
	}
	#calendarComp {
		grid-row: 3/4;
		grid-column: 2/3;
	}
	#gitNotesComp {
		grid-row: 3/4;
		grid-column: 3/6;
	}

	#authComp {
		grid-row: 1;
		grid-column: 3/5;
	}

	#bookmarkModal {
		grid-row: 1;
		grid-column: 3/5;
	}

	@media only screen and (max-width: 1100px) {
		display: grid;
		grid-template-rows: repeat(auto, 1fr);
		grid-template-columns: 100vw;
		min-height: 100vh;
		min-width: 100vw;
		max-width: 100vw;
		row-gap: 16px;
		column-gap: 0px;

		/* div:nth-child(1) { */
		#bookmarkComp {
			grid-row: 1;
			grid-column: 1/2;
		}
		#kanbanComp {
			grid-row: 2;
			grid-column: 1/2;
		}
		#calendarComp {
			grid-row: 3;
			grid-column: 1/2;
		}
		#gitNotesComp {
			grid-row: 4;
			grid-column: 1/2;
			flex-direction: column;
		}

		#authComp {
			grid-column: 1/2;
		}

		#bookmarkModal {
			grid-column: 1/2;
		}
	}
`
//////////////////////////////////////////////////////////////
//////////////////////    Auth    ////////////////////////////
//////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////

export const Auth = styled.div`
	position: relative;
	display: flex;
	flex-direction: column;
	height: 300px;
	width: 300px;
	border: 1px solid #121212;
	border-radius: 8px;
	background-color: #ffffffab;
	padding: 16px 24px;
	margin: auto;

	section {
		display: flex;
		flex-direction: row;
		width: 100%;
		justify-content: space-between;
	}
`

export const AuthLogin = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
`

export const AuthForm = styled.form`
	display: flex;
	flex-direction: column;
	align-items: center;
	width: 100%;
	height: 100%;
	input {
		margin-bottom: 16px;
		width: 100%;
	}

	label {
		width: 100%;
		display: flex;
		flex-direction: row;
		justify-content: space-between;
	}

	#cancelLoginButton,
	#cancelSignupButton {
		background-color: transparent;
		border: 1px solid #c4c4c4;
	}

	#cancelLoginButton:hover,
	#cancelSignupButton:hover {
		background-color: #c4c4c4;
		border: 1px solid #121212;
	}

	#loginButton:hover,
	#signupButton:hover {
		background-color: #fafafa;
		border: 1px solid #121212;
	}
`

export const HelpText = styled.p`
	position: absolute;
	bottom: 36px;

	span {
		color: green;
		font-weight: 400;
		border-bottom: 2px solid #00000000;
	}

	span:hover {
		cursor: pointer;
		border-bottom: 2px solid #000000ff;
		transition-duration: 500ms;
	}
`

//////////////////////////////////////////////////////////////
////////////////////    Bookmarks    /////////////////////////
//////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////

export const Add = styled.img`
	height: 75px;
	width: 75px;
	margin: auto 0;
	filter: drop-shadow(rgb(0, 0, 0) 0.1rem 0.1rem 0.4rem);
	animation-duration: 50ms;

	:hover {
		background-size: 110%;
		transition-duration: 700ms;
		filter: drop-shadow(rgb(0, 0, 0) 0.8rem 0.8rem 0.8rem);
		transform: rotateZ(90deg);
		animation-duration: 50ms;
	}

	:active {
		background-size: 110%;
		transition-duration: 700ms;
		filter: drop-shadow(rgb(0, 0, 255) 0.1rem 0.1rem 0.1rem);
		transform: rotateZ(90deg);
		animation-duration: 5ms;
	}
`

export const BookmarkList = styled.div`
	display: flex;
	justify-content: space-between;
	align-items: center;
	min-width: 100%;
	max-width: 100%;

	div {
		display: flex;
		flex-direction: row;
	}

	button {
		background-color: transparent;
		outline: none;
		border: none;
		width: fit-content;
		height: fit-content;
	}

	@media screen and (max-width: 1100px) {
		max-width: 95vw;
		min-width: 95vw;
		margin: 12px 12px;
		flex-wrap: wrap;
	}
`

export const BookmarkModal = styled.div`
	position: absolute;
	top: 125px;
	left: 250px;
	z-index: 3;
	height: 400px;
	width: 400px;
	display: flex;
	flex-direction: column;
	align-items: center;
	background-color: #07305ddd;
	border-radius: 8px;
	border: 1px solid #121212;
	box-shadow: 0.2rem 0.2rem 0.4rem #000000;
	color: white;
	margin: auto;
	align-self: center;
	justify-self: center;

	form {
		display: flex;
		flex-direction: column;
		align-items: center;
		width: 100%;
		margin: auto 32px;
	}

	label,
	input {
		width: 100%;
	}

	input {
		margin-bottom: 16px;
	}

	form > section {
		width: 100%;
		display: flex;
		flex-direction: row;
		justify-content: space-between;
	}

	form > section > #saveButton {
		border: 1px solid #121212;
		background-color: white;
		color: #121212;
		font-weight: bold;
	}

	form > section > #cancelButton {
		border: 1px solid white;
		background-color: transparent;
		color: white;
		font-weight: normal;
	}
`

export const BookmarkTile = styled.div`
	position: relative;
	height: 75px;
	width: 75px;
	border-radius: 8px;
	border: 1px solid #121212;
	box-shadow: 0.2rem 0.2rem 0.4rem #000000;
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	background-color: #f3f6f9;
	margin: auto 16px auto 0;

	:hover {
		transform: scaleY(1.0125);
		transform: scaleX(1.0125);
		border-color: #ffffff;
		box-shadow: 0.1rem 0.1rem 0.8rem 0.6rem #ccff00f6;
		cursor: pointer;
	}

	a {
		position: absolute;
		border-radius: 8px;
		font-size: 24px;
		font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto,
			Oxygen, Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
		text-decoration-line: none;
		color: #121212;
		text-transform: capitalize;
		background: radial-gradient(
			circle,
			rgba(247, 255, 249, 1) 0%,
			rgba(255, 255, 255, 0) 100%
		);
	}

	img {
		height: 80%;
		width: 80%;
	}
`

//////////////////////////////////////////////////////////////
////////////////////    Calendar    //////////////////////////
//////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////

export const CalendarWidget = styled.div`
	height: fit-content;
	width: 20vw;
	border: 1px solid #121212;
	border-radius: 8px;
	min-width: 300px;
	background-color: #f3f6f9;

	@media screen and (max-width: 1160px) {
		width: 95vw;
		margin: auto;
	}
`

//////////////////////////////////////////////////////////////
////////////////////    Github    ////////////////////////////
//////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////

export const GitHubWidget = styled.div`
	height: 41vh;
	width: 45%;
	border: 1px solid #121212;
	border-radius: 8px;
	overflow-y: scroll;
	background-color: #f3f6f9;
	min-width: 300px;

	@media screen and (max-width: 1160px) {
		height: 75vw;
		width: 100%;
		overflow-y: scroll;
	}

	img:hover {
		cursor: pointer;
	}
`

export const Event = styled.div`
	height: fit-content;
	margin: 4px 24px 16px 24px;
	padding: 4px;
	width: auto;
	min-width: 300px;
	border: 1px solid #121212;
	border-radius: 8px;

	.content {
		margin: 4px 0;
	}

	section {
		display: flex;
		flex-direction: row;
		width: 30%;
		justify-content: space-between;
	}

	input[type="checkbox"] {
		position: relative;
		top: -16px;
		opacity: 0;
	}

	i :hover {
		cursor: pointer;
	}

	.label {
		display: flex;
		flex-direction: row;
		justify-content: space-between;
		min-width: 100%;
		font-weight: bold;
		margin-bottom: 8px;
	}

	span {
		display: flex;
		flex-direction: column;
	}

	.commits {
		min-width: 100%;
		display: flex;
		flex-direction: row;
		justify-content: space-between;
		align-items: top;
	}
	.commitContent {
		margin: 8px 0;
		text-align: right;
		width: 100%;
	}
`

//////////////////////////////////////////////////////////////
////////////////////    Kanbans   ////////////////////////////
//////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////

export const KanBans = styled.div`
	height: fit-content;
	width: 100%;
	display: flex;
	flex-direction: row;
	justify-content: space-between;
	overflow-x: scroll;
	column-gap: 45px;

	button :hover {
		cursor: pointer;
	}

	@media only screen and (max-width: 800px) {
		flex-direction: column;
		justify-content: initial;
		align-items: center;
		overflow-x: hidden;
		column-gap: 0px;
		row-gap: 45px;
		margin: auto;
	}
`

export const KanBanSection = styled.div`
	height: 40vh;
	min-height: fit-content;
	min-width: 375px;
	max-width: fit-content;
	border: 1px solid #121212;
	border-radius: 8px;
	background-color: #f3f6f9;
	display: flex;
	flex-direction: column;
	justify-content: inherit;
	align-items: center;
	overflow-y: scroll;

	img {
		max-height: 32px;
		min-height: 32px;
		width: auto;
		margin: 0;
	}

	@media only screen and (max-width: 800px) {
		height: fit-content;
		min-width: 95vw;
		max-width: 95vw;
	}
`

export const Task = styled.form`
	min-height: fit-content;
	margin: 4px 18px 16px 18px;
	padding: 4px;
	width: 95%;
	min-width: fit-content;
	border: 1px solid #121212;
	border-radius: 8px;

	section {
		display: flex;
		flex-direction: row;
		width: 100%;
		justify-content: space-between;
	}

	input {
		margin-bottom: 16px;
	}

`

export const Todo = styled.div`
	display: flex;
	flex-direction: column;
	height: fit-content;
	margin: 4px 24px 16px 24px;
	padding: 4px;
	width: 95%;
	min-width: 300px;
	border: 1px solid #121212;
	border-radius: 8px;

	.content {
		margin: 4px 0;
	}

	section {
		display: flex;
		flex-direction: row;
		width: 30%;
		justify-content: space-between;
	}

	input[type="checkbox"] {
		position: relative;
		top: -16px;
		opacity: 0;
	}

	i :hover {
		cursor: pointer;
	}

	.label {
		display: flex;
		flex-direction: row;
		justify-content: space-between;
		min-width: 100%;
		font-weight: bold;
	}
`

//////////////////////////////////////////////////////////////
/////////////////////    Notes    ////////////////////////////
//////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////

export const NoteInstance = styled.div`
	height: fit-content;
	margin: 4px 24px 16px 24px;
	padding: 4px;
	width: 95%;
	border: 1px solid #121212;
	border-radius: 8px;
	display: flex;
	flex-direction: column;

	p {
		margin: 4px;
	}

	section {
		width: 100%;
		display: flex;
		flex-direction: column;
		justify-content: space-between;
	}

	textarea {
		min-width: 100%;
		max-width: 100%;
	}

	.label {
		display: flex;
		flex-direction: row;
		justify-content: space-between;
		width: 100%;
		font-weight: bold;
	}
`

export const NewNote = styled(Task)`
textarea {
	margin-bottom: 16px;
}
`

export const NotePad = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	height: 41vh;
	width: 50%;
	border: 1px solid #121212;
	border-radius: 8px;
	background-color: #f3f6f9;
	overflow-y: scroll;

	img {
		max-height: 32px;
		min-height: 32px;
		width: auto;
		margin: 0;
	}

	@media screen and (max-width: 1160px) {
		height: fit-content;
		width: 100%;
		margin-bottom: 50px;
		overflow-y: none;
	}
`
