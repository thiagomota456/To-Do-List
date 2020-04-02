import { Component } from '@angular/core';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {
  
  tasks = [
            {title: "Finish this app", status: true}, 
            {title: "Learning more angular/ionic", status: false}
          ]
  currentTask: string = "";
  inputValue: string = "";

  constructor() {}
  

  Additem(){
    console.log(this.currentTask);

    if(this.currentTask != ""){

      this.tasks.push({title: this.currentTask, status: false});
      this.currentTask = "";
      
    }
  }

}
