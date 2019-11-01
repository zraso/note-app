function testNoteModelInstatiated() {
  var note = new Note("My favourite language is JavaScript");

  assert.isTrue(note.text === "My favourite language is JavaScript")
}

testNoteModelInstatiated();

function testgetText() {
  var note = new Note("My favourite language is JavaScript");
  assert.isTrue(note.getText() === "My favourite language is JavaScript")
}

testgetText();

function testID() {
  var note = new Note("My favourite language is JavaScript");
  assert.isTrue(note.id === 0)
}
