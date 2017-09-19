var employees = [];

function EmployeeInfo (name, job, salary, status){
    this.name = name;
    this.job = job;
    this.salary = salary;
    this.status = status;
}

var employee = new EmployeeInfo ("Bob", "mental health", "170000", "Fulltime");
                employees.push(employee);
var employee = new EmployeeInfo ("dennis", "Doctor", "30000", "Fulltime");
                employees.push(employee);
var employee = new EmployeeInfo ("robbie", "Tennis", "50000", "Fulltime");
                employees.push(employee);
var employee = new EmployeeInfo ("kelly", "chiropractor", "40000", "Fulltime");
                employees.push(employee);
EmployeeInfo.prototype.speak = function(){
    console.log("My name is " + this.name + " I make this much money bish " + this.job + this.salary + this.status + " The real slim shady")
}

console.log(employees);


