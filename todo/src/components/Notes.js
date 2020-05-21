import React, { useReducer } from 'react'
import { initialNoteState, noteReducer} from "../reducers/reducer";

const Notes = (props) => {
    console.log(props);
    return (
        <div>
            <p>{props.note.item}</p>
        </div>
    )
}

export default Notes;