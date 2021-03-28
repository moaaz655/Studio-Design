/*global $, window*/

$(function () {
   
    'use strict';
    
    // Trigger Nice Scroll
    
    $("body").niceScroll({
        
      cursorcolor:"#f7600e",
        
      cursorborder:"1px solid #f7600e",
        
      cursorwidth:"8px"    
        
    });
    
    // Adjust Header Height
//    
//    var myHeader = $('.header');
//    
//    myHeader.height($(window).height());
//    
//    $('window').resize(function () {
//       
//        myHeader.height($(window).height());
//        
//        });
//    
    // Smooth Scroll To Div
    
    $('.about').click(function () {
       
        $('html, body').animate({
            
            scrollTop: $('div.our-team').offset().top
            
        }, 2000);
        
    });
    
    $('.feature').click(function () {
       
        $('html, body').animate({
            
            scrollTop: $('div.features').offset().top
            
        }, 2000);
        
    });
    
    $('.clients').click(function () {
       
        $('html, body').animate({
            
            scrollTop: $('div.testim').offset().top
            
        }, 2000);
        
    });
    
    $('.cont').click(function () {
       
        $('html, body').animate({
            
            scrollTop: $('div.contact').offset().top
            
        }, 2000);
        
    });
    
    $('.our').click(function () {
       
        $('html, body').animate({
            
            scrollTop: $('div.our-work').offset().top
            
        }, 2000);
        
    });
    
    // Scroll To Features
    
    $('.header .arrow i').click(function () {
        
        $('html, body').animate({
            
            scrollTop: $('.features').offset().top
            
        }, 2000);
         
    });
    
    $('.hire').click(function(){
       
        $('html, body').animate({
            
            scrollTop: $('.our-team').offset().top
            
        }, 2000);
        
    });
    
    $('.work').click(function(){
       
        $('html, body').animate({
            
            scrollTop: $('.our-work').offset().top
            
        }, 2000);
        
    });
    
    // Show Hidden Items From Work
    
    $('.show-more').click(function () {
       
        $('.our-work .hidden').fadeIn(2000);
        
    });
    
    // Check Testimonials
    
    var leftArrow = $('.testim .fa-chevron-left'),
        
        rightArrow = $('.testim .fa-chevron-right');
    
    
    function checkClients() {
        
        $('.client:first').hasClass('active') ? leftArrow.fadeOut() : leftArrow.fadeIn();
        
        $('.client:last').hasClass('active') ? rightArrow.fadeOut() : rightArrow.fadeIn();
        
    }
    
    checkClients();
    
    $('.testim i').click(function () {
       
        if ($(this).hasClass('fa-chevron-right')) {
            
            $('.testim .active').fadeOut(1000, function () {
               
                $(this).removeClass('active').next('.client').addClass('active').fadeIn();
                
                checkClients();
                
            });
            
        } else {
            
             $('.testim .active').fadeOut(1000, function () {
               
                $(this).removeClass('active').prev('.client').addClass('active').fadeIn();
                
                checkClients();
                
            });
        }
    });
    
    
});