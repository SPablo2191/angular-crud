import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { ApiEndpoint } from '../shared/enums/api-enpoint.enum';
import { environment } from '../../environments/environment';
import { Person } from '../models/person.model';

@Injectable({
  providedIn: 'root'
})
export class PersonService {
  http = inject(HttpClient);
  baseUrl = `${environment.apiBaseUrl}/${ApiEndpoint.PERSON}`;
  constructor() { }
  getPersons(){
    return this.http
    .get<Person[]>(`${this.baseUrl}`);
}
}
