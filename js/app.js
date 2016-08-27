var $overlay=$(' <div id="overlay"></div>');
var $image=$('<img>');
var $heading=$('<h2></h2>')
var $caption=$('<span></span>');
$overlay.append($image);
$heading.append($caption);
$overlay.append($heading);
$("body").append($overlay);


$("#food-list img").click(function(){
    var source=$(this).attr("src");
    var caption=$(this).attr("title");
    $caption.text(caption);
    $image.attr("src",source);
    $overlay.fadeIn(300);
});

$(overlay).click(function(){
    $overlay.fadeOut(200    );
});