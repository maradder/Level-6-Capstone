import React from 'react';
import Bookmarks from './components/Bookmarks'
import Notes from './components/Notes'
import KanBan from './components/KanBan'
import News from './components/News'
import Calendar from './components/Calendar'
import Email from './components/Email'

function App() {
  return (
    <div className="App">
      <Bookmarks />
      <Notes />
      <KanBan />
      <News />
      <Calendar />
      <Email />

    </div>
  );
}

export default App;
