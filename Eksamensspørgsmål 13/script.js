//Funktion
function similar(array) {
    for (var i = 0; i < array.length; i++) {
        var compare = array[0]; 

        if (array[i] != compare) {
            return false; 
        }
    }
    return true;
}
console.log(similar([1, 1, 1, 1, 1, 1]))

//Class
class Fisk {
    constructor(array) {
        this.array = array;
    }
    similar() {
        for (var i = 0; i < this.array.length; i++) {
            var compare = this.array[0]; 

            if (this.array[i] != compare) {
                return false;
            }
        }
        return true;
    }
}
Fisk1 = new Fisk([1, 1, 1, 1, 1, 1]);
console.log(Fisk1.similar());