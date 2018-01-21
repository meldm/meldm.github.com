jQuery(document).ready(function ($) {

  $('#checkbox').change(function(){
    setInterval(function () {
        moveRight();
    }, 3000);
  });
  
	var slideCount = $('#slider ul li').length;
	var slideWidth = $('#slider ul li').width();
	var slideHeight = $('#slider ul li').height();
	var sliderUlWidth = slideCount * slideWidth;

	// var slideCount = $('#slider ul li').length;
	// var slideWidth = $('.iphone-screen').width();
	// var slideHeight = $('.iphone-screen').height();
	// var sliderUlWidth = slideCount * slideWidth;
	
	// console.log("slideCount = " + slideCount);
	// console.log("slideWidth = " + slideWidth);
	// console.log("slideHeight = " + slideHeight);
	// console.log("sliderUlWidth = " + sliderUlWidth);

	$('#slider').css({ width: slideWidth, height: slideHeight });
	
	$('#slider ul').css({ width: sliderUlWidth, marginLeft: - slideWidth });
	
    $('#slider ul li:last-child').prependTo('#slider ul');

    function moveLeft() {
        $('#slider ul').animate({
            left: + slideWidth
        }, 200, function () {
            $('#slider ul li:last-child').prependTo('#slider ul');
            $('#slider ul').css('left', '');
        });
    };

    function moveRight() {
        $('#slider ul').animate({
            left: - slideWidth
        }, 200, function () {
            $('#slider ul li:first-child').appendTo('#slider ul');
            $('#slider ul').css('left', '');
        });
    };

    $('div.control_prev').click(function () {
        moveLeft();
    });

    $('div.control_next').click(function () {
        moveRight();
    });

});