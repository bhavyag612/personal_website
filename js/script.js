course1={
    code: "ACIT 1620",
    name: "Fundamental Web Technology"
};
course2={
    code: "ACIT 1515",
    name: "Scripting for IT"
};
course3={
    code: "ACIT 1630",
    name:"Database Systems"
}
const courselist=[course1,course2,course3];

let input;
do{
    input=(prompt("Enter a 4-digit number."));
}while(isNaN(Number(input)) || input.length != 4 )

count=0;
for (let courseCode of courselist){
    if (courseCode.code.includes(input)){
        console.log(`Yes I am taking the course: ${courseCode.code} - ${courseCode.name}`)
        count++;
        break;
    }
}
if (count=== 0){
    obj={}
    obj.code= input;
    obj.name= null;
    courselist.push(obj);
    console.log("Success!")
}

