var Name = /** @class */ (function () {
    function Name(fname, lname) {
        this.first_name = fname;
        this.last_name = lname;
    }
    Name.prototype.getName = function () {
        return this.first_name + ' ' + this.last_name;
    };
    return Name;
}());
var numstr = [1, 'badru', 2];
console.log(numstr);
