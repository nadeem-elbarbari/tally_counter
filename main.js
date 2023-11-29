var num = 0;
document.getElementById("txtCount").innerHTML = num;
document.getElementById("addNum").onclick = function () {
    num++;
    document.getElementById("txtCount").innerHTML = num;
};
document.getElementById("subNum").onclick = function () {
    num--;
    document.getElementById("txtCount").innerHTML = num;
};
document.getElementById("reset").onclick = function () {
    num = 0;
    document.getElementById("txtCount").innerHTML = num;
};