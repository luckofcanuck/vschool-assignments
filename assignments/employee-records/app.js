var employees = [];


function Employee(name, job, salary, status){
    this.Name = name;
    this.Job = job;
    this.Salary = salary;
    this.Status = status || "Full Time";
    this.printEmployeeForm = function (){
        console.log("Employee Name: " + this.Name + ". Job Title: " + this.Job + ". Monthly Salary in Dollars: " + this.Salary + ". Status: " + this.Status + ".");
    }
}

var tim = new Employee("Tim Dawson", "Argonaut", 555000, "Part Time");
var duane = new Employee("Duane Duaneson", "Cattle Drover", 490, "Contract");
var alan = new Employee("Alan Alanson", "Singer", 1100);


tim.printEmployeeForm();
duane.printEmployeeForm();
alan.printEmployeeForm();

employees.push(tim);
employees.push(duane);
employees.push(alan);

console.log(employees);





//for (var i = 0; i < 1; i++){
//    employees.push(tim);
//    employees.push(duane);
//    employees.push(alan);
//}
