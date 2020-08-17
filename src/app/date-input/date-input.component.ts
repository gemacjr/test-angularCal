import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-date-input',
  templateUrl: './date-input.component.html',
  styleUrls: ['./date-input.component.css']
})
export class DateInputComponent implements OnInit {

  constructor() { }

  @Input() isSelected: boolean = false;
  @Input() isPassed: boolean = false;
  @Input() isDefault: boolean = false;
  @Input() dayOfWeek: string;
  @Input() dayOfMonth: string;
  @Input() dateKey: string;
  

  selectedDates: string[];

  getDateId(e:any, dateId:string) {

    this.isSelected = !this.isSelected;
    
    if (e.target.checked) {
      console.log(dateId + ' is Checked');
      
      this.selectedDates.push(dateId);
      
    } else {
      console.log(dateId + ' unChecked');
      
      this.selectedDates = this.selectedDates.filter((m) => m != dateId);
    }
    console.log('The array of closure Dates ' + this.selectedDates);
     
    
  }

  


  ngOnInit(): void {
  

  this.selectedDates = new Array<string>();
  }

  getTooltipText() {
    var text: string = "";
    if (this.isDefault) {
      text = "This is a standard Cardinal Health delivery closure. No customization is possible for this date.";
    }
    else {
      text = "The submission time for this date has passed. Please contact customer service for further assistance.";
    }
    return text;
  }

}
