const normalPerson ={
    firstName: 'Rahim',
    lastName: 'Uddin',
    salary: 15000,
    getFullName: function(){
        console.log(this.firstName, this.lastName);
    },
    chargeBill: function(amount,tax){
        console.log(this);
        this.salary = this.salary-amount-tax;
        return this.salary;
    }
}
// normalPerson.getFullName();

// console.log(normalPerson.chargeBill(1000));

const heroPerson = {
    firstName: 'Hero',
    lastName: 'Asif',
    salary: 25000
}
// const heroBillCharge = normalPerson.chargeBill.bind(heroPerson);
// heroBillCharge(2000);
// heroBillCharge(3000);
// console.log(heroPerson.salary);
// console.log(normalPerson.salary);

// normalPerson.chargeBill.call(heroPerson,900,200);
// console.log(heroPerson.salary);
// console.log(normalPerson.salary);

normalPerson.chargeBill.apply(heroPerson,[200,900]);
console.log(heroPerson.salary);