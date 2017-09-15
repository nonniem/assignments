

function find_unique_characters(str) {
  var unique = '';
  var common = '';
  for (var i = 0; i < str.length; i++) {
    if (str.lastIndexOf(str[i]) == str.indexOf(str[i])) {
      unique += str[i];
    } else {
        common += str[i];
    }
  }
  return {
      unique, 
      common
  }
  
}

console.log(find_unique_characters('baraban'));
console.log(find_unique_characters('anaconda'));
