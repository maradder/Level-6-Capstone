import React, { useState, useEffect, createContext } from "react"
import userAxios from "./userAxios"

const BookmarkContext = createContext()
const BookmarkContextProvider = props => {
	const [bookmarkArray, setBookmarkArray] = useState([])
	const [showAddBookmark, setShowAddBookmark] = useState(false)
	const [bookmarkError, setBookmarkError] = useState("")

	const addBookmark = newBookmark => {
		userAxios
			.post("/api/bookmark", newBookmark)
			.then(res => {
				setBookmarkArray(prevState => [...prevState, res.data])
			})
			.catch(err => alert(err.response.data.errMsg))
	}

	const getBookmarks = () => {
		userAxios
			.get("/api/bookmark")
			.then(res => setBookmarkArray(res.data))
			.catch(err => setBookmarkError(err.message))
	}

	const deleteBookmark = bookmarkId => {
		userAxios
			.delete(`/api/bookmark/${bookmarkId}`)
			.then(res => {
				const bookmarkIndex = bookmarkArray.findIndex(
					existingBookmark => existingBookmark._id === bookmarkId
				)
				setBookmarkArray(prevState => [
					...prevState.slice(0, bookmarkIndex),
					...prevState.slice(bookmarkIndex + 1),
				])
			})
			.catch(err => console.log(err))
	}

	useEffect(() => {
		getBookmarks()
	}, [])

	return (
		<BookmarkContext.Provider
			value={{
				addBookmark,
				getBookmarks,
				deleteBookmark,
				bookmarkError,
				bookmarkArray,
				setBookmarkArray,
				showAddBookmark,
				setShowAddBookmark,
			}}>
			{props.children}
		</BookmarkContext.Provider>
	)
}

export { BookmarkContext, BookmarkContextProvider }
