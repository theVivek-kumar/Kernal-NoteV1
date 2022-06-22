import React from 'react'
import { AiOutlineClose } from 'react-icons/ai';
import RichTextEditor from './RichTextEditor';


function ModelNote() {
  return (
    <>
      <div>
          <div className='model-container-area'>
              <div>Title</div>
          <div><AiOutlineClose /></div>
          <input placeholder='add your note here' />
          <div>lable</div>
          <div className='lable-flow-flex'>
          <input type="radio" />
          <p className="label">Office</p>
          <input type="radio" />
          <p className="label">Home</p>
          <input type="radio" />
          <p className="label">School</p>
          </div>
          <div>priority</div>
          <div className='lable-flow-flex'>
          <input type="radio" />
          <p className="label">High</p>
          <input type="radio" />
          <p className="label">Medium</p>
          <input type="radio" />
          <p className="label">Low</p>
          </div>
          <RichTextEditor/>
          

              
          </div>
      </div>
    </>
  )
}

export default ModelNote