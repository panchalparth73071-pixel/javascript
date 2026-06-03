1. JavaScript Introduction
JavaScript (JS) is a programming language used to make websites interactive.
It is used for frontend and backend development.

EX: console.log("Hello World"); for printing value


2.  Variables
Variables store data values.

EX: let name = "Parth";


3.  let
Block-scoped variable.
Can be reassigned.
Cannot be redeclared in the same scope.

EX: let age = 21;
age = 22;


4.  const
Block-scoped variable.
Cannot be reassigned.
Cannot be redeclared.

EX: const PI = 3.14;


5.  var
Function-scoped variable.
Can be reassigned and redeclared.
Mostly avoided in modern JavaScript.

EX: var score = 50;


6.  Data Types

1.Primitive Types
String → "Hello"
Number → 100
Boolean → true, false
Undefined → let x;
Null → null
BigInt → 123456789n
Symbol → Symbol("id")

2.Non-Primitive Types
Object
EX: let person = { name: "Parth" };
Array
let colors = ["Red", "Blue"];


7.  Type Conversion

1.String to Number
EX: Number("10");

2.Number to String
EX: String(10);

3.Boolean Conversion
EX: Boolean(1); // true
    Boolean(0); // false


8.  Operators

1.Arithmetic Operators
  + - * / %
EX: 10 + 5;

2.Assignment Operators
  = += -= *= /=
EX: x += 5;

3.Comparison Operators
  == === != !== > < >= <=
EX: 5 === 5;

4.Logical Operators
  && || !
EX: true && false;

5.Increment / Decrement
  ++ --
EX: count++;
    count--;

9.  Strings
A String is a sequence of characters used to store text.

EX: let name = "Parth";
    let city = 'Ahmedabad';

    console.log(name);
    console.log(city);


10.  Template Literals
emplate literals allow you to embed variables and expressions inside a string using backticks ( ).

EX: let product = "Laptop";
let price = 50000;

console.log(`The price of ${product} is ₹${price}`);


11.  String Methods
1.toUpperCase()
EX: let text = "hello";
    console.log(text.toUpperCase());

2.toLowerCase()
EX: let text = "HELLO";
    console.log(text.toLowerCase());

3.trim()
EX: let text = "  Hello  ";
    console.log(text.trim());

4.includes()
EX: let text = "JavaScript";
    console.log(text.includes("Script"));

5.replace()
EX: let text = "Hello World";
    console.log(text.replace("World", "JavaScript"));

6.slice()
EX: let text = "JavaScript";
    console.log(text.slice(0, 4));

7.charAt()
EX: let text = "Hello";
    console.log(text.charAt(1));


12.  Reverse String
EX: let str = "hello";
    let reversed = str.split("").reverse().join("");
    console.log(reversed);

13.  Count Vowels
EX: let str = "javascript";
    let count = 0;

    for (let char of str) {
    if ("aeiouAEIOU".includes(char)) {
        count++;
    }
}
    console.log("Vowels:", count);
    












    
    







