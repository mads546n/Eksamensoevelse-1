
//Funktion
let arr = [1, 1, 1, 2, 2, 3, 4, 4, 5]; 
let antal = {}; 

function hyppig() {
    for (var i = 0; i < arr.length; i++) {
        var num = arr[i];
        antal[num] = antal[num] ? antal[num] + 1 : 1;
    }
    return antal[1]; 
}
console.log(hyppig(antal[1])); 

//Class
class Fisk {
    constructor(arr, antal) {
        this.arr = arr; 
        this.antal = antal;
    }
    hyppig() {
        for (var i = 0; i < this.arr.length; i++) {
            var tal = this.arr[i];
            this.antal[tal] = this.antal[tal] ? this.antal[tal] + 1 : 1;
        }
        return this.antal[1]; 
    }
}
Fisk1 = new Fisk([1, 1, 1, 2, 2, 3, 4, 4, 5], {}); 
console.log(Fisk1.hyppig()); 