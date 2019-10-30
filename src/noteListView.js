(function(exports) {
  function NoteListView(noteList) {
    this.noteList = noteList
  }

  NoteListView.prototype.getHTML = function() {
    notes = this.noteList.allNotes().map(getNote)
    return '<ul><li><div>' + notes.join('</div></li><li><div>') + '</div></li></ul>'
  }

  function getNote(note) {
    return note.getText()
  }

  exports.NoteListView = NoteListView;
})(this);

// notelist = new NoteList()
// note = new Note("bye");
// notelist.addNote("hello")
// notelist.addNote(note)
// notelistview = new NoteListView(notelist)
//
// console.log(notelistview)
