abstract class Emloyee {
  constructor(private firstName: string,
            private lastName: string) {}
            abstract getSalary() : number

            getFullName(): string {
                return `${this.firstName}  ${this.lastName}`;
            }
  
  compensationStatement(): string {
    return `${this.getFullName()} nhan ${this.getSalary()} 1 thang`;
  }
}

class FullTimeEmployee extends Emloyee {

  constructor(firstName: string, 
    lastName: string, 
    private salary: number) {
    super(firstName, lastName);
  }
  getSalary(): number {
    return this.salary;
  }
}

class Contractor extends Emloyee {

  constructor(
    firstName: string,
    lastName: string,
    private rate: number,
    private hours: number
  ) {
    super(firstName, lastName);
  }
  getSalary(): number {
    return this.rate * this.hours;
  }
}

let Dung = new FullTimeEmployee("Dung", "Ngoc", 10000);
let Ngoc = new Contractor("Ngoc", "Nguyen", 100, 100);

console.log(Dung.compensationStatement());
console.log(Ngoc.compensationStatement());
