import React, { useReducer } from 'react'
import { initialNoteState, noteReducer} from "../reducers/reducer";

const Notes = () =>{
    const [noteState, dispatch] = useReducer(noteReducer, initialNoteState);

    return (


        <div>
            <h1>{initialNoteState.item}</h1>
            <p>{initialNoteState.text}</p>
        </div>
    )
}

export default Notes;