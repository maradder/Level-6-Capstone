import React, { useState, useEffect, createContext } from 'react';
import userAxios from './userAxios'


const BookmarkContext = createContext()
const BookmarkContextProvider = props => {
    const [bookmarkArray, setBookmarkArray] = useState([])
	const [showAddBookmark, setShowAddBookmark] = useState(false)


    const addBookmark = (newBookmark) => {
        userAxios.post("/api/bookmark", newBookmark)
        .then(res => {
            setBookmarkArray(prevState => ([
                ...prevState,
                res.data
            ]))
        })
    }

    const getBookmarks = () => {
        userAxios.get("/api/bookmark")
        .then(res => setBookmarkArray(res.data))
    }


    const deleteBookmark = bookmarkId => {
        userAxios.delete(`/api/bookmark/${bookmarkId}`).then(res => {
            const bookmarkIndex = bookmarkArray.findIndex(
                existingBookmark => existingBookmark._id === bookmarkId
            )
            setBookmarkArray(prevState => [
                ...prevState.slice(0, bookmarkIndex),
                ...prevState.slice(bookmarkIndex + 1),
            ])
        })
    }

    useEffect(() => {
        getBookmarks()
    }, [])

    return (
        <BookmarkContext.Provider value={{addBookmark, deleteBookmark, bookmarkArray, setBookmarkArray, showAddBookmark, setShowAddBookmark}}>
            {props.children}
        </BookmarkContext.Provider>
    )
}

export { BookmarkContext, BookmarkContextProvider }
