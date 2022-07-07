'use strict';
console.log('up and running');
// do ALL work inside main function. Please read instructions,
// and use comments to help you write out the process before coding.

const main = () => {


  // Problem 1:
  // Create a class Product that represents a product sold online.
  class Product {
    //  A product has a price, quantity and name.
    constructor(price, quantity, name){
      this.price = price;
      this.quantity = quantity;
      this.name = name;
    }
    //The class should have a method that prints a product's information in the following format:
    //Banana, price 1.1, amount 13.
    printProductInfo(){
      console.log(`${this.name}, price ${this.price}, amount ${this.quantity}`)
    }
  }
  //     Create two instances of the class and call the method created to print the product's details.
  let watermelon = new Product(5, 1, 'Watermelon');
  watermelon.printProductInfo();
  let nectarine = new Product(5, 10, 'Nectarine');
  nectarine.printProductInfo();


  // Problem 2:
  // Create a GitHubRepository class with properties: userName, fileName, descriptionOfRepository, and code. 
  class GitHubRepository{
    constructor(userName, fileName, descriptionOfRepository, code){
      this.userName = userName;
      this.fileName = fileName;
      this.descriptionOfRepository = descriptionOfRepository;
      this.code = code;
    }
    // Create a function that prints all properties.
    printAllProperties(){
      console.log(
        `Username: ${this.userName}, 
File Name: ${this.fileName}, 
Description of Repository: ${this.descriptionOfRepository}
Code: ${this.code}`);
    }
  }

  // Create an instance of the class and use the function.
  let stormyRepo = new GitHubRepository('NunuMarie3000', 'Reinforcement_Week_Wednesday-Storm', 'A repository for Wednesday reinforcement week problem sets', '<h1>Hello World!</h1>');
  stormyRepo.printAllProperties();

  //   Problem 3:
  //   - Define a class called Pet with three properties: type, breed and age.
  class Pet{
    constructor(type, breed, age){
      this.type = type;
      this.breed = breed;
      this.age = age;
    }
    //Create a method called formatProperties that prints all object properties using string templating.
    formatProperties(){
      console.log(`Type: ${this.type}
Breed: ${this.breed}
Age: ${this.age}`);
    }
    //Create a method called changeAge that takes a number and updates the age property of an object.
    changeAge(num){
      this.age = num
    }
    //Create a method called dogYears that checks if the pet type of the object is dog, if so return the age in dog years (age times 7), otherwise return the message "[PET TYPE] is not a dog!". 
    dogYears(){
      if(this.type.toLowerCase() === 'dog'){
        this.age = (this.age * 7);
        console.log(`Your dog is ${this.age} years old in human years!`);
        return this.age;
      }else{
        console.log(`${this.type} is not a dog!`);
      }
    }
  }

  //   - Create an instance of the Pet Class called pet1. 
  let pet1 = new Pet('Dog', 'Pitbull', 3);
  //   - Print all property values of the object using the class method.
  pet1.formatProperties();
  //   - Create another instance of the Pet Class with diffrent property values called pet2.
  let pet2 = new Pet('Cat', 'Domestic Shorthair', 3);
  //   - Print all property values of the object using the class method. 
  pet2.formatProperties();
  //   - Change the age grade of pet1. 
  pet1.age = 4;
  //   - Print the age of pet1 in dog years using the class method. 
  pet1.dogYears();
  //   - Print the age of pet2 in dog years using the class method
  pet2.dogYears();



  // Problem 4:

  // Create a People class with three properties: name, weight, and height.
  class People{
    constructor(name, weight, height){
      this.name = name;
      this.weight = weight;
      this.height = height;
    }
    //  Create a method that can calculate the BMI of a person using the formula below.
    // EXAMPLE OUTPUT: BMI is (weight / (height * height)) x 703. Weight is in pounds and height is in inches.
    calculateBMI(){
      let BMI = (this.weight / (this.height * this.height)) * 703;
      console.log(`${this.name}'s BMI is ${BMI}`);
      return BMI;
    }
  }
  //  Create an instance of the class and use the function.
  let stormy = new People('Storm', 135, 62.5);
  stormy.calculateBMI();

  


  // CHALLENGE 1:

  // Create a Person Class with the properties Name (first, last), Age, Interests, Bio ('NAME is AGE years old. They like INTERESTS')
  class Person{
    constructor(firstName, lastName, age, interests){
      this.name = `${firstName} ${lastName}`;
      this.age = age;
      this.interests = interests;
      this.bio = `${this.name} is ${this.age} years old. They like ${this.interests}`;
    }
  }

  // Create a class called Student that extends Person and adds the property Cohort to student.
  class Student extends Person{
    constructor(firstName, lastName, age, interests, cohort){
      super(firstName, lastName, age, interests);
      this.cohort = cohort;
    }
  }

  // Create a class called Teacher that extends Person and adds the properties subject, and students (students should be an array of Student objects) Create a method called addStudent that takes an instance of Student and adds a student object to the students array.
  class Teacher extends Person{
    constructor(firstName, lastName, age, interests, subject){
      super(firstName, lastName, age, interests);
      this.subject = subject;
      this.students = []; 
    }
    addStudent(instanceOfStudent){
      this.students.push(instanceOfStudent);
    }
    // Create a method called listAllStudents that prints every student name and student cohort associated with a teacher.
    listAllStudents(){
      for(let i=0; i<this.students.length; i++){
        console.log(`${this.students[i].name}, ${this.students[i].cohort}`);
      }
    }
  }

  // Create an instance of the Teacher class called teacher1 with an empty student array.
  let teacher1 = new Teacher('Lizzy', 'Rhodes?', 25, 'Coding and Teaching', 'Code 201');

  //  Create another instance of this class called teacher2 with an empty student array.
  let teacher2 = new Teacher('Robert', 'Armstrong', 24, 'Coding and Video Games', 'Code 201');

  //   Add two students to teacher1 using the class method.
  let student1 = new Student('Storm', 'OBryant', 25, 'Crocheting and Coding', 2022);
  let student2 = new Student('Jordan', 'Hobson', 24, 'Coding and being on Zoom', 2022);
  teacher1.addStudent(student1);
  teacher1.addStudent(student2);
  //   Add two students to teacher2 using the class method.
  let student3 = new Student('Curtrick', 'Walton', 23, 'Coding and Video Games', 2022);
  let student4 = new Student('Tyler', 'Morgan', 33, 'Coding and being a Dad', 2022);
  teacher2.addStudent(student3);
  teacher2.addStudent(student4);

  //   List all students associated with teacher1 using the class method.
  teacher1.listAllStudents();

  //   List all studnets associated with teacher2 using the class method.
  teacher2.listAllStudents();


};

main();