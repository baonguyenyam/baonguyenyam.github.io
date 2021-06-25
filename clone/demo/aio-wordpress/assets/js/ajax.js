$(function() {
    $.ajaxSetup({
        headers: {
            'X-CSRF-TOKEN': $('meta[name="csrf-token"]').attr('content')
        }
    });

    $('body').on('click', '.js-ajax-send', function(e){
        var $this = $(this);
        var form = $('.overlay-form .form');
        var formdata = false;
        if (window.FormData){
            formdata = new FormData(form[0]);
        }
        if(!$this.closest('[data-slide]').find('.is-error').length) {
            $.ajax({
                url: $this.data('action'),
                data: formdata ? formdata : form.serialize(),
                cache       : false,
                contentType : false,
                processData : false,
                type        : 'POST',
                success: function (data) {
                    console.log(data);
                }
            });
        }
    });
});