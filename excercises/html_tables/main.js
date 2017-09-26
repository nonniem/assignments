function total () {
//    for (var i = 0;i < total.length; i++){
//        if (total[i] === true)
//          return();
// }
//   
    var form = document.getElementById('travel');
    var firstname = document.travel.firstname.value;
    var lastname = document.travel.lastname.value;
    var age = document.travel.age.value;
    var male = document.travel.male.checked;
    var female = document.travel.female.checked;
    var undecided = document.travel.undecided.checked;
    var maui = document.travel.maui.checked;
    var lasvegas = document.travel.lasvegas.checked;
    var puertorico = document.travel.puertorico.checked;
    var latex = document.travel.latex.checked;
    var dairy = document.travel.dairy.checked;
    var treenuts = document.travel.treenuts.checked;
    var other = document.travel.other.value;
    

    var total = `${firstname}
                ${lastname}
                ${age}
                ${male}
                ${female}
                ${undecided}
                ${maui}
                ${lasvegas}
                ${puertorico}
                ${latex}
                ${dairy}
                ${treenuts}
                 ${other}`
    return total;
}

function showMessage() {
    alert(total());
}

