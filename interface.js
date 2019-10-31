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

function getIDfromURL() {
  return window.location.href.split("#")[1];
  // return window.location.href.split("#")[1];
}

window.onhashchange = function() {
  id = getIDfromURL()
  showNoteHTML(id)
}

function clearTextArea() {
  document.getElementById("note").value = '';
}

document
  .getElementById("text")
  .addEventListener("click", function(clickEvent) {
    clickEvent.preventDefault()
    text = clickEvent.path[1][0].value
    list.addNote(text)
    controller.insertHTML()
    clearTextArea()
    console.log(clickEvent)
    console.log(clickEvent.path[1][0].value)
})

document
  .getElementById("home")
  .addEventListener("click", function(clickEvent) {
    clickEvent.preventDefault()
    controller.insertHTML()
    console.log(clickEvent)
    console.log(clickEvent.path[1][0].value)
})
