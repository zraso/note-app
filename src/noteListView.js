(function(exports) {
  function NoteListView(noteList) {
    this.noteList = noteList
  }

  NoteListView.prototype.getHTML = function() {
    var stringHTML = '<ul>'

    this.noteList.allNotes().forEach( function(note) {
      stringHTML += '<li><div><a href=#' + note.id + ">" + note.getText().substring(0, 100) + '</a></div></li>'
    })
     return stringHTML + '</ul>'
  }

  exports.NoteListView = NoteListView;
})(this);
