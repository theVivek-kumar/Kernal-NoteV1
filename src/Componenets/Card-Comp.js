import React from 'react';
import { BsPinAngle } from 'react-icons/bs';
import { BiEdit, BiArchiveIn, BiTrashAlt } from 'react-icons/bi';
import { useNoteContext } from '../Context/NoteContext';

function CardComp({ note }) {
  const {
    _id,
    title,
    textareaValue,
    label,
    //labelArray,
    priority,
    notesBgColor,
    noteCreatedDate,
    isEdit,
  } = note;
  let { noteDispatch, adddToArchive, addToNotes, adddToTrash, deleteFromTrash } = useNoteContext();
  // function priorityColor(priority) {
  //   switch (priority) {
  //     case "urgent":
  //       return "red";

  //     case "medium":
  //       return "orange";

  //     case "low":
  //       return "green";

  //     default:
  //       break;
  //   }
  // }
  return (
    <>
      
        <div className='main-card-containr' style={{ backgroundColor: notesBgColor }}>
         <div className='title-style'> 
        <h2>{title}</h2>
          <div className='card-icon-section'><BsPinAngle /></div>
          </div>
     
          <div className='lable-card-item' style={{ backgroundColor: 'whitesmoke' }}>
            {label}
          </div>
            <div className='priority-card-item'>
              {priority}
            </div>
            <div
              dangerouslySetInnerHTML={{ __html: textareaValue }}
              className="note-card-body"
            ></div>
          
         

        <div className='card-date-section'>
          <div className='Container-class'>
          <div className='date-section'>
            <span>
              {noteCreatedDate}
            </span> 
          </div>
          <div className='card-icon-section'>
              <BiEdit
                onClick={() => {
                  noteDispatch({ type: "IS_EDIT", payload: true });
                  noteDispatch({ type: "NOTE_MODAL", payload: true });
                  noteDispatch({
                    type: "EDIT_NOTE",
                    payload: note,
                  });
                }}  />
              <BiArchiveIn
                onClick={() => adddToArchive(note, noteDispatch)} />
              <BiTrashAlt
                onClick={() => adddToTrash(note, noteDispatch)} />
          </div>
          </div>
        </div>
        </div>
      
    </>
  )
}

export default CardComp