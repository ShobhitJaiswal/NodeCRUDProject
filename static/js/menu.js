
$(document).ready(function(){
$('.show_cross').hide();
$('.show_bars').on('click', function () {
 $('.ordersitmes').toggleClass('open');
 $('.show_bars').hide();
 $('.show_cross').show();
});

$('.show_cross').on('click', function () {
 $('.show_bars').show();
 $('.show_cross').hide();
  $('.ordersitmes').toggleClass('open');
});
$( '.ordersitmes a' ).on("click", function(){
$('.ordersitmes').hide();
});

});
$(document).ready(function()
{
 $("#show_login").click(function(){
  showpopup();
 });
 $("#close_login").click(function(){
  hidepopup();
 });
});

function showpopup()
{
 $("#loginform").fadeIn();
 $("#loginform").css({"visibility":"visible","display":"block"});
}

function hidepopup()
{
 $("#loginform").fadeOut();
 $("#loginform").css({"visibility":"hidden","display":"none"});
}