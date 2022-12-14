import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { EventViewModel } from '../models/event-view-model.class';
import { Observable } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class EventDataService {
    // url: string = "../assets/dummyData.json"; (used before proxy)

    constructor(private http: HttpClient
    ) { }

    getAll(): Observable<any> { return this.http.get<any>('/api/events.json'); }
}