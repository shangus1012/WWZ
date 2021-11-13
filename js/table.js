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
//-------------------------------------------------------------------------------------------
function help() {
    alert(
        "궁지에 몰리다 : 아군에게 빨간색 십자가가 뜨는 모든 상황\n\n붙잡혀 넘어지다 : 다수의 일반좀비/특수좀비에게 붙들려 행동불능이 된 상황\n무력화 : 체력보다 높은 피해를 입어 출혈 타이머가 작동하며 행동불능이 된 상황\n"
    );
    alert(
        "강화된 중화기 : 탄약 50% 증가, 피해량 50% 증가\n*로켓 런처는 탄약이 증가하지 않음\n\n연속 처치 : 정해진 시간 내에 정해진 수만큼 처치하는 것\n*연달아 처치는 정해진 시간이 없음"
    );
    alert(
        "자체 쿨타임 : 명시되어 있지 않지만 3~5초 정도의 쿨타임을 가지는 것\n\n매우 짧은 자체 쿨타임 : 총알 한 발당 적용되는 스킬들은 ~0.1초 가량의 매우 짧은 쿨타임을 가진다"
    );
    alert(
        "최대 처치량 : 폭발물, 근접무기등을 포함한 모든 무기는 한 번에 처치 가능한 적의 수가 제한되어 있다.\n데미지가 아무리 높아도 최대 처치량이 2마리로 제한되어 있다면 나머지 적들은 피해를 입지 않는다."
    );
}