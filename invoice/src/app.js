import moment from 'moment';
import { WorkEntry } from 'components/work-entry';

export class App {
    constructor() {
        this.heading = "Invoice App";
        this.startDate = '';
        this.endDate = '';
        this.workEntries = [];
        this.workDate = '';
        this.workItem = '';
        this.workPayRate = '';
        this.workHours = '';
        this.workPayment = '';

        //__________________________BEGIN totals

        this.hoursTotal = 0;

        this.payTotal = 0;

        //__________________________END totals
    }

    addWorkEntry(workDate) {

        this.workEntries.push(new WorkEntry(workDate, this.workItem, this.workPayRate, this.workHours, this.workPayment));

    }

    addWorkEnteries() {

        //____________________________________BEGIN get number of days | NOTE:___this.startDate___ format is:  2016-11-02

        let startDateArr = (this.startDate).split("-"); // turn to array
        let endDateArr = (this.endDate).split("-"); // turn to array
        var startDate = moment(startDateArr);
        var endDate = moment(endDateArr);

        var numberOfDays = endDate.diff(startDate, 'days') + 1; //  <---| HERE

        //____________________________________END get number of days

        var currentDate = new Date(this.startDate);
        console.log(currentDate + " start date")

        for (var i = 0; i < numberOfDays; i += 1) {
            currentDate.setDate(currentDate.getDate() + 1);
            var answer = moment(currentDate).format('YYYY-MM-DD');
            this.addWorkEntry(answer)

        }

    }

    updateWorkEntry(workEntry) {
        let index = this.workEntries.indexOf(workEntry);
        let obj = new WorkEntry(workEntry.date, workEntry.item, workEntry.payRate, workEntry.hours, workEntry.payment);
        this.workEntries[index] = obj;
    }

    calculatePay(workEntry) {
        let index = this.workEntries.indexOf(workEntry);
        let payment = (workEntry.payRate * workEntry.hours);
        this.workEntries[index].payment = payment;
    }


    updateWorkEntryField(workEntry) {
        // console.log(workEntry.item)
        let index = this.workEntries.indexOf(workEntry);
        this.workEntries[index] = workEntry;
        console.log(this.workEntries);
        this.calculatePay(workEntry)
    }

    removeWorkEntry(workEntry) {
        console.log(this.workEntries.indexOf(workEntry))
        let index = this.workEntries.indexOf(workEntry);
        this.workEntries.splice(index, 1);

    }

    copyWorkEntry(workEntry) {
        let obj = new WorkEntry(workEntry.date, workEntry.item, workEntry.payRate, workEntry.hours, workEntry.payment);
        let index = this.workEntries.indexOf(workEntry);
        this.workEntries.splice(index, 0, obj);
    }

    setAllHours(hours) {
        for (var i = 0; i < this.workEntries.length; i += 1) {
            this.workEntries[i].hours = hours;
        }
    }

    setAllRates(rate) {
        for (var i = 0; i < this.workEntries.length; i += 1) {
            this.workEntries[i].payRate = rate;
        }
    }

    setAllworkPayment(payRate, hours) {

        for (var i = 0; i < this.workEntries.length; i += 1) {
            this.workEntries[i].payment = payRate * hours;
        }

    }

    setTotalHours(){
        this.hoursTotal = 0;

        var total = 0;
           for (var i = 0; i < this.workEntries.length; i += 1) {
            total += (+this.workEntries[i].hours);
        }

        
        this.hoursTotal = total;
        console.log(this.hoursTotal)
 
    }

    setTotalPayment(){
        this.payTotal = 0;

        var total = 0;
        for (var i = 0; i < this.workEntries.length; i += 1) {
            total += ( +this.workEntries[i].payment);

        }

        this.payTotal = total;



    }

}
