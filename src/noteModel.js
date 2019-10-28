// (function(exports) {
//   function Circle() {
//     this.radius = 10;
//   };
//
//   exports.Circle = Circle;
// })(this);
// //

(function(exports) {
  function Note(text) {
    this.text = text
  }

  Note.prototype.getText = function() {
    return this.text
  }

  exports.Note = Note;
})(this);
