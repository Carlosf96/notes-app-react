import axios from 'axios';

const NoteService = (() => {
  const createNote = async (noteData) => {
    const res = await axios.post('http://localhost:8000/api/notes/', noteData);
    return Promise.resolve(res.data);
  }
  const getNotes = async () => {
    const res = await axios.get("http://localhost:8000/api/notes/");
    return Promise.resolve(res.data);
  };

  const getNoteById = async (id) => {
    const res = await axios.get(`http://localhost:8000/api/notes/${id}`);
    return Promise.resolve(res.data);
  };
  const updateNote = async (id, note) => {
    const res = await axios.put(`http://localhost:8000/api/notes/${id}`, note);
    return Promise.resolve(res.data);
  }
  const deleteNote = async (id) => {
    const res = await axios.delete(`http://localhost:8000/api/notes/${id}`);
    return Promise.resolve(res.data);
  }
  return {
    getNotes,
    getNoteById,
    createNote,
    updateNote,
    deleteNote,
  };
})();

export default NoteService;