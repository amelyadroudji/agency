/***navbar fixed **/
$(window).scroll(function(){
  if($(window).scrollTop() > 10) {
      $(".navbar").addClass("fixed");
  } else {
    $(".navbar").removeClass("fixed");
  }
});

/** fin navar fixed ****/

/** search box **/

$(".search-box-content .search-box-content-inner").hide();
$(".search-box-content .search-box-content-inner:first-child").show();
$(".btn-box div").click(function() {

   $(".btn-box div").removeClass("active");
   if($("."+ currentTab ).hasClass("tab-1")){
       $("#btn1 img").attr("src","images/travel-agency-white.svg");
   }

   $(this).addClass("active");

   var currentTab = $(this).attr("data-list");
   $(".search-box-content .search-box-content-inner").hide();
   $("."+ currentTab).show();
   if($("."+ currentTab ).hasClass("tab-1")){
       $("#btn1 img").attr("src","images/travel-agency.svg");
        $("#btn2 img").attr("src","images/location-white.svg");
        $("#btn3 img").attr("src","images/taxi-white.svg");
   }
   if($("."+ currentTab ).hasClass("tab-2")){
       $("#btn2 img").attr("src","images/location.svg");
       $("#btn3 img").attr("src","images/taxi-white.svg");
       $("#btn1 img").attr("src","images/travel-agency-white.svg");
   }
   if($("."+ currentTab ).hasClass("tab-3")){
       $("#btn3 img").attr("src","images/taxi.svg");
       $("#btn1 img").attr("src","images/travel-agency-white.svg");
       $("#btn2 img").attr("src","images/location-white.svg");
   }

});

/*** fin search box ***/


/**** change active class navbar*/
jQuery(function($) {
     var path = window.location.href;
     $('.navbar .nav-item .nav-link').each(function() {
      if (this.href === path) {
       $(this).addClass('active');
      }
     });
    });

/****fin change active class navbar*/

const sign_in_btn = document.querySelector("#sign-in-btn");
const sign_up_btn = document.querySelector("#sign-up-btn");
const container = document.querySelector(".container1");

sign_up_btn.addEventListener("click", () => {
  container.classList.add("sign-up-mode");
  $(".container1.sign-up-mode form .sign-up-form").css("z-index", 50);
});

sign_in_btn.addEventListener("click", () => {
  container.classList.remove("sign-up-mode");
});


/***********ffffffffffffff**************/

const selectType = $(".select-type");
const precedent = $(".precedent");

$(".user-type-menu ul li label").on("click", function(){
     const user = $(this).text().trim();
     $(".user-type").html(user);
     if(user == 'Utilisateur normale'){
         $("#adress").remove();

     }
});

selectType.click(function(e){
  e.preventDefault();
  container.classList.add("hide-form-div");
});

precedent.click(function(e){
  e.preventDefault();
  container.classList.remove("hide-form-div");
});
