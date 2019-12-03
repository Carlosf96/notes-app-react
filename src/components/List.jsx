import React from 'react';
import NoteService from '../services/NoteService';
import { Link } from 'react-router-dom';

const List = () => {
  const [isLoading, setIsLoading] = React.useState(true);
  const [Notes, setNotes] = React.useState([]);
  const [error, setError] = React.useState(null);

  React.useEffect(()=>{
    (async()=>{
      try {
        const notes = await NoteService.getNotes();
        setNotes(notes);
        console.log(Notes, notes)
      }
      catch(err){
        setError(err);
        console.log(err);
      }
      finally{
        setIsLoading(false);
      }
    })()
  })
  
  if (isLoading) {
    return <div>Is loading</div>;
  }

  if (error !== null) {
    return <div>Error: {error.message}</div>;
  }
  if (!Notes.length) {
    return (
      <div>
        No Notes found!
      </div>
    );
  }
  return (
    <div className="container">
      <div className='users-section'>
        {Notes.map(note => {
          return (
            <div className='row'>
              <p className='col s12 center'>
              {note.title}
              </p>
              <p className='col s12 center'>
              {note.body}
              </p>
            </div>
          );
        })}
      </div>
    </div>
  );
};
export default List;