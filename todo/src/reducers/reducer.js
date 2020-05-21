const TOGGLE_TODO = "TOGGLE_TODO";

export const initialNoteState = [
  {
    item: 'Learn about reducers',
    completed: false,
    id: 3892987589
  }
]


export const noteReducer = (state, action) => {
  console.log(state)
    switch (action.type) {
        case 'ADD_TODO':
          console.log(action.note)
        return [...state,
              {
                item: action.note,
                completed:false,
                id: Date.now()
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
