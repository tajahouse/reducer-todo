import React, { useState, useReducer } from 'react';
import { initialNoteState, noteReducer} from "../reducers/reducer";
import Notes from '../components/Notes';

const NoteForm = () =>{
    const [newNoteText, setNewNoteText] = useState(initialNoteState.text);
    const handleChanges = e =>{
        setNewNoteText(e.target.value)
    }


    return (
        <div>
            <input
            type="text"
            name="entry"
            placeholder="Enter Note Here"
            value={newNoteText}
            onChange={handleChanges}
            />
            <button>Add Note</button>

            <Notes />

        </div>
    )
}
export default NoteForm;