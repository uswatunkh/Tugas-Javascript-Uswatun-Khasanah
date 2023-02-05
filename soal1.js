const prompt = require('prompt-sync')({sigint: true});

 

const nilai = prompt('Masukan nilai X : ');

var grade;

 

if(nilai==0){

    grade = "Tidak bisa input bilangan negatif"

} else if(nilai%2==0) {

   // grade = "OKe genap"
    grade = Math.sqrt(nilai);

} else{
    grade = "Tidak bisa input bilangan ganjil"
}

console.log("Grade adalah = " + grade)