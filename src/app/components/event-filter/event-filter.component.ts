import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-event-filter',
  templateUrl: './event-filter.component.html',
  styleUrls: ['./event-filter.component.scss']
})
export class EventFilterComponent implements OnInit {

  @Output() searchValueEmit = new EventEmitter<string>();

  constructor() { }

  ngOnInit(): void {
  }

  searchTermChanged(searchTerm) {
    this.searchValueEmit.emit(searchTerm);
  }

}
