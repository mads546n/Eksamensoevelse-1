//Funktion
let arr = [1, 2, 3]; 

function findMaxMin(arr) {
    let max = arr[0]; 
    let min = arr[0]; 
    for (i = 0; i < arr.length; i++) {
        if (max < arr[i]) {
            max = arr[i]; 
        }
        if (min > arr[i]) {
            min = arr[i];
        }
    }
    return{max, min};  
}
console.log(findMaxMin(arr))

//Reduce-method
var myArray = [1, 2, 3, 0]; 
var max = myArray.reduce(function(a, b) {return Math.max(a, b);})
var min = myArray.reduce(function(a, b) {return Math.min(a, b);})
console.log(max, min); 

//Class
class Fisk {
    constructor(array) {
        this.array = array; 
        this.max = array[0]; 
        this.min = array[0];
    }
    bestemMinMax() {
        for (i = 0; i < this.array.length; i++) {
            if (this.max < this.array[i]) {
                this.max = this.array[i];
            }
            if(this.min > this.array[i]) {
                this.min = this.array[i];
            }
        }
        return{max: this.max, min: this.min}; 
    }
}
fisk1 = new Fisk([1, 2, 3]); 
console.log(fisk1.bestemMinMax()); 