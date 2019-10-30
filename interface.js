list = new NoteList()
list.addNote('Helllooooooooooooooooooooeoroeroeroe')
list.addNote('hihi')

controller = new NoteController(list)

controller.insertHTML()

function getNoteByID(id) {
  return list.allNotes()[id]
}

function showNoteHTML(id) {
  note = getNoteByID(id)
  singleView = new SingleNoteView(note);
  document
    .getElementById("app")
    .innerHTML = singleView.renderHTML()
}

function getIDfromURL(location) {
  return window.location.href.split("#")[1];
}

window.onhashchange = function() {
  id = getIDfromURL()
  showNoteHTML(id)
}
