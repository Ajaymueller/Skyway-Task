import { Component, Input, OnInit } from '@angular/core';
import { EventViewModel } from 'src/app/models/event-view-model.class';
import { EventDataService } from 'src/app/services/event-dataservice.class';

@Component({
  selector: 'app-event-card',
  templateUrl: './event-card.component.html',
  styleUrls: ['./event-card.component.scss']
})
export class EventCardComponent implements OnInit {

  model: Array<EventViewModel> = new Array<EventViewModel>();
  time: string;
  @Input() searchTermValue: string;

  constructor(private eventDataService: EventDataService) { }

  ngOnInit(): void {
    this.getAll();
  }

  getAll() {
    this.eventDataService.getAll().subscribe(res => {
      this.updateModel(res.data.getEvents);
    })
  }

  updateModel(result: any) {
    result.forEach(element => {
        this.model.push(new EventViewModel(element))
    })
}

}
