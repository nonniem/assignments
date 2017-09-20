var employees = [];

function EmployeeInfo (name, job, salary, status){
    this.name = name;
    this.job = job;
    this.salary = salary;
    this.status = status || "Full-Time";
}

var employee = new EmployeeInfo ("Bob", "mental health", "170000");
                employees.push(employee);
var employee = new EmployeeInfo ("dennis", "Doctor", "30000" );
                employees.push(employee);
var employee = new EmployeeInfo ("robbie", "Tennis", "50000", "Part-Time");
                employees.push(employee);
var employee = new EmployeeInfo ("kelly", "chiropractor", "40000");
                employees.push(employee);
EmployeeInfo.prototype.speak = function(){
    console.log("My name is " + this.name + " I make this much money bish " + this.job + this.salary + this.status + " The real slim shady")
}

console.log(employees);


