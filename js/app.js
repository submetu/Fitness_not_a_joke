var $overlay=$(' <div id="overlay"></div>');
var $image=$('<img>');
var $heading=$('<h2></h2>')
var $caption=$('<span></span>');
$overlay.append($image);
$heading.append($caption);
$overlay.append($heading);
$("body").append($overlay);

var $contentFour=$('<div id="content-four"></div>');
var $homeContent=$('<div class="home-content">So I guess you\'re ready to change your lifestyle. Eating is a big part of a person\'s life. There is no chance that you can acheive your dream body without paying attention to the stuff you eat. A rule of thumb is 50% exercise, 50% diet. One can\'t go without the other. So lets get straight into it. Head to the <a href="#">kitchen</a></div>');
$contentFour.append($homeContent);
$(".food-gallery").append($contentFour);
$contentFour.hide();

$("#food-list img").click(function(){
    var source=$(this).attr("src");
    var caption=$(this).attr("title");
    $caption.text(caption);
    $image.attr("src",source);
    $("nav").hide(500);
    $overlay.fadeIn(300);
});

$(overlay).click(function(){
    $("nav").show(300);
    $overlay.fadeOut(200);
});

$(".food-gallery span").click(function(){
    $(this).fadeOut(300);
    $contentFour.fadeIn(500);
    
});