interface Person { 
    firstName: string;  
    lastName: string;  
    age: number;  
    FullName();  
    GetAge();  
}

class Emloyee implements Person{
    
    firstName: string;  
    lastName: string;  
    age: number; 
    FullName():string{
        return this.firstName + ' ' + this.lastName
    }
    GetAge(){
        return this.age

    }
  constructor(firstN: string, lastN: string, getAge: number) {  
        this.firstName = firstN;  
        this.lastName = lastN;  
        this.age = getAge;  
    }
}

let myEmployee = new Emloyee('Dung','Nguyen',22)
let fullName:string = myEmployee.FullName()
let age  = myEmployee.GetAge()
console.log("Name of Person: " +fullName + '\nAge: ' + age);
 