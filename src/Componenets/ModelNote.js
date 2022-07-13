import React from 'react'
import { AiOutlineClose } from 'react-icons/ai';
import {MdClose} from "react-icons/md";
import RichTextEditor from './RichTextEditor';
import { useNoteContext } from '../Context/NoteContext';


function ModelNote() {
    let {
    noteState,
    noteDispatch,
    title,
    priority,
    textareaValue,
    label,
    addNote,
    editNote,
    notesBgColor,
    noteModal,
    isEdit,
  } = useNoteContext();
  return (
    <>
      
      <div
        style={{ display: noteModal ? "block" : "none" }}
      onClick={() => {
        noteDispatch({ type: "NOTE_MODAL", payload: false });
        noteDispatch({ type: "CLEAR_INPUT" });
        noteDispatch({ type: "IS_EDIT", payload: false });
      }}
      defaultValue="#FFFF"
      className="modal--container"
      >
      <div
        onClick={(e) => e.stopPropagation()}
        id="myModal"
        className="modal"
        style={{ backgroundColor: notesBgColor }}
      ></div>
      <form onSubmit={isEdit ? editNote : addNote}>
          <div className="modal-content">
      <div>
        <div className='model-container-area-bg'>
          <div className='model-container'>
              <div className='title-container'>
              <div>Title</div>
                    <div><AiOutlineClose
                    onClick={() => {
                noteDispatch({ type: "NOTE_MODAL", payload: false });
                noteDispatch({ type: "CLEAR_INPUT" });
                noteDispatch({ type: "IS_EDIT", payload: false });
              }}
              className="close"></AiOutlineClose></div></div>
          
          <input className='input-field-area' placeholder='add your note here' />
          <div className='title-container'>lable</div>
          <div className='ritcheditor-container'><RichTextEditor /></div>
          
          <div className='lable-flow-flex'>
          <input type="radio" />
          <p className="label">Office</p>
          <input type="radio" />
          <p className="label">Home</p>
          <input type="radio" />
          <p className="label">School</p>
          </div>
          <div className='title-container'>priority</div>
          <div className='lable-flow-flex'>
          <input type="radio" />
          <p className="label">High</p>
          <input type="radio" />
          <p className="label">Medium</p>
          <input type="radio" />
            <p className="label">Low</p>
            </div>
            <div className='model-btn-addnote'>
            <button className='btn-add'>ADD NOTE</button>
            </div>
          

              
          </div>
        </div>
        </div>
          </div>
        </form>
      </div>
      
    </>
  )
}

export default ModelNote