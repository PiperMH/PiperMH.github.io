function openNav() {
    document.getElementById("myNav").style.width = "100%";
}

function closeNav() {
    document.getElementById("myNav").style.width = "0%";
}

$(".buttonGallery").hover(function() {
    $('#projectOne').addClass('animated pulse');
}, function(){
    $('#projectOne').removeClass('animated pulse');
});

$(".buttonGallery2").hover(function() {
    $('#projectTwo').addClass('animated pulse');
}, function(){
    $('#projectTwo').removeClass('animated pulse');
});

$(".buttonGallery3").hover(function() {
    $('#projectThree').addClass('animated pulse');
}, function(){
    $('#projectThree').removeClass('animated pulse');
});

$(".buttonGallery4").hover(function() {
    $('#projectFour').addClass('animated pulse');
}, function(){
    $('#projectFour').removeClass('animated pulse');
});


$(".infoButton").hover(function() {
    $('.infoButton').addClass('animated pulse');
}, function(){
    $('.infoButton').removeClass('animated pulse');
});


$(".infoButton2").hover(function() {
    $('.infoButton2').addClass('animated pulse');
}, function(){
    $('.infoButton2').removeClass('animated pulse');
});

$(".infoButton3").hover(function() {
    $('.infoButton3').addClass('animated pulse');
}, function(){
    $('.infoButton3').removeClass('animated pulse');
});
