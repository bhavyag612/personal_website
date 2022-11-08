let courselist=[
    {code: "ACIT 1620",
    name: "Fundamental Web Technology"},
    {code: "ACIT 1515",
    name: "Scripting for IT"},
    {code: "ACIT 1630",
    name:"Database Systems"}
];
let input;
do{
    input=(prompt("Enter a 4-digit number."));
}while(isNaN(Number(input)) || input.length != 4 )