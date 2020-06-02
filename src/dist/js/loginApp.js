//-----------------------------------------------
$('.gate button').on('click', function(){
   $('.gate').addClass('active');
   $('.card-login').css('visibility','visible');
});
$('.gate .arrow').on('click', function(){
    $('.gate').removeClass('active');
    $('.card-login').css('visibility','hidden');
});

//signin signup
// if($('.card-login .in').on('click', function(){
//     $(this)
// }

if($('.card-login .in').on('click' , function () {
    $(this).addClass('active');
    $('.card-login .up').removeClass('active');
}));
if($('.card-login .up').on('click' , function () {
    $(this).addClass('active');
    $('.card-login .in').removeClass('active');
}));
