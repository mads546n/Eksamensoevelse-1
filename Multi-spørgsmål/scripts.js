//Funktion
var multi = {}; 

function multiplyArray(array) {
    for (var i = 0; i < array.length; i++) {
        var num = array[i];
        multi[num] = num * 2; 
    }
    return multi; 
}
console.log(multiplyArray([1, 2, 3, 4, 5, 6, 7, 8, 9, 10])); 

//Class
class Fisk {
    constructor(array) {
        this.array = array;
    }
    multiplyArray() {
        this.multi = {};
        for (var i = 0; i < this.array.length; i++) {
            var num = this.array[i];
            this.multi[num] = num * 2;
        }
        return this.multi;
    }
}
fisk1 = new Fisk([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11]);
console.log(fisk1.multiplyArray()); 