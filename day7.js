console.log("Que 1");
let student={   
  "name": "David Rayy",  
  "class" : "VI",   
  "rollno" : "12" };
let prop=[];
for(let key in student)
{     prop.push(key); } 

console.log(student);

console.log("Que 2");
var student2=student;
delete student2.rollno;
console.log(student2);

console.log("Que 3");
console.log(Object.keys(student).length);

console.log("Que 4")
var library = [ { author: 'Bill Gates', title: 'The Road Ahead', readingStatus: true }, { author: 'Steve Jobs', title: 'Walter Isaacson', readingStatus: true }, { author: 'Suzanne Collins', title: 'Mockingjay: The Final Book of The Hunger Games', readingStatus: false }];

let prop2=[];
for(let key in library)
{ 
console.log("book"+key);
console.log(library[key].readingStatus);
}

console.log("Que 5");
const pi=3.14;
let vol=function(r,h){
return (r*r*h*pi);}
console.log( "The volume is "+vol(3,5));

console.log("Que 6");
var library = [ { title: 'The Road Ahead', author: 'Bill Gates', libraryID: 1254 }, 
 { title: 'Walter Isaacson', author: 'Steve Jobs', libraryID: 4264 }, 
 { title: 'Mockingjay: The Final Book of The Hunger Games', author: 'Suzanne Collins', libraryID: 3245 }]; 

 let sortArray = (a, b) => {
  return a.title.localeCompare(b.title);
};
library.sort(sortArray);
console.log(library);