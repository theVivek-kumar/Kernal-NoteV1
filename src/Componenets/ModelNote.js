import React from 'react'
import { AiOutlineClose } from 'react-icons/ai';
import {MdClose,MdOutlineColorLens} from "react-icons/md";
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
          
              
                  <input 
                  placeholder="enter title of note"
                  value={noteState.title}
                  required
                  onChange={(e) =>
                    noteDispatch({ type: "TITLE", payload: e.target.value })
                  }
                  className='input-field-area'
                />
          <div className='title-container'>Description</div>
          <div className='ritcheditor-container'><RichTextEditor  textAreaValue={textareaValue}/></div>
          
          <div className='lable-flow-flex'>
                    <input
            type="radio"
                      name="label"
                      required
                      className=""
                      id="medium"
                      checked={label === "office"}
                      onChange={() =>
                        noteDispatch({ type: "LABEL", payload: "office" })
                      }          />
                      <p className="label">Office</p>
                    <input
                      type="radio"
                      name="label"
                      required
                      className=""
                      id="low"
                      checked={label === "home"}
                      onChange={() =>
                        noteDispatch({ type: "LABEL", payload: "home" })
                      }       
                    />
                    <p className="label">Home</p>
                    <input
                      type="radio"
                      name="label"
                      required
                      className=""
                      id="high"
                      checked={label === "school"}
                      onChange={() =>
                        noteDispatch({ type: "LABEL", payload: "school" })
                      }
                        />
                    <p className="label">School</p>
                    
          </div>
          <div className='title-container'>priority</div>
          <div className='lable-flow-flex'>
                    <input
                    type="radio"
                      name="priority"
                      required
                      value={3}
                      className=""
                      id="high"
                      checked={priority === "urgent"}
                      onChange={() =>
                        noteDispatch({ type: "PRIORITY", payload: "urgent" })
                      }/>
                      <p className="label">High</p>
                    <input
                      type="radio"
                      name="priority"
                      required
                      value={2}
                      className=""
                      id="medium"
                      checked={priority === "medium"}
                      onChange={() =>
                        noteDispatch({ type: "PRIORITY", payload: "medium" })
                      }          />
                    <p className="label">Medium</p>
                    <input
                      type="radio"
                      name="priority"
                      required
                      value={1}
                      className=""
                      id="low"
                      checked={priority === "low"}
                      onChange={() =>
                        noteDispatch({ type: "PRIORITY", payload: "low" })
                      }          />
            <p className="label">Low</p>
            </div>
                  <div className='model-btn-addnote'>
                     <span className="color-picker-icon">
                <MdOutlineColorLens />
              </span>

              <input
                type="submit"
                value={isEdit ? "Update" : "Add Note"}
                style={{ position: "absolute", bottom: "1rem", right: "1rem" }}
                className="submit-btn"
              />
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