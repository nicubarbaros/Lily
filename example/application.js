var modal = new Modal({
  fullWindow: true
});

var button = document.getElementById("trigger-lily");

button.addEventListener("click", function() {
  modal.open();
});

var button2 = document.getElementById("close");

button2.addEventListener("click", function() {
  modal.close();
});
