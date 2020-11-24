/*
<div class="cartElement">
    <div class="positionName">Vans Old School</div>
    <div class="positionSize">Size 42</div>
    <div class="positionNumber">x1</div>
    <div class="positionCoast">600$</div>
</div>
*/

let cart = [];
cart.totalSave = 0.0;
cart.totalCoast = 0.0;

cart.addElement = function(newElem) {
    var found = false;
    cart.forEach(function(existingElem){
        if (existingElem.id == newElem.id && existingElem.size == newElem.size) {
            let positionNumber = existingElem.UIElem.find('.positionNumber');
            let currentNumber = parseInt(positionNumber.text().replace(/x/g, ''));
            positionNumber.text('x' + ++currentNumber);
            existingElem.UIElem.find('.positionCoast').text(`$ ${parseInt(existingElem.coast) * currentNumber}`);
            found = true;
        }
    })
    if (!found) {
        newElem.UIElem = $(
            `<div class="cartElement">
                <div class="positionName">${ newElem.name }</div>
                <div class="positionSize">${ newElem.size }</div>
                <div class="positionNumber"> x1 </div>
                <div class="positionCoast">$ ${ newElem.coast }</div>
            </div>`).appendTo('.cart-container');
        cart.push(newElem);
    }
    cart.totalCoast += parseInt(newElem.coast);
    cart.totalSave += parseInt(newElem.saving);
    $('.save-value').text(cart.totalSave);
    $('.coast-value').text(cart.totalCoast);
    console.log('coast: ' + cart.totalCoast);
    console.log('saving: ' + cart.totalSaving);
}

$('.myButton').click( function(event){
    event.stopPropagation();
    let newElement = {
        name: $(this).attr('name'),
        size: $(this).attr('size'),
        coast: $(this).attr('coast'),
        saving: $(this).attr('saving'),
        id: $(this).attr('id')
    }
    cart.addElement(newElement);
})

$('.size-select').change(function(event) {
    let value = event.target.value;
    $(this).parent().next().attr('size', value);
})