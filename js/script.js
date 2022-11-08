let courselist=[{"ACIT 1620":"Fundamental Web Technology","ACIT 1515":"Scripting for IT","ACIT 1630":"Database Systems"}];
let input;
do{
    input=(prompt("Enter a 4-digit number."));
}while(isNaN(Number(input)) || input.length != 4 )