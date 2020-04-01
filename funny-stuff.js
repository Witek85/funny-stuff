(function($) {
    console.log('ok');

    $.fn.funnyStuff = function(settings) {

        var defaults = {
            "color": "green",
            "text": "test text lol"
        }

        if (typeof settings == 'object') {
            $.extend( defaults, settings );
        }
        console.log(defaults)

        this.css( "background", defaults.color );
        this.append( "<strong>" + defaults.text + "</strong>" );
    }

})(jQuery);
