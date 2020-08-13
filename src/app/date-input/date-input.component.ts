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

  toggleSelected() {
    this.isSelected = !this.isSelected;
    
  }


  ngOnInit(): void {
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
