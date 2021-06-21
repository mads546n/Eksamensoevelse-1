//Funktion
array = [1, 2, 2, 1]; 

function tjek() {
    for (let i = 0; i < array.length; i++) {
        if (i > array.length/2) 
            return true; 
        else if (array[i] != array[array.length-1-i])
            return false;
    }
}
console.log(tjek()); 

//Class
class Fisk {
    constructor(array) {
        this.array = array;
    }
    tjek() {
        for (let i = 0; i < this.array.length; i++) {
            if (i > this.array.length/2) 
                return true; 
            else if (this.array[i] != this.array[this.array.length-1-i])
                return false;
        }
    }
}
Fisk1 = new Fisk([1, 2, 2, 1]); 
console.log(Fisk1.tjek()); 