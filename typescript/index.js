"use strict";
class Name {
    constructor(fname, lname) {
        this.first_name = fname;
        this.last_name = lname;
    }
    getName() {
        return this.first_name + ' ' + this.last_name;
    }
}
