import React from 'react';
import NoteService from '../services/NoteService';

const AddButton = () => {
  
  const handleClick = (data) => {
    (async()=>{
      await NoteService.createNote(data);
    })();
  }
  return (
    <div>
      <a className='btn btn-small' onClick={handleClick}>
        +
      </a>
    </div>
  )
};
export default AddButton;