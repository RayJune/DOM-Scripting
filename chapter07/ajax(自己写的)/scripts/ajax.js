function getPoem() {
    var request = new XMLHttpRequest();
    request.open("GET", "test.txt", true);
    request.onreadystatechange = function() {
        if(request.readyState == 4) {
            var btn = document.getElementById('poem');
            btn.onclick = function() {
                var para = document.createElement("p");
                var txt = document.createTextNode(request.responseText);
                para.appendChild(txt);
                btn.appendChild(para);
            }
        }
    };
    request.send(null);
}

getPoem();

//但是很不幸，这样做(调用本地磁盘上的文件)会被同源加载策略给屏蔽