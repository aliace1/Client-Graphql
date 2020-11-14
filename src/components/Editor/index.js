import React from 'react';
import Toolbar from './components/Toolbar';
import './styles.css';

export default function Editor({ style, onSubmit }) {


  function handleSubmit(){
    const editor = document.getElementById('editor');

    if(onSubmit){
      return onSubmit(editor.innerHTML);
    }

    return console.log(undefined);
  }

  return (
    <div>

      <div
        id="editor"
        className="editor-paper"
        style={style}
        contentEditable="true"
        designmode="on"
        spellCheck="true" />

      <Toolbar />

      <div className="controls-content">
        <button id="salve" className="editor-button" onClick={handleSubmit} >AJOUTER</button>
      </div>

    </div>
  )
} 