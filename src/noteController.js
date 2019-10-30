
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
  function NoteController(notelist = new NoteList()) {
    // notelist.addNote("Favourite drink: seltzer");
    this.noteListView = new NoteListView(notelist);
  }

  NoteController.prototype.insertHTML = function(doc = document) {
    var elem = doc.getElementById("app");
    elem.innerHTML = this.noteListView.getHTML();
  }

  exports.NoteController = NoteController;
})(this);

// controller = new NoteController();
// controller.insertHTML();
