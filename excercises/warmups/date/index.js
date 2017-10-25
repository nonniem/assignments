function createDate(days) {
        var date = new Date();
        date.setDate(date.getDate() - days);
        return date.toDateString();
    }

  console.log(createDate(1));

  function makeDays(n){
    var date = new Date();
    date.setDate(date.getDate() - n);
    return date.toDateString();
  }

  console.log(makeDays(4))
