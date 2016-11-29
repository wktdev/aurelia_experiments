import moment from 'moment';
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
      console.log(moment().format())
  }

  updateWorkEntry(workEntry){
    // console.log(workEntry.item)
    let index = this.workEntries.indexOf(workEntry);
    let obj = new WorkEntry(workEntry.date, workEntry.item, workEntry.payRate, workEntry.hours, workEntry.payment);
    console.log(obj.item)
    this.workEntries[index] = obj;
    console.log(this.workEntries);
  }

  updateWorkEntryField(workEntry){
    // console.log(workEntry.item)
    let index = this.workEntries.indexOf(workEntry);

    this.workEntries[index] = workEntry;
    console.log(this.workEntries);
  }

  removeWorkEntry(workEntry) {
    console.log(this.workEntries.indexOf(workEntry))
    let index = this.workEntries.indexOf(workEntry);
    this.workEntries.splice(index, 1);
    
  }

  copyWorkEntry(workEntry){
      let obj = new WorkEntry(workEntry.date, workEntry.item, workEntry.payRate, workEntry.hours, workEntry.payment);
       let index = this.workEntries.indexOf(workEntry);
       // this.workEntries.push(obj)
       this.workEntries.splice(index, 0, obj);


  }

}