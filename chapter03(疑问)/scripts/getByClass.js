// JS实现getElementsByClassName

function getElementsByClassName (node, classname) { //注意：不要和下面的className弄混
    if (node.getElementsByClassName) {
        //使用现有方法
        return node.getElementsByClassName(classname);
    }
    else {
        //使用通配符+getElementsById来获取所有子节点
        var results = [];
        var elements = node.getElementByID('*');
        // var elements = node.childNodes; 也可用childNodes获取所有子节点
        for (var i = 0; i < elements.length; i++) {
            if (elements[i].className.indexOf(classname) != -1) { //匹配到了className
                results[results.length] = elements[i];
            }
        }
        return results;
    }
}


var a = document.getElementById('someId');
getElementsByClassName(a, 'someClassname'); //注意：这里必须要传入给函数一个node，而不是节点数组
