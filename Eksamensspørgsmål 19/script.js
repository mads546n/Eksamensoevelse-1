//Funktion
function includeText(string) {
    for (var i = 0; i < string.length; i++) {
        var include = "time"; 

        if (string.includes(include)) {
            return "'"+ include + "'" + "is included in the string (" + string + ")";
        }
        return "'"+ include + "'" + " is not included in the string (" + string + ")"; 
    }
}
console.log(includeText("The time is now old friend")); 

//Class
class Fisk {
    constructor(string) {
        this.string = string; 
    }
    includeText() {
        for (var i = 0; i < this.string.length; i++) {
            var include = "time";

            if (this.string.includes(include)) {
                return "'" + include + "'" + "is included in the string (" + this.string + ")";
            }
            return "'" + include + "'" + "is not included in the string (" + this.string + ")"; 
        }
    }
}
fisk1 = new Fisk("The time is now old friend"); 
console.log(fisk1.includeText()); 