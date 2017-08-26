function showPic(whichpic) {
  var placeholder = document.getElementById("placeholder");
  if (!placeholder) return true;

  var source = whichpic.getAttribute("href");
  placeholder.setAttribute("src",source);
  
  if (!document.getElementById("description")) {return false;}
  if (whichpic.getAttribute("title")) {
    var text = whichpic.getAttribute("title");
  } else {
    var text = "";
  }
  var description = document.getElementById("description");
  if (description.firstChild.nodeType == 3) {
    description.firstChild.nodeValue = text;
  }
  return false;
}

function prepareGallery() {
  if (!document.getElementsByTagName) return false;
  if (!document.getElementById) return false;

  var gallery = document.getElementById("imagegallery");
  if (!gallery) return false;

  var links = gallery.getElementsByTagName("a");

  for (var i = 0; i < links.length; i++) {
    links[i].onclick = function() {
      return showPic(this);
  }
    links[i].onkeypress = links[i].onclick;
  }
}

function addLoadEvent(func) {
  var oldonload = window.onload;
  if (typeof window.onload != 'function') {
    window.onload = func;
  } else {
    window.onload = function() {
      oldonload();
      func();
    }
  }
}


addLoadEvent(prepareGallery);

