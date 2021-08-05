# Level-6-Capstone
"Workbench" Organization tool set as the browser homepage.


Instead of clicking to a number of different sites to stay organize, the workbench houses a notepad, a Kanban project tracker, a summary of GitHub repos, and links to a few of you favorite bookmarked websites.

## MVP Description

This is a single page app that is intended to be set as the browser homepage.  When you open a new tab or click the home button, your "workbench" is presented, giving you access to productivity tools without losing focus.

- User Stories
    * As a user, I can bookmark websites so that i can organize my favorite websites.
    * I can also edit and delete bookmarked sites.
    
    * As a user, I can write notes to organize my thoughts.
    * I can also edit and delete notes.
    
    * As a user, I can use a simple Kanban board to track my to-dos.
    * I can also edit and delete to-dos.
    
    * As a user, I can view recent commits and pull requests for my private GitHub repositories.
    
Mind Map
Front End:  React
 - Components:
    * AddBookmark.js
    * Bookmark.js
    * Bookmarks.js
    * GitHub.js
    * Calendar.js
    * KanBan.js
    * KanBanCard.js
    * News.js
    * NoteCard.js
    * NoteEntry.js
    * Notes.js
Backend:  Express, Mongoose, Morgan, MongoDB
- Routes:
	* authRouter
	* bookmarkRouter
	* noteRouter
	* todoRouter
- Models:
	* userSchema
  * todoSchema
  * noteSchema
  * bookmarkSchema

