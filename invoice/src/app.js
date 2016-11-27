import {WorkEntry} from 'components/work-entry';

export class App {
  constructor() {
    this.heading = "works";
    this.workEntries = [];
    this.workDate = '';
    this.workItem = '';
    this.workPayRate = '';
    this.workHours = '';
    this.workPayment = '';
  }
//date, item, payRate, hours, payment
  addWorkEntry() {

      this.workEntries.push(new WorkEntry(this.workDate, this.workItemm, this.workPayRate,this.workHours,this.workPayment));

   
  }

  removeWorkEntry(workEntry) {

    let index = this.workEntries.indexOf(workEntry);
    if (index !== -1) {
       this.workEntries.splice(index, 1);
    }
  }
}