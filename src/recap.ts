const nameDaniel = 'name';

console.log(nameDaniel);

const suma = (a: number, b: number) => a + b;

console.log(suma(1, 5));

class Persona {
  private age: number;
  private name: string;
  constructor(age: number, name: string) {
    this.age = age;
    this.name = name;
  }
  getSumary() {
    return `my name is ${this.name}, and I ${this.age} old`;
  }
}

const daniel = new Persona(26, 'Daniel Briceno');
console.log(daniel.getSumary());

class Persona2 {
  //Este es un atajo de TS para poder mandar variables privadas ahorrandonos la sintaxis declarativa
  constructor(private age: number, private name: string) {
    this.age = age;
    this.name = name;
  }
  getSumary() {
    return `my name is ${this.name}, and I ${this.age} old`;
  }
}

const jesus = new Persona2(28, 'Jesus Briceno');

console.log(jesus.getSumary());
