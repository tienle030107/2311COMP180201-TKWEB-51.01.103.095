$(document).ready(function(){
    $('.product-card').click(function(){
        var details = $(this).data('details');
        $('#product-details').text(details);
    });
});