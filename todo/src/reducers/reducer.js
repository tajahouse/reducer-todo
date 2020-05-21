export const TOGGLE_TODO = "TOGGLE_TODO";

export const initialNoteState = {
    item: 'Learn about reducers',
    text: 'Here is the note',
    completed: false,
    id: 3892987589
};

export const noteReducer = (state, action) => {
    switch (action.type) {
        case 'ADD_TODO':
          return [
            ...state,
            {
              item: action.item,
              text: action.text,
              id: action.id,
              completed: false
            }
          ]
        case 'TOGGLE_TODO':
          return state.map(todo =>
            (todo.id === action.id)
              ? {...todo, completed: !todo.completed}
              : todo
          )
        default:
          return state
      }
    }