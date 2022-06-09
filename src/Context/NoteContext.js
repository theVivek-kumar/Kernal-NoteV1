import axios from "axios";
import { createContext, useContext, useState } from "react";
const NoteContext = createContext();
const useNoteContext = () => useContext(NoteContext);

localStorage.setItem('Token','eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiJlMzIzZmY2MC1hMTUzLTQ0MTYtYmEyNS0zNDQ0ZGI1NjliOWMiLCJlbWFpbCI6ImFkYXJzaGJhbGlrYUBnbWFpbC5jb20ifQ._-fah2UEuueLmRHHl5uV4CYhiQdODX6neUkGbfTvtFM')
const NoteProvider = ({ children }) => {
    const [Note, setNote] = useState([]);

    async function getNote() {
        try {
            const response = await axios({
                method: "GET",
                url: "/api/notes",
                headers: { authorization: localStorage.getItem    ("Token") },
            });
            if (response.status == 200) {
                setNote(response.data.Note);
            }
        } catch (error) {
            console.log(error);
            }
        }
    }
        async function addNote( ) {
    try {
        const response = await axios({
        
        })
    }
}

