// Write a JavaScript program to check a student's total marks in various examinations. 
//The student will get A+ grade if the total marks are in the range 89..100 inclusive, if the examination is "Final-exam" the student will receive A+ grade and total marks must be greater than or equal to 90. 
//If the student gets an A+ grade, return true, otherwise return false.  

//---method First
// function exam_status(totmarks,isExam){
//     if (isExam){
//         return totmarks>=90
//     }
//     return totmarks >=89 && totmarks <=100
// }

//---Method second
const exam_status = (total,isExam) =>{
    return (isExam) ? total>=90 : total >=89 && total<=100
}

console.log(exam_status("78", " "));
console.log(exam_status("92", " "));