import React from "react";
import NoteImg from "../asset/take-note.svg";
import AsideBar from "../Componenets/AsideBar";
import NavBar from "../Componenets/Navbar";
import SearchAppBar from "../Componenets/Search";
import { useNoteContext } from "../Context/NoteContext";
import CardComp from '../Componenets/Card-Comp'

function HomePage() {
   const { noteState } = useNoteContext();
  const { addToNotes, searchValue, pinnedNotes } = noteState;
  console.log(addToNotes);

  
  return (
    <>
      <NavBar />
      <div className="main-section">
        <div className="main-content flex-col-center">
          <AsideBar />
        </div>

        <div>
          <div className="search-bar-flex-style"><SearchAppBar /></div>
          {addToNotes.map((note) => (
            <CardComp key={note._id} note={note} />
            
          ))}
        </div>
      </div>
    </>
  );     
}

export { HomePage };
