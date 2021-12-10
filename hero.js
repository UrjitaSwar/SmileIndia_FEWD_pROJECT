$(document).ready(function(){
    $(window).scroll(function(){
        // MAKING THE NAVBAR STICK.
        if(this.scrollY > 20){
            $('.navbar').addClass("sticky");
        }else{
            $('.navbar').removeClass("sticky");
        }
        
        // scroll-up button show/hide script
        if(this.scrollY > 500){
            $('.scroll-up-btn').addClass("show");
        }else{
            $('.scroll-up-btn').removeClass("show");
        }
    });



    // TOGGLE MENU
    $('.menu-btn').click(function(){
        $('.navbar .menu').toggleClass("active");
        $('.menu-btn i').toggleClass("active");
    });

    // TYPING TEXT ANIMATION
    var typed = new Typed(".typing", {
        strings: [" helping others", "creating awareness", "change."],
        typeSpeed: 100,
        backSpeed: 60,
        loop: true
    });
});