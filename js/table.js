var classnum;
function createTable(pageNum) {
    classnum = pageNum;
    var className = numToName();
    for (var n = 0; n < 3; n++) {
        for (var i = 1; i < 30; i++) {
            if (i % 10) {
                var target = document.getElementsByClassName(i);
                target[n].setAttribute("onclick", "select(" + n + "," + i + ");saveTable();changeIframe(" + n + ", " + i + ");");
                target[n].setAttribute("class", i);
                target[n].setAttribute("name", n);
                target[n].innerHTML = "<img src='media/icon/" + className + "/" + i + ".png' alt = '" + className + n + i + "'>";
            }
            if (i < 9) {
                var target = document.getElementsByClassName("red" + i);
                target[n].setAttribute("onclick", "select('red" + i + "');");
                target[n].innerHTML = "<img src='media/icon/" + className + "/red" + i + ".png' alt = '" + className + n + i + "'>";
            }
        }
    }
    loadTable();
}

function changeIframe(n, i) {
    var target= document.getElementById("iframe" + n);
    target.setAttribute("src", "media/iframe/" + numToName() +"/" + i + ".html");
}

function select(n, i) {
    var temp = (i % 10 - 1) % 3;
    var init = i - temp;
    for (var num = 0; num < 3; num++) {
        var target = document.getElementsByClassName(init + num);
        target[n].setAttribute("class", init + num);
    }
    var target = document.getElementsByClassName(i);
    target[n].setAttribute("class", i + " clicked");
}

function saveTable() {
    var className = numToName();
    var arr = incode();
    for (var i = 0; i < 3; i++) {
        setCookie(className + i, arr[i], 30);
    }
}

function loadTable() {
    var className = numToName();
    for (var n = 0; n < 3; n++) {
        var cookie = getCookie(className + n);
        var arr = decode(cookie);
        for (var i = 0; i < arr.length - 1; i++) {
            select(n, arr[i]);
        }
    }
}

function incode() {
    var target = document.getElementsByClassName("clicked");
    var arr = ["", "", ""];
    for (var i = 0; i < target.length; i++) {
        var temp = target[i].className.split(" ");
        if (target[i].getAttribute("name") == 0) {
            arr[0] += temp[0] + "/";
        }
        else if (target[i].getAttribute("name") == 1) {
            arr[1] += temp[0] + "/";
        }
        else if (target[i].getAttribute("name") == 2) {
            arr[2] += temp[0] + "/";
        }
    }
    return arr;
}

function decode(string) {
    return string.split("/");
}

function numToName() {
    var className = "";
    if (classnum == 1) {
        className = "gunslinger";
    }
    else if (classnum == 2) {
        className = "Hellraiser";
    }
    else if (classnum == 3) {
        className = "Medic";
    }
    else if (classnum == 4) {
        className = "Fixer";
    }
    else if (classnum == 5) {
        className = "Slasher";
    }
    else if (classnum == 6) {
        className = "Exterminator";
    }
    else if (classnum == 7) {
        className = "Dronemaster";
    }
    else if (classnum == 8) {
        className = "Vanguard";
    }
    return className;
}