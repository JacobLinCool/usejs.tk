function count(str) {
    var i = 0;
    while(str.charAt(i)!="") {
        ++i;
    }
    return i;
}
function urldata(key) {
    var u = location.href;
    var n = count(key);
    var i = u.search(key)+n+1;
    var a = "";
    while(u.charAt(i)!=""&&u.charAt(i)!="&") {
        a += u.charAt(i);
        ++i;
    }
    return a;
}
