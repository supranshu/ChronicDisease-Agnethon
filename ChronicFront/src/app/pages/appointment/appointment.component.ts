// appointment.component.ts
import { Component, OnInit } from '@angular/core';
import dayGridPlugin from '@fullcalendar/daygrid';
import interactionPlugin from '@fullcalendar/interaction';

@Component({
  selector: 'app-appointment',
  templateUrl: './appointment.component.html',
  styleUrls: ['./appointment.component.css']
})
export class AppointmentComponent implements OnInit {
  calendarEvents: any[] = [
    // Example events data
    { title: 'Event 1', start: '2022-03-01' },
    { title: 'Event 2', start: '2022-03-05' },
    // Add more event objects as needed
  ];

  constructor() { }

  ngOnInit(): void {

  }

}
