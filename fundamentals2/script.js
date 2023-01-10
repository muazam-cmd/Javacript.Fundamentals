// Coding Challenge #3
// Let's go back to Mark and John comparing their BMIs! This time, let's use objects to
// implement the calculations! Remember: BMI = mass / height ** 2 = mass
// / (height * height) (mass in kg and height in meter)
// Your tasks:
// 1. For each of them, create an object with properties for their full name, mass, and
// height (Mark Miller and John Smith)
// 2. Create a 'calcBMI' method on each object to calculate the BMI (the same
// method on both objects). Store the BMI value to a property, and also return it
// from the method
// 3. Log to the console who has the higher BMI, together with the full name and the
// respective BMI. Example: "John's BMI (28.3) is higher than Mark's (23.9)!"
// Test data: Marks weights 78 kg and is 1.69 m tall. John weights 92 kg and is 1.95 m
// tall

const Muazam = {
    firstName: 'Muazam',
    lastName: 'Shahid',
    MiddleName: 'Mzm',
    age: 25,
    BirthYear: 1997,
    Job: 'Software Engineer',
    Friends: ['Dullah', 'Mzm', 'Muazam',],
    hasDrivingLicense: 'true',

    calcAge: function (BirthYear) {
        return 2023 - BirthYear;
    }
};

const MarkObj = {
    fullName: 'Marks Miller',
    mass: 78,
    Height: 1.69,

    calcBMIMark: function () {
        this.BMI = this.mass / this.Height ** 2;
        return this.BMI;
    }
}

const JohnObj = {
    fullName: 'John Smith',
    mass: 92,
    Height: 1.95,

    calcBMIJohn: function () {
        this.BMI = this.mass / this.Height ** 2;
        return this.BMI;
    }
}


MarkObj.calcBMIMark()
console.log(`Mark BMI IS:`, MarkObj.BMI);

JohnObj.calcBMIJohn()
console.log(`John    BMI IS:`, JohnObj.BMI);


if (MarkObj.BMI > JohnObj.BMI) {
    console.log(`${MarkObj.fullName} BMI (${MarkObj.BMI}) is higher than ${JohnObj.fullName} BMI (${JohnObj.BMI}!)`);
} else {
    console.log(`John BMI ${JohnObj.BMI} is higher than Mark's Bmi ${MarkObj.BMI} !`);
}