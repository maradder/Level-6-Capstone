import React, { useState, useContext } from "react"
import { BookmarkContext } from "../context/BookmarkContext"
import { BookmarkModal } from "./StyledComponents"

const NewBookmarkForm = props => {
	const { addBookmark, setShowAddBookmark } = useContext(BookmarkContext)

	const initBookmarkState = {
		siteName: "",
		url: "",
		img: "",
	}
	const [newBookmark, setNewBookmark] = useState(initBookmarkState)

	const handleChange = e => {
		const { name, value } = e.target
		setNewBookmark(prevState => ({
			...prevState,
			[name]: value,
		}))
	}

	const handleCancel = e => {
		e.preventDefault()
		setNewBookmark(initBookmarkState)
		setShowAddBookmark(false)
	}

	const handleSave = e => {
		e.preventDefault()
		addBookmark(newBookmark)
		setShowAddBookmark(false)
	}

	return (
		<BookmarkModal id={props.idmodal}>
			<form onSubmit={handleSave}>
				<h3>Add Bookmark</h3>
				<label>Site</label>
				<input
					required="true"
					type="text"
					name="siteName"
					value={newBookmark.siteName}
					onChange={handleChange}
				/>
				<label>URL</label>
				<input
					required="true"
					type="text"
					name="url"
					value={newBookmark.url}
					onChange={handleChange}
				/>
				<label>Image URL</label>
				<input
					required="true"
					type="text"
					name="img"
					value={newBookmark.img}
					onChange={handleChange}
				/>
				<section>
					<button id="saveButton" type="submit">
						Save Bookmark
					</button>
					<button
						id="cancelButton"
						type="button"
						onClick={handleCancel}>
						Cancel
					</button>
				</section>
			</form>
		</BookmarkModal>
	)
}

export default NewBookmarkForm
