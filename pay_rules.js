let payRate = 17.30;
let hoursWorked = 45;
let grossPay = hoursWorked * payRate;
let overTimePay = ((payRate * 1.5) * (hoursWorked - 40)) + grossPay;

if(hoursWorked <= 40)
{
    console.log(`No overtime. 40 Hours or less worked. Amount received is $${grossPay.toFixed(2)}.`)
}
else
{
    console.log(`Overtime received. More than 40 hours worked. Amount received is $${overTimePay.toFixed(2)}. `)
}