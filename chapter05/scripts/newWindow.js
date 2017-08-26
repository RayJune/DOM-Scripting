//主要演示将JS行为与结构分离

window.onload = function() { //页面加载完毕后调用
  if (!document.getElementsByTagName) {
      return false;
  };
  var links = document.getElementsByTagName("a");
  for (var i=0; i<links.length; i++) {
    if (links[i].getAttribute("class") == "popup") {
        links[i].onclick = function() { //统一添加事件处理函数
          popUp(this.getAttribute("href"));
          //疑问：popUp函数定义在之后，为什么在这里可以正确调用
          //解答：因为这里是onload,即所有页面加载完毕时调用，在popUP之后
          return false; //取消a原始的事件响应
      }
    }
  }
}
  
function popUp(winURL) {
  window.open(winURL,"popup","width=320,height=480"); //BOM函数，大部分时间不建议使用，这里只是演示
}
