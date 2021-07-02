function __nEn(c) {
    return btoa(encodeURIComponent(c).replace(/%([0-9A-F]{2})/g, function toSolidBytes(a, b) {
        return String.fromCharCode('0x' + b)
    }))
}

function __nDe(a) {
    return decodeURIComponent(atob(a).split('').map(function (c) {
        return '%' + ('00' + c.charCodeAt(0).toString(16)).slice(-2)
    }).join(''))
}
document.onkeyup = function (a) {
    if ((a = a || window.event).altKey && a.ctrlKey && a.shiftKey && 13 == a.which) return $("body"), alert(__nDe("Tmd1eWVuIFBoYW0KTW9iaWxlOiA2ODItMjAzLTEzMzQKRW1haWw6IGJhb25ndXllbnlhbUBnbWFpbC5jb20=")), undefined
};
