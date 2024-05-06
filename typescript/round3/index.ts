class Name {
      first_name:string;
      last_name:string;

      constructor(fname:string,lname:string){
            this.first_name = fname
            this.last_name = lname
      }

      getName():string{
            return this.first_name + ' ' + this.last_name 
      }

}
const numstr:(string|number)[] = [1,'badru',2]
console.log(numstr)