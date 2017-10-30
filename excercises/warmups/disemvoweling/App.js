const disemvowel = function(str){
    let output = {
        str: "",
        vowels: ""
    }
    for(let i = 0; i < str.length; i++){
        if(str[i].match(/[aeiou]/)){
            output.vowels += str[i];
        } else if(str[i].match(/\s/)) {
            continue;
        } else {
            output.str += str[i];
        }
    }
    return output;
}

console.log(disemvowel("test"));
module.exports = disemvowel;
