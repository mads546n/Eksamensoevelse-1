//Funktion
mitArray = [1, 2, 3]; 

function summen(array) {
    sum = 0; 
    for (i = 0; i < array.length; i++) {
        sum += array[i]; 
    }
    return sum; 
}
console.log(summen(mitArray)); 

//reduce-method
console.log([1, 2, 3].reduce((a, b) => a + b, 0)); 

//class
class Fisk {
    constructor(array, sum) {
        this.array = array;  
        this.sum = sum; 
    }
    beregnSum() {
        for (i = 0; i < this.array.length; i++) {
            this.sum += this.array[i];
        }
        return this.sum; 
    }
}
fisk1 = new Fisk([1, 2, 3], 0);
console.log(fisk1.beregnSum()); 