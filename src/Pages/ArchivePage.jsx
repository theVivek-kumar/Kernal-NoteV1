import React from 'react';
import ArchiveCard from '../Componenets/ArchiveCard';
import AsideBar from '../Componenets/AsideBar';
import NavBar from '../Componenets/Navbar';
import SearchAppBar from '../Componenets/Search';
import {useNoteContext} from '../Context/NoteContext'

function ArchivePage() {
     const { noteState } = useNoteContext();
     const { archiveNotes } = noteState;
  return (
    <>
      <NavBar />
      <div className="main-section">
        <div className="main-content flex-col-center">
          <AsideBar />
        </div>

        <div>
          <div className="search-bar-flex-style">
            <SearchAppBar />
          </div>
          {archiveNotes.map((note) => (
            <ArchiveCard key={note._id} note={note} />
          ))}
        </div>
      </div>
    </>
  );
}

export default ArchivePage