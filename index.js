const imgEmployed = document.querySelectorAll('#img');
const nameEmployed = document.querySelector('#nameEmployed');
const amountHours = document.querySelector('#amountHours');
const hourValue = document.querySelector('hourValue');
const totalPay = document.querySelector('#totalPay');
const lessSalud = document.querySelector('#salud');
const lessPension = document.querySelector('#pension');
const btnCalculate = document.querySelector('#btnCalculate');
const monthlySalary = document.querySelector('monthlySalary');
const netSalary = document.querySelector('#netSalary');
const biweeklySalary = document.querySelector('#biweeklySalary');


btnCalculate.addEventListener('click', function(){

    let salary = 0;
    let lessSalud = 0.04;
    let lessPension = 0.04;

    if(amountHours.value < "48" && amountHours.value > "198" ){
        alert ('no se pueden trabajar menos 48 horas y mas 198 horas al mes')
    }else{
        salary = parseInt(hourValue.value) * parseInt(amountHours.value);
        /* console.log(salary); */
    }

    
    




    


    



})