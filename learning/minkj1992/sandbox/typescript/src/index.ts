class Person {
  public name: string;
  public age: number;
  public gender: string;
  constructor(name: string, age: number, gender: string) {
    this.name = name;
    this.age = age;
    this.gender = gender;
  }
}

const minWook = new Person('minkj1992', 29, 'male');

const sayHi = (p: Person): string => {
  return `Hello ${p.name}, you are ${p.age}, you are a ${p.gender}`;
};

const person = {};

console.log(sayHi(minWook));

export {};
