interface Person {
  name: string;
  age: number;
  gender: string;
}

const sayHi = (p: Person): string => {
  return `Hello ${p.name}, you are ${p.age}, you are a ${p.gender}`;
};

const person = {
  age: 29,
  name: 'minkj1992',
  gender: 'male',
};

console.log(sayHi(person));

export {};
