
function urldata(key) {
    var u = location.href;
    var n = key.length;
    var i = u.search(key)+n+1;
    var a = "";
    while(u.charAt(i)!=""&&u.charAt(i)!="&") {
        a += u.charAt(i);
        ++i;
    }
    return a;
}
