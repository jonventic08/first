import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  
  studentCollection:Array<object> = [];
  studentRecord:object;

  studNo:number;
  studFname:string;
  studLname:string;
  studProg:string;
  studnYr:number;
  
  message = '';
  printing = false;
  
  private checkPatterns(value:any, pattern:RegExp):boolean {
    if(pattern.test(value))
      return true;
    else 
      return false;
  }

  addStudentEntry():boolean{
    this.printing = false;
    const stringPattern =/^[A-z]+$/;
    const studNumberPattern =/^[0-9]+$/;
    const studYearPattern = /^[1-4]+$/;
   
      if(this.checkPatterns(this.studNo, studNumberPattern) &&
          this.checkPatterns(this.studFname, stringPattern) &&
          this.checkPatterns(this.studLname, stringPattern) &&
          this.checkPatterns(this.studProg, stringPattern) &&
          this.checkPatterns(this.studnYr, studYearPattern)) {
            this.studentRecord = {
              studentNumber: this.studNo,
              studentFirstName: this.studFname,
              studentLastName: this.studLname,
              studentProgram: this.studProg,
              studentYear: this.studnYr

            }

            this.studentCollection.push(this.studentRecord);
            this.message = null;
            this.clearValues();
          }
          else{
            this.message = 'Error have been Encountered and therefore connot continue to process Requested Operation.';
               if (this.checkPatterns(this.studnYr, studYearPattern)) {
             this.message='check ang patternSting';
           }
          else
               this.message='dili check ang pattern';

              return false;
          }




  }

  listStudents():void{
    this.printing = true;
    console.log('showing stored Students');

  }


clearValues():void{

  this.studProg= null;
  this.studFname=null;
  this.studLname=null;
  this.studNo=null;
  this.studnYr=null;

}

}
