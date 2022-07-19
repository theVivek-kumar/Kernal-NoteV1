import React from 'react';
import { BsPinAngle } from 'react-icons/bs';
import { BiEdit,BiArchiveIn,BiTrashAlt} from 'react-icons/bi';
import { useNoteContext } from '../Context/NoteContext';
function CardComp({ note }) {
      const {
    _id,
    title,
    textareaValue,
    label,
    labelArray,
    priority,
    notesBgColor,
    noteCreatedDate,
    isEdit,
  } = note;
  let { noteDispatch, adddToArchive, addToNotes, adddToTrash,  deleteFromTrash } = useNoteContext();
  function priorityColor(priority) {
    switch (priority) {
      case "urgent":
        return "red";

      case "medium":
        return "orange";

      case "low":
        return "green";

      default:
        break;
    }
  }
return (
    <>
        <div className='main-card-containr'
        style={{ backgroundColor: notesBgColor }}>
            <div className='card-container'>
                <div className='section-1'>
                    <div>
                        {title}
                </div>
                <div><BsPinAngle/></div>
                </div>
                <div>lable</div>
                <div>lable</div>
                <div className='section-4'>
                    <p className="note-card-created">created on {noteCreatedDate}</p>
                    <div>time</div>
                    <div><BiEdit
                    onClick={() => {
                noteDispatch({ type: "IS_EDIT", payload: true });
                noteDispatch({ type: "NOTE_MODAL", payload: true });
                noteDispatch({
                  type: "EDIT_NOTE",
                  payload: note,
                });
              }}/></div>
                    <div><BiArchiveIn onClick={() => adddToArchive(note, noteDispatch)}/></div>
                    <div><BiTrashAlt onClick={() => adddToTrash(note, noteDispatch)} /></div>
                </div>
        
            </div>
            
        </div>
    </>
)
}

export default CardComp