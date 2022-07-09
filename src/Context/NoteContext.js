import axios from "axios";
import { Toast } from "../components/Toast/Toast"
import { useEffect, createContext, useContext } from "react";
import { useReducer } from "react";
import { v4 as uuid } from "uuid";

const NoteContext = createContext();
const useNoteContext = () => useContext(NoteContext);


function NotesProvider({ children }) {
  function noteReducer(state, action) {
    switch (action.type) {
      case "GET_NOTES":
        return { ...state, getNotes: action.payload };
      case "POST_NOTES":
        return { ...state, postNotes: action.payload };
      case "TITLE":
        return { ...state, title: action.payload };
      case "PRIORITY":
        return { ...state, priority: action.payload };
      case "LABEL":
        return { ...state, label: action.payload };

        case "LABEL_INPUT":
          return { ...state, labelInput: action.payload };
        case "LABEL_ARRAY":
          return { ...state, labelArray: [...state.labelArray,action.payload] };  

      case "TEXTAREA":
        return { ...state, textareaValue: action.payload };
      case "ADD_TO_NOTES":
        return { ...state, addToNotes: action.payload };
      case "IS_EDIT":
        return { ...state, isEdit: action.payload };
        
      case "EDIT_NOTE":
        return { ...state, ...action.payload };
        

      case "GET_ARCHIVE_NOTES":
        return { ...state, archiveNotes: action.payload };
      case "ADD_TO_ARCHIVE":
        return { ...state, archiveNotes: action.payload };
      case "RESTORE_FROM_ARCHIVE":
        return { ...state, archiveNotes: action.payload };
      case "DELETE_FROM_ARCHIVE":
        return { ...state, archiveNotes: action.payload };

      case "GET_TRASH_NOTES":
        return { ...state, trashNotes: action.payload };
      case "ADD_TO_TRASH":
        return { ...state, trashNotes: action.payload };
      case "RESTORE_FROM_TRASH":
        return { ...state, trashNotes: action.payload };
      case "DELETE_FROM_TRASH":
        return { ...state, trashNotes: action.payload };

      case "NOTES_BG_COLOR":
        return { ...state, notesBgColor: action.payload };
      case "NOTE_MODAL":
        return { ...state, noteModal: action.payload };
      case "NOTE_CREATED_DATE":
        return { ...state, noteCreatedDate: action.payload };
      case "CLEAR_INPUT":
        return {
          ...state,
          _id:null,
          title: "",
          textareaValue: "",
          priority: "",
          label: "",
          notesBgColor: "#ffffff",
        };

      case "SEARCH":
        return {...state, searchValue:action.payload}  
      default:
        return state;
    }
  }
  const noteCreatedDate = new Date().toLocaleString();

  // const date =
  //   newDate.getDate() +
  //   "/" +
  //   (newDate.getMonth() + 1) +
  //   "/" +
  //   newDate.getFullYear();

  // const formattedMinutes =
  //   newDate.getMinutes().length == 1
  //     ? "0" + newDate.getMinutes()
  //     : newDate.getMinutes();

  // const formattedHours =
  //   newDate.getHours().length == 1
  //     ? "0" + newDate.getHours()
  //     : newDate.getHours();

  // const time = formattedHours + ":" + formattedMinutes;
  // const noteCreatedDate = date + " at " + time;

  const [noteState, noteDispatch] = useReducer(noteReducer, {
    getNotes: [],
    postNotes: [],
    addToNotes: [],
    archiveNotes: [],
    trashNotes: [],
    _id:'',
    title: "",
    priority: "",
    label: "",

    labelInput:"",
    labelArray:"",

    textareaValue: "",
    notesBgColor: "#ffffff",
    noteModal: false,
    // noteCreatedDate: newDate,
    isEdit: false,
    editNote:{},
    searchValue:"",
  });

  const {
    addToNotes,
    title,
    priority,
    label,
    labelInput,
    labelArray,
    textareaValue,
    notesBgColor,
    noteModal,
    isEdit,
  } = noteState;


  async function getNotesData() {
    try {
      const response = await axios({
        method: "GET",
        url: "/api/notes",
        headers: { authorization: localStorage.getItem("token") },
      });
      if (response.status === 200) {
        noteDispatch({ type: "GET_NOTES", payload: response.data.notes });
      }
    } catch (error) {
    }
  }

  async function addNote(e) {
    e.preventDefault();
    const note = {
      _id: uuid(),
      title,
      priority,
      label,
      labelArray,
      textareaValue,
      notesBgColor,
      noteCreatedDate,
    };
  console.log("from context",labelArray)
    try {
      const response = await axios({
        method: "POST",
        url: "/api/notes/",
        headers: { authorization: localStorage.getItem("token") },
        data: { note },
      });
      if (response.status === 201) {
        noteDispatch({ type: "ADD_TO_NOTES", payload: response.data.notes });
        noteDispatch({ type: "CLEAR_INPUT" });
        noteDispatch({ type: "NOTE_MODAL", payload: false });
        Toast({ type: "success", msg: "Note added successfully" });
      }
    } catch (error) {
      Toast({ type: "error", msg: error });
    }
  }

  async function editNote(e){
    e.preventDefault();
    const note = {
      // _id,
      title,
      priority,
      label,
      textareaValue,
      notesBgColor,
      noteCreatedDate,
    };

      
      try{
          const response = await axios({
              method: "POST",
              url: `/api/notes/${noteState._id}`,
              data: { note},
              headers: { authorization: localStorage.getItem("token") },
          })
          if( true ){
            noteDispatch({ type: "ADD_TO_NOTES", payload: response.data.notes });
            noteDispatch({ type: "CLEAR_INPUT" });
            noteDispatch({ type: "NOTE_MODAL", payload: false });
            noteDispatch({ type: "IS_EDIT", payload: false });
            Toast({ type: "info", msg: "Note edited successfully" });
          }
      } catch ( error ){
      Toast({ type: "error", msg: error });
      }
  }



  async function getArchiveNotes(noteDispatch){
    try{
        const response = await axios({
            method: "GET",
            url: "/api/archives/",
            headers: { authorization: localStorage.getItem("token") },
        });
        if( true ){
            noteDispatch({ type:"GET_ARCHIVE_NOTES", payload: response.data.archives })
        }
    } catch(error){
      Toast({ type: "error", msg: error });
    }
}

async function adddToArchive (note,noteDispatch){
    try{
        const response = await axios({
            method:"POST",
            url: `api/notes/archives/${note._id}`,
            headers: { authorization: localStorage.getItem("token") },
            data: { note: note},
        })
        if( response.status === 201 ){
            noteDispatch({ type:"ADD_TO_ARCHIVE", payload: response.data.archives})
            noteDispatch({ type: "ADD_TO_NOTES", payload: response.data.notes})
            Toast({ type: "info", msg: "Note archived" });

        }
    } catch(error){
      Toast({ type: "error", msg: error });
    }
}

async function restoreFromArchive (_id, noteDispatch){
    try{
        const response = await axios({
            method:"POST",
            url: `/api/archives/restore/${_id}`,
            headers: { authorization: localStorage.getItem("token") },
            
        })
        if(response.status === 200 ){
            noteDispatch({ type:"RESTORE_FROM_ARCHIVE", payload: response.data.archives })
            noteDispatch({ type: "ADD_TO_NOTES", payload: response.data.notes})
        Toast({ type: "success", msg: "Note unarchived" });


        }
    } catch(error){
      Toast({ type: "error", msg: error });
    }
}

async function deleteFromArchive (_id, noteDispatch){
    try{
        const response = await axios({
            method:"DELETE",
            url: `/api/archives/delete/${_id}`,
            headers: { authorization: localStorage.getItem("token") },
            
        })
        if(response.status === 200 ){
            noteDispatch({ type:"DELETE_FROM_ARCHIVE", payload: response.data.archives })
        Toast({ type: "warning", msg: "Note deleted" });
        }
    } catch(error){
      Toast({ type: "error", msg: error });
    }
}

async function getTrashNotes(){
    try{
        const response = await axios({
            method: "GET",
            url: "/api/trash",
            headers: { authorization: localStorage.getItem("token") },
        })
        if( true ){
            noteDispatch({ type:"GET_TRASH_NOTES", payload: response.data.trash })
        }
    } catch(error){
      Toast({ type: "error", msg: error });
    }
}

async function adddToTrash (note,noteDispatch){
    try{
        const response = await axios({
            method:"POST",
            url: `/api/notes/trash/${note._id}`,
            headers: { authorization: localStorage.getItem("token") },
        })
        if(response.status === 201 ){
            noteDispatch({ type:"ADD_TO_TRASH", payload: response.data.trash})
            noteDispatch({ type: "ADD_TO_NOTES", payload: response.data.notes})
        Toast({ type: "info", msg: "Note trashed" });

        }
    } catch(error){
      Toast({ type: "error", msg: error });
    }
}

async function restoreFromTrash (_id,noteDispatch){
    try{
        const response = await axios({
            method:"POST",
            url: `/api/trash/restore/${_id}`,
            headers: { authorization: localStorage.getItem("token") },
            data: {},
        })
        if(true ){
            noteDispatch({ type:"ADD_TO_TRASH", payload: response.data.trash})
            noteDispatch({ type: "ADD_TO_NOTES", payload: response.data.notes})
        Toast({ type: "success", msg: "Note restored" });

        }
    } catch(error){
      Toast({ type: "error", msg: error });
    }
}

async function deleteFromTrash (_id, noteDispatch){
    try{
        const response = await axios({
            method:"DELETE",
            url: `/api/trash/delete/${_id}`,
            headers: { authorization: localStorage.getItem("token") },
            data: {},
        })
        if(true ){
            noteDispatch({ type:"ADD_TO_TRASH", payload: response.data.trash})
        Toast({ type: "warning", msg: "Note deleted from trash" });

        }
    } catch(error){
      Toast({ type: "error", msg: error });
    }
}

  function toggleNotes() {
    noteDispatch({
      type: "NOTE_MODAL",
      payload: true,
    });
  }

  useEffect(() => {
    getNotesData();
  }, []);

  return (
    <NoteContext.Provider
      value={{
        addToNotes,
        noteDispatch,
        noteState,
        priority,
        label,
        labelArray,
        textareaValue,
        addNote,
        notesBgColor,
        toggleNotes,
        noteModal,
        getArchiveNotes,
        adddToArchive,
        restoreFromArchive,
        deleteFromArchive,
        getTrashNotes,
        adddToTrash,
        restoreFromTrash,
        deleteFromTrash,
        editNote,
        isEdit,

      }}
    >
      {children}
    </NoteContext.Provider>
  );
}

export { useNoteContext, NotesProvider };