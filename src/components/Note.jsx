class Note {
  constructor(data){
    this.id = data.id; 
    this.title = data.title || '';
    this.body = data.body || '';
  }
}
export default Note;