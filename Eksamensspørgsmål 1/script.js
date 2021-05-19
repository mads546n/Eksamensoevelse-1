//Indbygget funktion
var myArray = ["1", "2", "3"]; 
var n = myArray.includes("4", 0);
console.log(n); 

//Opstilling af funktion
function tjekArray(myArray, num) {
    for (var i = 0; i < myArray.length; i++) {
        if (myArray[i] == num) {
            return true;
        } 
    }
    return false; 
}
console.log(tjekArray(myArray, "4")); 

//Method i class
class Fisk {
    constructor(array, num) {
        this.array = array; 
        this.num = num; 
    }
    tjek() {
        for (var j = 0; j < this.array.length; j++) {
            if (this.array[j] == this.num) {
                return true; 
            }
        }
        return false;
    } 
}
fisk1 = new Fisk([1, 2, 3], 4);
console.log(fisk1.tjek());
