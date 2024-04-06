const barsBtn = document.querySelector(".navbar_bars");
/* 
변수를 선언하겠다. 
변수 이름 : barsBtn
css 선택자 중  navbar_bars을 btn 에 넣는 것이다
*/

const menu = document.querySelector(".navbar_menu");

const links = document.querySelector(".navbar_links");

/* 
바가 클릭 되었을때 이벤트를 적은것
*/
function barsEvent(){
    console.log("bars Click");
    menu.classList.toggle("active");
    links.classList.toggle("active");
}

barsBtn.addEventListener("click", barsEvent);
