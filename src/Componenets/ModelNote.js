import React from 'react'
import { AiOutlineClose } from 'react-icons/ai';
import RichTextEditor from './RichTextEditor';


function ModelNote() {
  return (
    <>
      <div>
        <div className='model-container-area-bg'>
          <div className='model-container'>
              <div className='title-container'>
              <div>Title</div>
          <div><AiOutlineClose /></div></div>
          
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
    </>
  )
}

export default ModelNote