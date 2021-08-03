import React, {  useContext } from "react"
import { BookmarkContext } from "../context/BookmarkContext"
import plus from "./svg/plus-light.svg"
import {Add} from './StyledComponents'

function AddBookmark() {
	const { setShowAddBookmark} = useContext(BookmarkContext)

	return (
		<>
			<Add src={plus} onClick={ () => setShowAddBookmark(true)} />
		</>
	)
}

export default AddBookmark
