function doStuff($) {
    if (!$('body').hasClass('done'))
    {
        $('body').append("<div class='testing'>Hello Me</div>");
        $('body').addClass('done');
    }
}