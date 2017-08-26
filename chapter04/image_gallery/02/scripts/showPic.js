function showPic(whicpic) {
  var source = whichpic.getAttribute("href"); 
  var placeholder = document.getElementById("placeholder"); 
  placeholder.setAttribute("src", source);
  //也可以用 placeholder.src = source; 但setAttribute为DOM方法，适用性更大（比如非HTML文档）
}