import React, { useState, useReducer } from 'react';
import { initialNoteState, noteReducer} from "../reducers/reducer";
import Notes from '../components/Notes';

const NoteForm = () =>{
    const [noteState, dispatch] = useReducer(noteReducer, initialNoteState);
    const [newNoteState, setNewNoteState] = useState("");
    console.log(initialNoteState);
    const handleChanges = e =>{
        setNewNoteState(e.target.value)
    }

    const handleSubmit = e =>{
        e.preventDefault();
        dispatch({ type: "ADD_TODO", note: newNoteState })
    }

    return (
        <div>
            <input
            type="text"
            name="entry"
            placeholder="Enter Note Here"
            value={newNoteState}
            onChange={handleChanges}
            />
            <button onClick={handleSubmit} type="submit">Add Note</button>

            {initialNoteState.map(note => <Notes note={note} />)}
        </div>
    )
}
export default NoteForm;