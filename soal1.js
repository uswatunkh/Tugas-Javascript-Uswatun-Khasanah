const prompt = require('prompt-sync')({sigint: true});

 

const nilai = prompt('Masukan nilai X : ');

var grade;

 

if(nilai<0){

    grade = "Tidak bisa input bilangan negatif"
    console.log(grade)

} else if(nilai%2==0) {

   
    grade = Math.sqrt(nilai);
    console.log("Akar pangkat 2 dari = " + grade)

} else{
    grade = "Tidak bisa input bilangan ganjil"
    console.log(grade)
}

