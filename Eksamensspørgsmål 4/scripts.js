//Funktion
function konKat(arr1, arr2) {
    for(let i = 0, len = arr2.length; i < len; i++) {
        arr1.push(arr2[i]);
    } 
    return arr1; 
}
console.log(konKat([1, 2, 3], [4, 5, 6])); 

//concat method
let frugt = ["æble", "Pære", "Banan"]; 
let dyr = ["abe", "mand", "fisk"]; 
let samlet = frugt.concat(dyr); 
console.log(samlet); 

//Class 
class Fisk {
    constructor(array1, array2) {
        this.array1 = array1; 
        this.array2 = array2;
    }
    konKat() {
        for (var i = 0, len = this.array2.length; i < len; i++) {
            this.array1.push(this.array2[i]);
        }
        return this.array1; 
    }
}
Fisk1 = new Fisk([1, 2, 3], [4, 5, 6]); 
console.log(Fisk1.konKat()); 
