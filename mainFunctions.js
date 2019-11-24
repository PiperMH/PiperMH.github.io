$(document).ready(function () {
       $('.contentOne, .contentTwo, .contentThree, .contentFour').hide();
              $(window).resize(function(){
                     alterClass();
              });
              //Fire it when the page first loads:
              alterClass();

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

$('.collapseIcon').click(function(e){
       $('.nameContainer').toggleClass('collapse');
       $('.mainContainer').toggleClass('collapse');
       $('.contentContainer').toggleClass('collapse');
       $('.innerDiv').toggleClass('collapse');
});

function alterClass(){
       var ww = document.body.clientWidth;
       if (ww < 1026) {
              $('.nameContainer, .mainContainer, .contentContainer, .innerDiv').removeClass('collapse');
       }
};





