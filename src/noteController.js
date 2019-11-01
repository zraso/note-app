
// console.log(elem)
//
// document.addEventListener("DOMContentLoaded", function(event) {
//   var elem = document.getElementById("app");
//   console.log(elem);
// })
//
// function changeText(newText) {
//   document.getElementById("app").innerHTML = "Howdy!";
// }
// document.addEventListener("click", changeText);
// elem.innerHTML = 'Howdy'







(function(exports){
  function NoteController(notelist) {
    // notelist.addNote("Favourite drink: seltzer");
    var notelist = notelist
    var blah = 'hello'
    this.notelist = notelist
    this.noteListView = new NoteListView(this.notelist);

    function getIDfromURL(location) {
      return location.hash.split("#")[1];
    }

    function showNote(id) {
      view = new SingleNoteView(notelist.notes[id])
      document
        .getElementById("app")
        .innerHTML = view.renderHTML()
    }

    function showNoteForCurrentPage() {
      showNote(getIDfromURL(window.location));
    }

    function makeURLChangeShowNoteForCurrentPage() {
      window.addEventListener("hashchange", showNoteForCurrentPage)
    }

    makeURLChangeShowNoteForCurrentPage();

    function clearTextArea() {
      document.getElementById("note").value = '';
    }

    document
      .getElementById("text")
      .addEventListener("click", function(clickEvent) {
        clickEvent.preventDefault()
        note = new Note(clickEvent.path[1][0].value)
        notelist.addNote(note.text)
        // var controller = new NoteController(list)
        controller.insertHTML()
        clearTextArea()
      });

    document
      .getElementById("home")
      .addEventListener("click", function(clickEvent) {
        clickEvent.preventDefault()
        controller.insertHTML()
      })

      NoteController.prototype.insertHTML = function(doc = document) {
        var elem = doc.getElementById("app");
        elem.innerHTML = this.noteListView.getHTML();
      }

  };

  exports.NoteController = NoteController;
})(this);

controller = new NoteController(new NoteList());
