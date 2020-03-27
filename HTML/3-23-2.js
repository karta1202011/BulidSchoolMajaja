var obj = new Object();
var object = {}; //object literals

//用object持有資料
var person = {
    name: "lLie",
    email: "lLie@gmail.com",
    phone: "0922-155342"
}

//Ex2 存取物件屬性
// title('存取物件屬性');
// console.log(`${person.name},${person.email},${person.phone}`);
// console.log(`${person["name"]},${person["email"]},${person["phone"]}`);

var mary = {
    name: "Mary",
    email: "Mary@gmail.com",
    phone: "0933-155342"
}

var array1 = [person, mary];
console.log('..........................');
console.log(array1[0]);
console.log('..........................');
console.log(array1[1]);

console.log(array1[0].name);
console.log(array1[0].email);
console.log(array1[0].phone);
console.log('........Json........');
var personString = JSON.stringify(array1);
console.log(personString);
console.log('Type is : ' + typeof personString);



var personobject =JSON.stringify(personString);
console.log(personobject);
console.log(typeof personobject);
