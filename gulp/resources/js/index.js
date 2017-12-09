;(function (window, document, $, undefined) {
    'use strict';

    var Test = (function () {

        var $private = {},
            $public = {};

        $public.doSomething = function () {
            console.log("testing");
        };

        return $public;
    })();

    // Global
    window.Test = test;
    test.doSomething();

})(window, document, jQuery);