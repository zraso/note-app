
var assert = {
  isTrue: function(assertionToCheck) {
    if (!assertionToCheck) {
      throw new Error("Assertion failed: " + assertionToCheck + " is not truthy")
    }
  }
}

function testCircleRadiusDefaultsTo10() {
  var circle = new Circle();

  assert.isTrue(circle.radius === 10)
};

testCircleRadiusDefaultsTo10();
//
// (function(blahblah) {
//   function testNoteModelInstatiated() {
//     var note = new Note("My favourite language is JavaScript");
//
//     if (note.text !== "My favourite language is JavaScript") {
//       throw new Error("Note does not equal My favourite language is JavaScript")
//     }
//     // assert.isTrue(note.text === "My favourite language is JavaScript")
//   };
//   testNoteModelInstatiated()
// })(this);

function testNoteModelInstatiated() {
  var note = new Note("My favourite language is JavaScript");

  assert.isTrue(note.text === "My favourite language is JavaScript")
}

testNoteModelInstatiated();
