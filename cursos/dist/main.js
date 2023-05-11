"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
let student = [];
let teacher = [];
let course = [];
let activity = [];
let gradesbook = [];
var Carrera;
(function (Carrera) {
    Carrera["tursimo"] = "Turismo";
    Carrera["marketing"] = "Marketing";
    Carrera["desarrollo"] = "Desarrollo de Software";
})(Carrera || (Carrera = {}));
var Area;
(function (Area) {
    Area["programacion"] = "Programacion";
    Area["dise\u00F1o"] = "Dise\u00F1o";
    Area["redes"] = "Redes";
})(Area || (Area = {}));
// enum Course{
//     typescript="TypeScript",
//     php = "PHP",
//     angular = "Angular"
// }
//estudiante
function addStudent() {
    let currentStudent = {
        name: readHtml("nameStudent"),
        identification: parseInt(readHtml("identificationStudent")),
        address: readHtml("addresStudent"),
        registration: parseInt(readHtml("registrationCodeStudent")),
        level: readHtml("levelStudent"),
    };
    student.push(currentStudent);
    console.log(student);
    console.table(student);
}
// profesor 
function addTeacher() {
    let currentTeacher = {
        name: readHtml("nameTeacher"),
        identification: parseInt(readHtml("identificationTeacher")),
        address: readHtml("addresTeacher"),
        carrer: readHtml("carrerTeacher"),
        title: readHtml("titleTeacher"),
        asignature: readHtml("asignatureTeacher"),
    };
    teacher.push(currentTeacher);
    console.table(teacher);
}
//cursos
function addCourse() {
    let currentCourse = {
        area: readHtml("areaCourse"),
        name: readHtml("nameCourse"),
    };
    course.push(currentCourse);
    console.table(course);
}
function addActivity() {
    let currentActivity = {
        name: readHtml("nameActivity"),
    };
    activity.push(currentActivity);
    console.table(activity);
}
function addGradesBook() {
    let currentGradesBook = {
        course: readHtml("courseGradesBook"),
        activity: readHtml("activityGradesbook"),
        weight: parseInt(readHtml("weightGradesBook")),
        noteMax: parseInt(readHtml("noteMaxGradesBook")),
    };
    gradesbook.push(currentGradesBook);
    console.table(gradesbook);
}
function readHtml(id) {
    return document.getElementById(id).value;
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
