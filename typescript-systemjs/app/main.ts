import {Person} from './person.ts';
 
let person = new Person();
document.getElementById("greeting").innerHTML = ("Hello "+person.name);
