function testNoteListInstatiated() {
  var noteList = new NoteList();
  assert.isTrue(noteList.notes.length === 0)
}

testNoteListInstatiated();

function testaddNote() {
  var noteList = new NoteList();
  note = new Note("Favourite drink: seltzer");
  noteList.addNote(note)
  assert.isTrue(noteList.notes.length === 1)
}

testaddNote();

function testgetNotes() {
  var noteList = new NoteList();
  noteList.addNote("Favourite drink: seltzer");
  assert.isTrue(noteList.notes[0].getText() === "Favourite drink: seltzer")
}

testgetNotes();
