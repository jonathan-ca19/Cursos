import {Activity} from "./entities/activity";
import { Course } from "./entities/course";
import {Teacher} from "./entities/teachers";
import {Student} from "./entities/strudents";
import {gradesBook} from './entities/grades-book';

let student:Student   [] = [];
let teacher:Teacher   [] = [];
let course:Course     [] = [];
let activity:Activity [] = [];
let gradesbook:gradesBook[] = []
enum Carrera{
    tursimo="Turismo",
    marketing= "Marketing",
    desarrollo= "Desarrollo de Software"
}
enum Area{
    programacion = "Programacion",
    diseño = "Diseño",
    redes = "Redes"
}
// enum Course{
//     typescript="TypeScript",
//     php = "PHP",
//     angular = "Angular"
// }

//estudiante

function addStudent(){
    let currentStudent :Student = {
        name :readHtml("nameStudent"),
        identification : parseInt(readHtml("identificationStudent")),
        address:readHtml("addresStudent"),
        registration: parseInt(readHtml("registrationCodeStudent")),
        level: readHtml("levelStudent"),
    }
student.push(currentStudent);
console.log(student);
console.table(student);
}


// profesor 


function addTeacher(){
    let currentTeacher : Teacher= {
        name: readHtml("nameTeacher"),
        identification:parseInt(readHtml("identificationTeacher")),
        address:readHtml("addresTeacher"),
        carrer: readHtml("carrerTeacher"),
        title:readHtml("titleTeacher"),
        asignature:readHtml("asignatureTeacher"),
    }
teacher.push(currentTeacher);
console.table(teacher);
}


//cursos


function addCourse(){
    let currentCourse : Course= {
        area: readHtml("areaCourse"),
        name: readHtml("nameCourse"),
    }
course.push(currentCourse);
console.table(course);
}


function addActivity() { 
    let currentActivity: Activity ={
        name : readHtml("nameActivity"),
    } 
    activity.push(currentActivity)
    console.table(activity)
}

function addGradesBook(){
    let currentGradesBook:gradesBook={
        course :readHtml("courseGradesBook"),
        activity:readHtml("activityGradesbook"),
        weight:parseInt(readHtml("weightGradesBook")),
        noteMax:parseInt(readHtml("noteMaxGradesBook")),
    }
    gradesbook.push(currentGradesBook);
    console.table(gradesbook)
}

function readHtml(id:string):string{
    return(<HTMLInputElement>document.getElementById(id)).value
}

// function getOption():void{
//     let courseGradesBook = document.getElementById("courseGradesBook")as HTMLSelectElement;
//     //document.querySelectorAll('#courseGradesBook option').forEach(option => option.remove());

//     let course = Object.values(Course);//enum convertido en arreglo
//     course.forEach((value) => {
//         let option = document.createElement("option");
//         option.value = value;
//         option.text = value;
//         courseGradesBook.add(option);
//     });
//     // courseGradesBook.add();
// }




