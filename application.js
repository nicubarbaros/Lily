var myContent = document.getElementById('lily--content');

var modal = new Modal({
  content: myContent,
});


var button = document.getElementById("trigger--lily");

button.addEventListener("click", function() {
  modal.open();
})