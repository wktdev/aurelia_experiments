import {Work} from 'components/work-form/work-entry';

export class App {
  constructor() {
  	this.numberOfFields = 0;
  	this.workEntries = [];
    this.date ='';
    this.item = '';
    this.payRate = 0;
    this.hours = 0;
    this.payment = 0;


  }

  addWorkEntry(){
    this.workEntries.push(new Work(this.date,this.item,this.payRate,this.hours,this.payment));
    
  }


  //__________________________________________BEGIN batch set work fields

  getDateTimeSpan(){

  }

  setAllPayRate(){

  }

  setAllHours(){

  }

  setAllItem(){

  }

  addMultipleWorkForms(num){
    for(var i = 0; i < num; i+=1){
      this.addWorkEntry()
    }
  }


  //__________________________________________END batch set work fields

  //__________________________________________BEGIN set individual work fields


  setFieldData(index,val){
    this.formList[index].date = val;

  }
  
  setFieldPayRate(index,val){
  this.formList[index].payRate = val;

  }

  setHours(index,val){
  this.formList[index].hours = val;
  }

  calculatePayTotal(index,val){
      var payRate = this.formList[index].payRate;
      var hours = this.formList[index].hours;
      this.formList[index].payTotal = payRate * hours;
  }


//_____________________________________________END set individual work fields

}

