function testNoteControllerInstatiated() {
  var list = new NoteList();
  list.addNote('Favourite drink: seltzer');
  var controller = new NoteController(list);
  var noteList = controller.noteListView.noteList
  var note = noteList.notes[0]
  assert.isTrue(note.getText() === "Favourite drink: seltzer")
}

testNoteControllerInstatiated();

function testInsertHTML() {

  var elementDouble = {
    innerHTML: 'Hello World'
  }

  var documentDouble = {
    getElementById: function() {
      return elementDouble
    }
  };


  var list = new NoteList();
  list.addNote('Favourite food: pesto');
  var controller = new NoteController(list);
  console.log(controller)
  controller.insertHTML(documentDouble);
  assert.isTrue(documentDouble.getElementById("app").innerHTML === "<ul><li><div>Favourite food: pesto</div></li></ul>")
}

testInsertHTML();
