
export class App {
  constructor() {
  	this.numberOfFields = 0;
  	this.counter = 0;
  	this.form = {date:"", item:"", payRate:0, hours:0, payTotal:0 },
  	this.formList =[];


  }

    addWorkForm(){
    this.formList.push(this.form);
    console.log(this.formList);
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
      this.addWorkForm()
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

