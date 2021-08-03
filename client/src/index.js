import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { UserContextProvider } from "./context/UserContext"
import { CalendarContextProvider } from "./context/CalendarContext"
import { KanbanContextProvider } from "./context/KanbanContext"
import { NoteContextProvider } from "./context/NoteContext"
import { BookmarkContextProvider } from "./context/BookmarkContext"


ReactDOM.render(
  <React.StrictMode>
    <UserContextProvider >
      <CalendarContextProvider >
        <KanbanContextProvider>
          <NoteContextProvider>
            <BookmarkContextProvider>
              <App />
            </BookmarkContextProvider>
          </NoteContextProvider>
        </KanbanContextProvider>
      </CalendarContextProvider>
    </UserContextProvider>
  </React.StrictMode>,
  document.getElementById( 'root' )
);
