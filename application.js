var myContent = document.getElementById('content');

var modal = new Modal({
  content: myContent,
  overlay: false,
  fullWindow: true
});


var button = document.getElementById("trigger-lily");

button.addEventListener("click", function() {
  modal.open();
})