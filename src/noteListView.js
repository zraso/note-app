(function(exports) {
  function NoteListView(noteList) {
    this.noteList = noteList
  }

  NoteListView.prototype.getHTML = function() {
    return '<ul><li><div>' + this.noteList.list.join('</div></li><li><div>') + '</div></li></ul>'
  }

  exports.NoteListView = NoteListView;
})(this);
