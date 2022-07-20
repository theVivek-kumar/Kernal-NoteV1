import React from 'react'
import AsideBar from '../Componenets/AsideBar';
import NavBar from '../Componenets/Navbar';
import SearchAppBar from '../Componenets/Search';
import TrashCard from '../Componenets/TrashCard';
import { useNoteContext } from '../Context/NoteContext'

export default function TrashPage() {
     const { noteState } = useNoteContext();
     const { trashNotes } = noteState;
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
          {trashNotes.map((note) => (
            <TrashCard key={note._id} note={note} />
          ))}
        </div>
      </div>
    </>
  );
}
