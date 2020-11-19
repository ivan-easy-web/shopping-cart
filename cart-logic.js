/*
<div class="cartElement">
    <div class="positionName">Vans Old School</div>
    <div class="positionSize">Size 42</div>
    <div class="positionNumber">x1</div>
    <div class="positionCoast">600$</div>
</div>
*/

$('.myButton').click( function(event){
    $(`<div class="cartElement">
        <div class="positionName">${ $(this).attr('name') }</div>
        <div class="positionSize">${ $(this).attr('size') }</div>
        <div class="positionNumber"> x1 </div>
        <div class="positionCoast">${ $(this).attr('price') }</div>
    </div>`).appendTo('.cart');
})