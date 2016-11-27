// export class Todo {
//   constructor(description) {
//     this.description = description;
//     this.done = false;
//   }
// }

export class WorkEntry{
  constructor(date, item, payRate, hours, payment) {
    this.date = date;
    this.item = item;
    this.payRate = payRate;
    this.hours = hours;
    this.payment = payment;
  }
}

