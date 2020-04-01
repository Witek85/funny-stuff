(function($) {
    console.log('ok');

    $.fn.funnyStuff = function(settings) {

        var defaults = {
            "color": "green",
            "text": "test text lol"
        }
        
        $.extend( defaults, settings );
        console.log(defaults)

        this.css( "background", defaults.color );
        this.append( "<strong>" + defaults.text + "</strong>" );
    }

})(jQuery);
