var i = 0;
function changeColors() {
  var colors = ["red", "blue", "green"];

  document.getElementsByTagName("body")[0].style.background = colors[i++];

  if (i > colors.length - 1) {
    i = 0;
  }
}
