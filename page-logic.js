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

$('select').click(function(event) {
    event.stopPropagation();
})

$("#lcloseBtn").toggle("slide", { direction: "right" }, 1000);

$('#closeBtn').click(function() {
    $( "#menu" ).css('display','none')
})

$('#menuBtn').click(function() {
    $( "#menu" ).css('display','block');
})

