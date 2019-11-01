(function(exports){
  function NoteController(notelist) {
    var notelist = notelist
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
        text = clickEvent.path[1][0].value
        notelist.addNote(text)
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
