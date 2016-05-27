console.log("Javascript is alive!");
/*******PAGE LOAD**********/
//1.
$(function(){
    $('#greeting').html('Hello, World!');
});

//2.
$(function(){
    $('li').css("background-color", "yellow");
});

//3.
$(function(){
    var gif = '<img src="http://49.media.tumblr.com/tumblr_m6qt1rjPSz1rxjzkho1_500.gif"/>';
    $('#greeting').append(gif);
});

/*******AFTERWARDS**********/

//1..delegate( selector, eventType, handler )
$(function(){
    var liItem = $('li');
    $('ul').delegate(liItem, 'click', function(){
        liItem.addClass('selected');
    });
});

//2.
$(function(){

});

//3.
$(function(){
    $('#ghosting').on('mouseover', function(){
        $(this).remove();
    });
});

//4.
$(function(){
    $('#resize').on('mouseover', function () {
        $(this).css("width", "400px");
    });
    $('#resize').on('mouseout', function(){
        $(this).css("width", "200px");
    });
});

//5.$("#my-img").attr("src", "www.new-url.com/images/my-img.png");


$(function(){
    $('#reset').on('click', function () {
        $('li').removeClass('selected');
        $('[alt=beer]').attr("src", "./images/panic.jpeg");
    });
});

//6.
$(function(){

    var e = jQuery.Event("keydown");
    e.which = 49; // #1 key code value
    $("input").trigger(e);

});
