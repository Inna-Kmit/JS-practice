// functions 
// const userName = 'Inna';
// const age = 21;
// const gender = 'female';

// function greeting(name, age, gender){
// // const name = "Inna";
// alert ('Hello, dear' + name);
// if (age < 18){
//     return ('you are too young');
// }
// if (gender === 'female'){
// return ('welcome to the club')
// }
// };
// greeting(name, age, gender)

// function createUserNmae (){
//     return 'Inna';

// }
// const userName = createUserNmae();
// console.log(userName);

// const userName = 'Inna';
// function createUserName(name){
//     return name.toUpperCase();
// }
// console.log(createUserName(userName))

// function sayHello(greetings){ //function declaration
//     alert (greetings);
// }
// sayHello('bonjure')

// const sayHello2 = function (greetings){ // function expretion 
//     alert (greetings);
// }
// sayHello2('hi')

//Hoisting search about it

// function sayHello(greetings) {
//     alert ('hi');
// }
// const car = {
//     speed: 100,
//     color: 'white',
//     drive: function(speed) {
//         console.log(speed);
//     }
// }
// car.drive(100)
// console.log('hello')

// // масиви

// const subscribers = [
//  {name: 'user1', age: 20, profession: 'teacher'},
//  {name: 'user2', age: 30, profession: 'nany'}
// ];
// const haveYouJustNewSubscriber = true;
// if (haveYouJustNewSubscriber)
//  {
//     subscribers.push({name: 'user3', age: 34, profesion: 'builder'})
//  }
// console.log(subscribers)

// // splice, pop, push

// function congratsIfMoreThan100(arrey) {
// if (arrey.length >= 100){
// aletr('congratulation, you got more than 100 subscribers')
// }
// else {
//     alert ('not enought')
// }
// }
// congratsIfMoreThan100(subscribers)

/*цикли js loops:
- for
- for Of
-for in
- while
-do while
*/
// const subscribers = [
//     {name: 'Inna', isCloseFriend: true},
//     {name: 'Anna', isCloseFriend: false},
//     {name: 'Mark', isCloseFriend: true},
//     {name: 'Andrew', isCloseFriend: false},
//     {name: 'Eva', isCloseFriend: true},
//     {name: 'Orest', isCloseFriend: true},
// ];
// for (let i = 0; i < subscribers.length; i++) {
//     console.log (subscribers[i])
// }

// for (const item of subscribers){
// console.log (item)
// }
// for (const keys in subscribers){
//     console.log(subscribers[keys])
// }
// let i = 3;
// while( i< subscribers.length) {
//     console.log(subscribers[i])
// }
