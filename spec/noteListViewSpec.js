function noteListView() {
  var noteList = new NoteList();
  var noteListView = new NoteListView(noteList);

  assert.isTrue(noteListView.noteList === noteList);
}

noteListView();

function getHTML() {
  var note = new Note("Favourite Drink: Pepsi")
  var note2 = new Note("Favourite Food: Spaghetti Bolognese")
  var noteList = new NoteList();
  var noteListView = new NoteListView(noteList);

  noteList.addNote(note)
  noteList.addNote(note2)

  assert.isTrue(noteListView.getHTML() === "<ul><li><div>Favourite Drink: Pepsi</div></li><li><div>Favourite Food: Spaghetti Bolognese</div></li></ul>")
}

getHTML();
