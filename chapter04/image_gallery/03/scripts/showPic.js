function showPic(whichpic) {
  var source = whichpic.getAttribute("href");
  var placeholder = document.getElementById("placeholder");
  placeholder.setAttribute("src",source);
  var text = whichpic.getAttribute("title");
  var description = document.getElementById("description");
  description.firstChild.nodeValue = text; //文本节点是p元素的子节点，在这里是唯一的一个子节点
  //也可以写为： description.childNodes[0].nodeValue = text;
  /* 同理，node.lastChild也可以用childNodes来表示：
      node.childNodes[node.childNodes.length - 1] 
  */
  // 明显，firstChild和lastChild看起来更简单明了。
}
