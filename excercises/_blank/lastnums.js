function lastNums(num1, num2){
    var lastDigi1 = (Array.from(num1.tostring())).pop();
    var lastDigi2 = (Array.from(num2.tostring())).pop();
    if (lastDigi1 === lastDigi2){
        return true;
    } else {
        return false;
    }
}
module.exports = lastNums;