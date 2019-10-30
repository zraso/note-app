(function(exports) {
  function NoteList() {
    this.notes = []
  }
  //
  NoteList.prototype.addNote = function(string) {
    note = new Note(string);
    this.notes.push(note);
  }

  NoteList.prototype.allNotes = function() {
    // for(let i = 0; i < (this.notes.length); i++) {
      return this.notes
    // }
  }
  //
  // NoteList.prototype.createNote = function(string) {
  //   note = new Note(string);
  //   this.addNote(note);
  // }

  exports.NoteList = NoteList;
})(this);
