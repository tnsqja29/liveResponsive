
// jQuery
//toggle line => X
function toggleMenu() {
  var $myNav = $('#myNav'); //메뉴 감싸는 전체 컨테이너 변수
  if ($myNav.css("width") == '0px') {   //만약 가로사이즈가 0이면, 
    $('.toggle-container').addClass('active');//토글 버튼에 액티브 클래스 추가하고,
    $myNav.css("width", "100%");  //메뉴 너비 100%로 열기
  } else {  //그렇지 않으면
    $('.toggle-container').removeClass('active'); //액티브 클래스 제거하고
    $myNav.css("width", "0%") //메뉴 너비 0으로 설정후 메뉴 닫기
  }
};

// jQuery
$(function(){
  // layer popup
  $(".layerPopup").on("click",function(){
    $(".popup, .bg").fadeIn(); 
  });
  $(".close, .bg").on("click",function(){
    $(".popup, .bg").fadeOut(); 
  });
});