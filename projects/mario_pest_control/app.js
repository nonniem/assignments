var goombaPrice = parseInt(document.getElementById("goomba-price").innerHTML)


$('#Calculate').click (function () {
    var goombaCount = parseInt($("#goomba-count").val());
    var goombaTotal = goombaPrice * goombaCount;
    $("#goomba-total").html (goombaTotal)
});


$('document').ready(function (){
        $('#calculate').click(function () {
            var audio = [];
            audio("walk")
        })
});






var bobombsPrice = parseInt(document.getElementById("bobomb-price").innerHTML)


document.getElementById("calc").addEventListener("click", function () {
    var bobombCount = parseInt(document.getElementById("bobomb-count").value);
    var bobombTotal = bobombsPrice * bobombCount;
    document.getElementById("bobomb-total").innerHTML = bobombTotal
});



var cheepPrice = parseInt(document.getElementById("cheep-price").innerHTML)


document.getElementById("calculate").addEventListener("click", function () {
    var cheepCount = parseInt(document.getElementById("cheep-count").value);
    var cheepTotal = cheepPrice * cheepCount;
    document.getElementById("cheep-total").innerHTML = cheepTotal
});



document.getElementById("button").addEventListener("click", function () {
    var goombaTotal = document.getElementById('goomba-total').innerHTML;
    var bobombTotal = document.getElementById('bobomb-total').innerHTML;
    var cheepTotal = document.getElementById('cheep-total').innerHTML;
    var myResult = parseInt(cheepTotal) + parseInt(bobombTotal) + parseInt(goombaTotal);
    document.getElementById("sum").innerHTML = myResult
});
