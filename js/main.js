/*global $ */

$(document).ready(function () {

    // Slider To Image 
    
    $('.slider').slick({
      dots: true,
      infinite: true,
      speed: 900,
      autoplay: true,
      autoplaySpeed: 2000,
      cssEase: 'linear',

    
});
    
    
   
    
   // nav Bar slider
    
    
    $(".nav").animate({marginTop: "0" }, 500, function () {
        
        $(".nav .logo").animate({marginLeft: "3%" }, 500);
        $(".nav-menu .icon").animate({right: "2%" }, 500);
    });
    
   
    $(".services").click( function () {
        $(".services-list").slideToggle();
        $(this).toggleClass("other-serv");
        $(".services a, .services i").toggleClass("link-serv");
        
    });
    
    $(".services-menu").click( function () {
        $(".s-m-l").slideToggle();
    });
    
    
     
    
    
    $(".slider").animate({height: "410px" }, 1500, function () {
        $(".slider .slide-content").fadeIn(700);
        $(".slick-prev").animate({left: "0"});
        $(".slick-next").animate({right: "0"});
        $(".slick-dots").animate({bottom: "0"});
        $(".after-slider, .our-feature, .our-client, .our-price, .our-team, .keep, .messages, .adv, .footer").fadeIn(1500);
        
    });
    
    $(".nav-menu .icon").click( function () {
        
        $(".nav-menu .menu-list").slideToggle();
        
    });
    
    $(".nav .logo").hover( function () {
        $(".nav .logo div").css("opacity" , "1");
    });
    $(".nav .logo").mouseleave( function () {
        $(".nav .logo div").css("opacity" , ".4");
    });
    
    
    
    $("nav .nav-list .services a").hover( function () {
     $("nav .nav-list .services i").css({ color: "#fff"});
    });
    $("nav .nav-list .services a").mouseleave( function () {
     $("nav .nav-list .services i").css({ color: "#d0d0d0"});
    });
    
    // our price
    $(".our-price .n-price").hover( function () {
        
        $(".our-price .t-price").animate({transform: "rotate(0deg)"}, 2000)
    }); 
    
    // team icons
    $(".our-team .chris").hover( function () {
        $(".chris .team-emails").toggleClass("clint-icons"); }); 
    $(".our-team .leah").hover( function () {
        $(".leah .team-emails").toggleClass("clint-icons"); }); 
    $(".our-team .steve").hover( function () {
        $(".steve .team-emails").toggleClass("clint-icons"); }); 
    $(".our-team .marssia").hover( function () {
        $(".marssia .team-emails").toggleClass("clint-icons"); });
    
    // scroll up
    $(".scroll-up").click(function () {
        
        $(document).scrollTop(0)
    })
});
