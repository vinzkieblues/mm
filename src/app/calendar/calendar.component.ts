import { Component, OnInit } from '@angular/core';
import dayGridPlugin from '@fullcalendar/daygrid';

@Component({
  selector: 'app-calendar',
  templateUrl: './calendar.component.html',
  styleUrls: ['./calendar.component.css']
})
export class CalendarComponent implements OnInit {

  calendarPlugins = [dayGridPlugin];
  
  today: number = Date.now();
 
  
  weeks: any[];

  constructor() { }

  ngOnInit() {
    this.weeks = this.getWeeksInMonth(2019, 5);
  }

  getDaysInWeek(start: number,end: number){
    let x: number = 1;
    for(let i=start;i<=end;i++){
      console.log('day'+i);
      x++;
    }
    console.log('end');
  }

  getWeeksInMonth(year: number, month: number) {
    const weeks = [];
    const firstDay: Date = new Date(year, month, 1);
    const lastDay: Date = new Date(year, month + 1, 0);
    const daysInMonth: number = lastDay.getDate();
    let dayOfWeek: number = firstDay.getDay();
    let start: number;
    let end: number;

    for (let i = 1; i < daysInMonth + 1; i++) {

        if (dayOfWeek === 0 || i === 1) {
            start = i;
        }

        if (dayOfWeek === 6 || i === daysInMonth) {

            end = i;

            if (start !== end) {

                weeks.push({
                    start: start,
                    end: end
                });
            }
        }

        dayOfWeek = new Date(year, month, i).getDay();
    }
    console.log(weeks);
    return weeks;
}

}
