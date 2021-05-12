function lift_encode(str) {
    return unescape(encodeURIComponent(str))
}

function lift_decode(str) {
    return decodeURIComponent(escape(str));
}

function download(filename, text) {
    var element = document.createElement('a');
    element.setAttribute('href', 'data:text/plain;charset=utf-8,' + encodeURIComponent(text));
    element.setAttribute('download', filename);
    element.style.display = 'none';
    document.body.appendChild(element);
    element.click();
    document.body.removeChild(element);
}

document.getElementById("dwn-btn").addEventListener("click", function () {
    var text = document.getElementById("results").value;
    var filename = "LIFT_KW_LIST_"+new Date().getTime()+".txt";
    download(filename, text);
}, false);