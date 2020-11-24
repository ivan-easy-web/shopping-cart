var $grid = $('.grid').masonry({
    // options...
    itemSelector: '.grid-item',
    gutter: 20
});

$('.grid-card').click( function(event) {
    event.stopPropagation();
    $(this).addClass('modalCard').parent().addClass('modalBackground');
    
})

$('body').on('click', '.modalBackground', function(event) {
    event.stopPropagation();
    $(this).removeClass('modalBackground').children().removeClass('modalCard');
})