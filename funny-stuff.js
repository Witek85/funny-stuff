(function($) {
    console.log('ok');

    $.fn.funnyStuff = function() {
        this.css( "background", "green" );
        this.append( "<strong>lol</strong>" );
    }

})(jQuery);
