function ValidateIPaddress(inputText) {
    var ipformat = /^(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)$/;
    var displayIp = document.form1.text1.value;
    var newList = document.getElementById("displayIp")
    if (inputText.value.match(ipformat)) {
        document.form1.text1.focus();
        newList.innerHTML += `<div> Ip Address: <li> ${displayIp} </li> </div>`
        return true;
    } else {
        alert("You have entered an invalid IP address!");
        document.form1.text1.focus(); 
            return false;
    }
}



function add(a, b){
    return a + b;
}

function multiply(a, b){
    return a * b;
}

function divide(a, b){
    return a / b;
}

function sub(a, b){
    return a - b;
}

var describe = function(message, testFunc){
    try {
        testFunc();
    } catch(err) {
        console.error("failure", err);
    }
};

var assert = function(actual, expected) {
    if(actual !== expected) {
        throw {type: "fail", details: {actual:actual, expected: expected}}
     } else {
         console.log("Success", {type: "test passed", details: { actual: actual, expected: expected}});
     }
}

describe("Test group", function(){
    assert(add(1, 2), 3)
    assert(multiply(2, 6), 12)
    assert(divide(9, 3), 3)
    assert(sub(900, 700), 200)
});

