import React from 'react';

const NoteForm = () =>{
    return (
        <div>
            <input
            type="text"
            name="entry"
            placeholder="Enter Note Here"
            />
            <button>Add Note</button>

        </div>
    )
}
export default NoteForm;