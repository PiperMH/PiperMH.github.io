$(document).ready(function () {
       $('.contentOne, .contentTwo, .contentThree, .contentFour').hide();
});
$('.projOne').click(function(e){
       if ($(this).hasClass('active')) {
              $(this).removeClass('active');
              $('.projectContainer').removeClass('horzSquares');
              $('.contentOne').hide();

       }else{
              $('.projTwo, .projThree, .projFour').removeClass('active');
              $('.projOne').addClass('active');
              $('.projectContainer').addClass('horzSquares');
              $('.contentThree, .contentFour, .contentTwo').hide();
              $('.contentOne').show();
       }

});
$('.projTwo').click(function(e){
       if ($(this).hasClass('active')) {
              $(this).removeClass('active');
              $('.projectContainer').removeClass('horzSquares');
              $('.contentTwo').hide();

       }else{
              $('.projOne, .projThree, .projFour').removeClass('active');
              $('.projTwo').addClass('active');
              $('.projectContainer').addClass('horzSquares');
              $('.contentThree, .contentFour, .contentOne').hide();
              $('.contentTwo').show();
       }

});

$('.projThree').click(function(e){
       if ($(this).hasClass('active')) {
              $(this).removeClass('active');
              $('.projectContainer').removeClass('horzSquares');
              $('.contentThree').hide();

       }else{
              $('.projOne, .projTwo, .projFour').removeClass('active');
              $('.projThree').addClass('active');
              $('.projectContainer').addClass('horzSquares');
              $('.contentOne, .contentTwo, .contentFour').hide();
              $('.contentThree').show();
       }

});

$('.projFour').click(function(e){
       if ($(this).hasClass('active')) {
              $(this).removeClass('active');
              $('.projectContainer').removeClass('horzSquares');
              $('.contentFour').hide();

       }else{
              $('.projOne, .projTwo, .projThree').removeClass('active');
              $('.projFour').addClass('active');
              $('.projectContainer').addClass('horzSquares');
              $('.contentOne, .contentTwo, .contentThree').hide();
              $('.contentFour').show();
       }

});



/*$('.projTwo').click(function(e){

       $('.contentTwo').toggle();
       $('.contentThree').hide();
       $('.contentFour').hide();
       $('.contentOne').hide();
});
$('.projThree').click(function(e){
       $('.contentThree').toggle();
       $('.contentTwo').hide();
       $('.contentFour').hide();
       $('.contentOne').hide();
});
$('.projFour').click(function(e){
       $('.contentFour').toggle();
       $('.contentTwo').hide();
       $('.contentThree').hide();
       $('.contentOne').hide();
});*/



