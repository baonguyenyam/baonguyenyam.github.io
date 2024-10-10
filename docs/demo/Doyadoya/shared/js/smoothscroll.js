$(function () {
        // PageTopヘッダ分ずらす
        var headH = 0;

        // PageTop
        $('a[href^=#], area[href^=#]').not('a[href=#], area[href=#]').each(function () {
                // jquery.easing
                jQuery.easing.quart = function (x, t, b, c, d) {
                        return -c * ((t = t / d - 1) * t * t * t - 1) + b;
                };
                if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname && this.hash.replace(/#/, '')) {
                        var $targetId = $(this.hash),
                                $targetAnchor = $('[name=' + this.hash.slice(1) + ']');
                        var $target = $targetId.length ? $targetId : $targetAnchor.length ? $targetAnchor : false;
                        if ($target) {
                                var targetOffset = $target.offset().top - headH;
                                $(this).click(function () {
                                        $('html, body').animate({
                                                scrollTop: targetOffset
                                        }, 500, 'quart');
                                        return false;
                                });
                        }
                }
        });
                if (location.hash) {
                        var hash = location.hash;
                        window.scroll(0, headH)
                        $('a[href=' + hash + ']').click();
                }
});