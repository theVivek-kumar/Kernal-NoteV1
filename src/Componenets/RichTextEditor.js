import React, {useState} from 'react';
import ReactQuill from "react-quill";
import 'react-quill/dist/quill.snow.css';
import { useNoteContext } from '../Context/NoteContext';

const RichTextEditor = ({textAreaValue}) => {
 const { noteState, noteDispatch } = useNoteContext();
    //const { textAreaValue } = noteState;
   

    return (
        <>
            <div>
                <ReactQuill className="shadow-sm"
                            theme="snow"
                            style={{
                                height: 350,
                                marginTop: '1rem',
                                display: 'flex',
                                flexDirection: 'column'
                            }}

                            value={ textAreaValue || '' } 
                    
                            modules={{
                                toolbar: [
                                    ['bold', 'italic', 'underline', 'strike', 'blockquote'],
                                    [{'align': []}],
                                    [{ 'color': [] }, { 'background': [] }],
                                    [{ 'list': 'ordered' }, { 'list': 'bullet' },  { 'indent': '+1' }],
                                    ['link', "video","image"],
                                    ['clean']
                                ],
                            }}
                        
                            onChange={(event) => noteDispatch({
        type: "TEXTAREA",
           payload: event ,
       })
       }    
        />
          </div>
        </>
    );
};

export { RichTextEditor };