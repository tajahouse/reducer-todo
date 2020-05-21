import React, { useState, useReducer } from 'react';
import './App.css';
import NoteForm from "./components/NoteForm";


function App() {

  return (
    <div className="App">
      <h1>Todo</h1>
      <NoteForm />
    </div>
  );
}

export default App;
