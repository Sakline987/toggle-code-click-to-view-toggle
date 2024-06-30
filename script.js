(function ($) {
    "use strict";

    $(document).ready(function () {

        $('.toggle').click(function (e) {
            e.preventDefault();

            let $this = $(this);

            if ($this.next().hasClass('show')) {
                $this.next().removeClass('show');
                $this.next().slideUp(350);
            } else {
                $this.parent().parent().find('li .inner').removeClass('show');
                $this.parent().parent().find('li .inner').slideUp(350);
                $this.next().toggleClass('show');
                $this.next().slideToggle(350);
            }

            if ($this.hasClass('toggleIcon')) {
                $this.removeClass('toggleIcon');
            } else {
                $this.parent().parent().find('li a').removeClass('toggleIcon');
                $this.toggleClass('toggleIcon');
            }
        });
    });

}(jQuery));



