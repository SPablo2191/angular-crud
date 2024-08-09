import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { PersonService } from './services/person.service';
import { Observable } from 'rxjs';
import { Person } from './models/person.model';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,CommonModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent implements OnInit {
  persons! : Observable<Person[]>;
  constructor(private readonly personService : PersonService){}
  ngOnInit(): void {
    this.persons = this.personService.getPersons();
  }

}
