import React from 'react';
import { BsPinAngle } from 'react-icons/bs';
import { BiEdit,BiArchiveIn,BiTrashAlt} from 'react-icons/bi';

function CardComp() {
  return (
      <>
          <div className='main-card-containr'>
              <div className='card-container'>
                  <div className='section-1'>
                      <div>
                          Title
                      </div>
                      <div><BsPinAngle/></div>
                  </div>
                  <div>lable</div>
                  <div>lable</div>
                  <div className='section-'>
                      <div>
                          date
                      </div>
                      <div>time</div>
                      <div><BiEdit /></div>
                      <div><BiArchiveIn /></div>
                      <div><BiTrashAlt/></div>
                  </div>
                  
              </div>
              
          </div>
      </>
  )
}

export default CardComp