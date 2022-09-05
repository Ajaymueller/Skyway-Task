import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { EventViewModel } from '../models/event-view-model.class';
import { Observable } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class EventDataService {

    constructor(private http: HttpClient
    ) { }

    getAll(): Observable<any> { return this.http.get<any>('/api/events.json'); }
}