import {WorkEntry} from 'components/work-entry';

export class App {
  constructor() {
    this.heading = "Invoice App";
    this.workEntries = [];
    this.workDate = '';
    this.workItem = '';
    this.workPayRate = '';
    this.workHours = '';
    this.workPayment = '';
  }
//date, item, payRate, hours, payment
  addWorkEntry() {
 
      this.workEntries.push(new WorkEntry(this.workDate, this.workItem, this.workPayRate,this.workHours,this.workPayment));
      console.log(this.workItem)
  }

  updateWorkEntry(workEntry){
    let index = this.workEntries.indexOf(workEntry);
    let obj = new WorkEntry(this.workDate, this.workItemm, this.workPayRate,this.workHours,this.workPayment);
    this.workEntries[index] = obj;
    console.log(this.workEntries)
  }

  removeWorkEntry(workEntry) {

    let index = this.workEntries.indexOf(workEntry);
    if (index !== -1) {
       this.workEntries.splice(index, 1);
    }
  }
}