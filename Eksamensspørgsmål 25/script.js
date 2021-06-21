//Funktion
var sort = {}; 

function arraySort(array) {
    for (var i = 0; i < array.length; i++) {
        var num = array; 
        sort[num] = num.sort();
    }
    return sort; 
}
console.log(arraySort([4, 3, 6, 2, 7, 1, 5])); 

//Class
class Fisk {
    constructor(array) {  
        this.array = array;
    }
    arraySort() {
        this.sort = {}; 
        for (var i = 0; i < this.array.length; i++) {
            var num = this.array; 
            this.sort[num] = num.sort();
        }
        return this.sort;
    }
}
fisk1 = new Fisk([2, 1, 5, 3, 4, 7, 9, 8]);
console.log(fisk1.arraySort());  