function gameof3(num, count = 0){
  if(num === 1) return count;
  if(num % 3 === 0){
        count++;
        return gameof3(num/3, count);
  } else if((num - 1) % 3 === 0){
        count++;
        return gameof3((num-1)/3, count);
  } else if((num + 1) % 3 === 0){
        count++;
        return gameof3((num+1)/3, count);
  }
  return count;
}

module.exports = gameof3;
