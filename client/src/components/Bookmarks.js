import React, { useContext } from "react"
import styled from "styled-components"
import { UserContext } from "../context/UserContext"
import AddBookmark from "./AddBookmark"
import { BookmarkContext } from "../context/BookmarkContext"
import NewBookmarkForm from "./NewBookmarkForm"
import Bookmark from "./Bookmark"
import { BookmarkList } from "./StyledComponents"
import LogoutIcon from "./svg/signout.svg"

const LogoutButton = styled.img`
	height: 50px;
	width: 50px;
	margin: auto 0;
	filter: drop-shadow(rgb(0, 0, 0) 0.1rem 0.1rem 0.4rem);

	:hover {
		background-size: 110%;
		transition-duration: 350ms;
		filter: drop-shadow(rgb(0, 0, 0) 0.8rem 0.8rem 0.8rem);
	}

	:active {
		background-size: 110%;
		transition-duration: 350ms;
		filter: drop-shadow(rgb(0, 0, 255) 0.1rem 0.1rem 0.1rem);
	}
`

function Bookmarks(props) {
	const { logout } = useContext(UserContext)
	const { bookmarkArray, deleteBookmark, showAddBookmark } =
		useContext(BookmarkContext)

	const bookmarkList = bookmarkArray.map(bookmark => {
		return (
			<Bookmark
				site={bookmark.siteName}
				url={bookmark.url}
				img={bookmark.img}
				del={deleteBookmark}
				id={bookmark._id}
			/>
		)
	})
	return (
		<BookmarkList id={props.id}>
			<div>
				{bookmarkList}
				<AddBookmark />
				{showAddBookmark && <NewBookmarkForm idmodal={props.idmodal} />}
			</div>
			<button onClick={logout}>
				<LogoutButton src={LogoutIcon} onClick={logout} alt="Log Out" />
			</button>
		</BookmarkList>
	)
}

export default Bookmarks
