$(".submenu").click(function(){
    $(this).children("ul").slideToggle();
  })
  
  $("ul").click(function(ev){
    ev.stopPropagation();
  })
  
function openNav() {
    document.getElementById("sideNavigation").style.width = "250px";
    document.getElementById("main").style.marginLeft = "250px";
}
function closeNav() {
    document.getElementById("sideNavigation").style.width = "0";
    document.getElementById("main").style.marginLeft = "0";
}

var mySwiper = new Swiper(".swiper-container", {
    direction: "vertical",
    loop: true,
    pagination: ".swiper-pagination",
    grabCursor: true,
    speed: 1000,
    paginationClickable: true,
    parallax: true,
    autoplay: false,
    effect: "slide",
    mousewheelControl: 1
  });

  new Drift(document.querySelector('.drift-demo-trigger'), {
    paneContainer: document.querySelector('.details'),
    inlinePane: 769,
    inlineOffsetY: -85,
    containInline: true,
    hoverBoundingBox: true
  });
  