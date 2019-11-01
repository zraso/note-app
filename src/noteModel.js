(function(exports) {
  function Note(text) {
    this.text = text
    this.id = ID.generate()
  }

  Note.prototype.getText = function() {
    return this.text
  }

  exports.Note = Note;
})(this);

var ID = {
  currentID: -1,
  generate: function() {
    this.currentID+=1
    return this.currentID
  },

  reset: function() {
    this.currentID = -1;
  }
}
