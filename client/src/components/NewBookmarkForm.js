import React, { useState, useContext, useEffect } from 'react'
import styled from 'styled-components'
import { BookmarkContext } from "../context/BookmarkContext"

const BookmarkModal = styled.div`
    position: absolute;
    inset: 25% 40%;
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

    form {
        display: flex;
                flex-direction: column;
                align-items: center;
                width: 100%;
                margin: auto 32px;
    }

    label, input {
        width: 100%;
    }

    input {
        margin-bottom: 16px;
    }

    button {
        border: 1px solid #121212;
        background-color: white;
        color: #121212;
        font-weight: bold;
    }
`


const NewBookmarkForm = props => {
	const { bookmarkArray, setBookmarkArray, addBookmark, showAddBookmark, setShowAddBookmark } =
		useContext(BookmarkContext)

	const [newBookmark, setNewBookmark] = useState({
		siteName: "",
		url: "",
		img: "",
	})


    const handleChange = e => {
		const { name, value } = e.target
		setNewBookmark(prevState => ({
			...prevState,
			[name]: value,
		}))
	}

	const handleSave = e => {
		e.preventDefault()
		addBookmark(newBookmark)
        setShowAddBookmark(false)
	}

    return (
        <BookmarkModal>
            
        <form
            onSubmit={handleSave}>
                <h3>Add Bookmark</h3>
            <label>Site</label>
            <input
                type="text"
                name="siteName"
                value={newBookmark.siteName}
                onChange={handleChange}
            />
            <label>URL</label>
            <input
                type="text"
                name="url"
                value={newBookmark.url}
                onChange={handleChange}
            />
            <label>Image URL</label>
            <input
                type="text"
                name="img"
                value={newBookmark.img}
                onChange={handleChange}
            />
            <button type="submit">Save Bookmark</button>
        </form>
    </BookmarkModal>
    )
}

export default NewBookmarkForm