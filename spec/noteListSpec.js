// var noteList;
// var note;
//
// beforeEach(function () {
//   noteList = new NoteList();
//   note = new Note("Favourite drink: seltzer");
// })

function testNoteListInstatiated() {
  var noteList = new NoteList();
  assert.isTrue(noteList.list.length === 0)
}

testNoteListInstatiated();

function addNote() {
  var noteList = new NoteList();
  note = new Note("Favourite drink: seltzer");
  noteList.addNote(note)
  assert.isTrue(noteList.list.length === 1)
}

addNote();

function getList() {
  var noteList = new NoteList();
  note = new Note("Favourite drink: seltzer");
  noteList.addNote(note)
  assert.isTrue(noteList.getList() === "Favourite drink: seltzer")
}

getList();
