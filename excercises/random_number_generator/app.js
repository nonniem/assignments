function randomGenerator(length) {
    var charset = "abcdefghijklmnopqrstuvwxyz1234567890",
        retVal = "";
    for (var i = 0; i < length; i++) {
        retVal += charset.charAt(Math.floor(Math.random() * charset.length));
    }
    return retVal;
}
console.log(randomGenerator(256));




function randomGenerator(num) {
    var alphaArray = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z", "A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", 1, 2, 3, 4, 5, 6, 7, 8, 9, 0, "!", "@", "$", "%", "^", "&", "*", "<", ">"];
    var passArray = [];
    for (var i = 0; i < num; i++) {
        passArray.push(alphaArray[Math.floor(Math.random() * 70)]);
    }
    return passArray.join('');
}

console.log(randomGenerator(10));