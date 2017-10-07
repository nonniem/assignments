var goombaPrice = parseInt($('#goomba-price').html())


$('#Calculate').click(function() {
    var goombaCount = parseInt($('#goomba-count').val());
    var goombaTotal = goombaPrice * goombaCount;
    $('#goomba-total').html(goombaTotal); 
});



var bobombsPrice = parseInt($('#bobomb-price').html());


$('#calc').click(function() {
    var bobombCount = parseInt($('#bobomb-count').val());
    var bobombTotal = bobombsPrice * bobombCount;
    $('#bobomb-total').html(bobombTotal);
});



var cheepPrice = parseInt($("#cheep-price").html());


$('#calculate').click(function() {
    var cheepCount = parseInt($('#cheep-count').val());
    var cheepTotal = cheepPrice * cheepCount;
    $('#cheep-total').html(cheepTotal);
});



$('#button').click(function() { 
    var goombaTotal = $('#goomba-total').html();
    var bobombTotal = $('#bobomb-total').html();
    var cheepTotal = $('#cheep-total').html();
    var myResult = parseInt(cheepTotal) + parseInt(bobombTotal) + parseInt(goombaTotal);
    $('#sum').html(myResult);
    $('#playAudio').play();
});


