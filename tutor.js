
// your code goes here
class Man {
    constructor(name, surname) {
        this.name = name;
        this.surname = surname;
    }

    fullName() {
        return this.surname + " " + this.name;
    }
}

class Room {

    set owner(name) {
        if (typeof name != "string")
            throw new RangeError("Имя владельца должно быть строкой.");
        this._o = name;
    }
    get owner() {
        return this._o;
    }

    set windows(w) {
        if (typeof w== "string" || w <= 0) {
            console.log ('Количество окон должно быть положительным и числом');
        this._w = 1;}
        else {
            this._w =Math.round(w) ;
        }

    }
    get windows() {
        return this._w
    }
}

let man = new Man("Artiom", "Kramarenko");
Room.windows = 2
Room.owner = man.name;
console.log("man.name=" + man.name +" man.surname=" + man.surname + "fullName=" + man.fullName() );
console.log("room.ovner=" + Room.owner +" room.windows=" + Room.windows);
