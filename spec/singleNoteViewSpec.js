// function testSingleNoteViewInstantiated() {
//   var note = new Note('Hello');
//   var singleView = new SingleNoteView(note);
//   assert.isTrue(note.getText() === "Hello")
// }

function testSingleNoteView() {
    var note = new Note('Hello');
    var singleView = new SingleNoteView(note);
    assert.isTrue(singleView.renderHTML() === "<div>Hello</div>")
}

testSingleNoteView();
