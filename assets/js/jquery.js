$(document).ready(function(){
    $(".picture").click(function(event) {
        event.preventDefault(); 
    });


     /* home slider */

    $("#top-slider").click(function(event) {
        event.preventDefault(); 
    });
    
    var slideCount = $('#top-slider ul li').lenght;
    var slideWidth = $('#top-slider ul li').width();
    var slideHeight = $('#top-slider ul li').height();

    var slideUlWidth = slideCount * slideWidth;
    $('#top-slider').css({width: slideWidth, height: slideHeight});

    $('#top-slider ul').css({width: slideUlWidth, marginLeft: -slideWidth});

    $('#top-slider ul li:last-child').prependTo('#top-slider ul');

    function moveLeft(){
        $('#top-slider ul').animate({
            left: +slideWidth
        },1000 ,function(){
            $('#top-slider ul li:last-child').prependTo('#top-slider ul');
            $('#top-slider ul').css('left', '0');
        });
    };

    function moveRight(){
        $('#top-slider ul').animate({
            left: -slideWidth
        },1000, function(){
            $('#top-slider ul li:first-child').appendTo('#top-slider ul');
            $('#top-slider ul').css('left', '0');
        });
    };

    $('a.control-prev').click(function(){
        moveLeft();
    });

    $('a.control-next').click(function(){
        moveRight();
    })


});