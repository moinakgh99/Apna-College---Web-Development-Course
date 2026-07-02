/*
    Create a JavaScript program that generates a random number representing a dice roll.
    The generated number should be between 1 and 6 (inclusive).
*/

console.log(Math.floor(Math.random() * 6) + 1);


/*
    Create a JavaScript object representing a car that stores the following properties:

    name
    model
    color

    After creating the object, print the car's name to the console.
*/

const car = {
    name : "Toyota",
    model : "Tata",
    color : "Yellow"
};
console.log(car.name);


/*
    Create a JavaScript object named Person with the following properties:

    name
    age
    city

    Then perform the following operations:

    Change the value of the city property to "New York".
    Add a new property named country.
    Set the value of the country property to "United States".

    Finally, print the updated Person object to the console.
*/

const person = {
    name : "Moinak",
    age : 20,
    city : "Ghaziabad"
};

person.city = "New York";
person.country = "USA";

console.log(person);
