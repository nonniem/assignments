var goombaPrice =parseInt(document.getElementById("goomba-price").innerHTML)


document.getElementById("Calculate").addEventListener("click", function (){
    var goombaCount = parseInt(document.getElementById("goomba-count").value);
    var goombaTotal = goombaPrice * goombaCount;
    document.getElementById("goomba-total").innerHTML = goombaTotal
});



var bobombsPrice =parseInt(document.getElementById("bobomb-price").innerHTML)


document.getElementById("calc").addEventListener("click", function (){
    var bobombCount = parseInt(document.getElementById("bobomb-count").value);
    var bobombTotal = bobombsPrice * bobombCount;
    document.getElementById("bobomb-total").innerHTML = bobombTotal
});



var cheepPrice =parseInt(document.getElementById("cheep-price").innerHTML)


document.getElementById("calculate").addEventListener("click", function (){
    var cheepCount = parseInt(document.getElementById("cheep-count").value);
    var cheepTotal = cheepPrice * cheepCount;
    document.getElementById("cheep-total").innerHTML = cheepTotal
});

    function calculatee() {
        var goomba = document.getElementById('goomba-total').value;    
        var bobomb = document.getElementById('bobomb-total').value;
        var cheep = document.getElementById('cheep-total').value;    
        var myResult = ('goomba' + 'bobomb' + 'cheep')
         document.getElementById("total").innerHTML = 'value'
    };

