/**
 * nav 태그를 출력해 주는 자바스크립트파일
 */
var nav, div1, div2;

//=====================================================================================
function button() {//반응형 웹페이지 구현
   var button = document.createElement("button");
   button.setAttribute('type', 'button');
   button.setAttribute('class', 'navbar-toggler');
   button.setAttribute('type', 'button');
   button.setAttribute('data-toggle', 'collapse');
   button.setAttribute('data-target', '#navbarNav');
   button.setAttribute('aria-controls', 'navbarNav');
   button.setAttribute('aria-expanded', 'false');
   button.setAttribute('aria-label', 'Toggle navigation');
   button.innerHTML += "<span class='navbar-toggler-icon'></span>"
   nav.appendChild(button);
}

function pageList(pageNum) {//탭목록 구현
   var div = document.createElement('div');
   div.setAttribute('class', 'collapse navbar-collapse');
   div.setAttribute('id', 'navbarNav');
   var ul = document.createElement('ul');
   ul.setAttribute('class', 'nav nav-tabs mr-auto');

   var A = document.createElement('li');
   var B = document.createElement('li');
   var C = document.createElement('li');
   var D = document.createElement('li');

   var E = document.createElement('li');
   var F = document.createElement('li');
   var G = document.createElement('li');
   var H = document.createElement('li');

   A.setAttribute('class', 'nav-item');
   B.setAttribute('class', 'nav-item');
   C.setAttribute('class', 'nav-item');
   D.setAttribute('class', 'nav-item');
   E.setAttribute('class', 'nav-item');
   F.setAttribute('class', 'nav-item');
   G.setAttribute('class', 'nav-item');
   H.setAttribute('class', 'nav-item');

   A.innerHTML += "<a class='nav-link' href='javascript:void(0);' onclick='createNav(1)'>총잡이</a>";
   B.innerHTML += "<a class='nav-link' href='javascript:void(0);' onclick='createNav(2)'>난동꾼</a>";
   C.innerHTML += "<a class='nav-link' href='javascript:void(0);' onclick='createNav(3)'>위생병</a>";
   D.innerHTML += "<a class='nav-link' href='javascript:void(0);' onclick='createNav(4)'>해결사</a>";

   E.innerHTML += "<a class='nav-link' href='javascript:void(0);' onclick='createNav(5)'>학살자</a>";
   F.innerHTML += "<a class='nav-link' href='javascript:void(0);' onclick='createNav(6)'>파괴자</a>";
   G.innerHTML += "<a class='nav-link' href='javascript:void(0);' onclick='createNav(7)'>드론마스터</a>";
   H.innerHTML += "<a class='nav-link' href='javascript:void(0);' onclick='createNav(8)'>방패병</a>";

   if (pageNum == 1) {
      A.innerHTML = "<a class='nav-link active' href='javascript:void(0);' onclick='createNav(1)'>총잡이</a>";
   }
   else if (pageNum == 2) {
      B.innerHTML = "<a class='nav-link active' href='javascript:void(0);' onclick='createNav(2)'>난동꾼</a>";
   }
   else if (pageNum == 3) {
      C.innerHTML = "<a class='nav-link active' href='javascript:void(0);' onclick='createNav(3)'>위생병</a>";
   }
   else if (pageNum == 4) {
      D.innerHTML = "<a class='nav-link active' href='javascript:void(0);' onclick='createNav(4)'>해결사</a>";
   }
   else if (pageNum == 5) {
      E.innerHTML = "<a class='nav-link active' href='javascript:void(0);' onclick='createNav(5)'>학살자</a>";
   }
   else if (pageNum == 6) {
      F.innerHTML = "<a class='nav-link active' href='javascript:void(0);' onclick='createNav(6)'>파괴자</a>";
   }
   else if (pageNum == 7) {
      G.innerHTML = "<a class='nav-link active' href='javascript:void(0);' onclick='createNav(7)'>드론마스터</a>";
   }
   else if (pageNum == 8) {
      H.innerHTML = "<a class='nav-link active' href='javascript:void(0);' onclick='createNav(8)'>방패병</a>";
   }
   else {
      alert("error! pageNum = " + pageNum);
   }

   ul.appendChild(A);
   ul.appendChild(B);
   ul.appendChild(C);
   ul.appendChild(D);
   ul.appendChild(E);
   ul.appendChild(F);
   ul.appendChild(G);
   ul.appendChild(H);
   div.appendChild(ul);

   var temp = document.createElement('button');
   temp.setAttribute('class', 'btn btn-primary');
   temp.setAttribute('type', 'button');
   temp.setAttribute('onclick', "help();");
   temp.innerHTML += "도움말";

   div.appendChild(temp);


   nav.appendChild(div);
}
//==================================================================================

function createNav(pageNum) { // nav를 생성하는 함수
   nav = document.getElementById("nav");
   nav.innerHTML = "";
   nav.setAttribute('class', 'navbar navbar-expand-lg navbar-light fixed-top');

   nav.innerHTML += "<a class='navbar-brand' href='https://github.com/shangus1012/WWZ'>월드워Z</a>";
   button();//function
   pageList(pageNum);//function
   createTable(pageNum);
}
