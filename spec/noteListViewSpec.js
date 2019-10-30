function noteListView() {
  var noteList = new NoteList();
  var noteListView = new NoteListView(noteList);

  assert.isTrue(noteListView.noteList === noteList);
}

noteListView();
ID.reset();

function getHTML() {
  var noteList = new NoteList();
  var noteListView = new NoteListView(noteList);

  noteList.addNote("Favourite Drink: Pepsi")
  noteList.addNote("Favourite Food: Spaghetti Bolognese")
  assert.isTrue(noteListView.getHTML() === "<ul><li><div><a href=#0>Favourite Drink: Pep</a></div></li><li><div><a href=#1>Favourite Food: Spag</a></div></li></ul>")
}

getHTML();
ID.reset();

function singleNoteList() {
  var noteList = new NoteList();
  var noteListView = new NoteListView(noteList);

  noteList.addNote("Favourite Drink: Pepsi")

  assert.isTrue(noteListView.getHTML() === "<ul><li><div><a href=#0>Favourite Drink: Pep</a></div></li></ul>")
}

singleNoteList();
ID.reset();

function emptyList() {
  var noteList = new NoteList();
  var noteListView = new NoteListView(noteList);
  assert.isTrue(noteListView.getHTML() === "<ul></ul>")
}

emptyList();
ID.reset();
