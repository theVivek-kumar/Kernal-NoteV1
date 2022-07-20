import React from 'react'
import { BsPinAngle } from "react-icons/bs";
import {  BiArchiveIn, BiTrashAlt } from 'react-icons/bi';
import { useNoteContext } from '../Context/NoteContext'
function TrashCard({ note }) {
    const {
        _id,
        title,
        textareaValue,
        label,
        priority,
        notesBgColor,
        noteCreatedDate,
    } = note;
    const { noteDispatch, restoreFromTrash, deleteFromTrash } = useNoteContext();

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

                          <BiArchiveIn
                              onClick={() => restoreFromTrash(_id, noteDispatch)} />
                          <BiTrashAlt
                              onClick={() => deleteFromTrash(_id, noteDispatch)} />
                      </div>
                  </div>
              </div>
          </div>

      </>
  )
}

export default TrashCard