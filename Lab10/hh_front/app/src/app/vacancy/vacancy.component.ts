import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {Service} from '../service';
import {Vacancy} from '../../models/vacancy';

@Component({
  selector: 'app-vacancy',
  templateUrl: './vacancy.component.html',
  styleUrls: ['./vacancy.component.css']
})
export class VacancyComponent implements OnInit {
  vacancies: Vacancy[] = [];
  id: number | undefined;

  constructor(private route: ActivatedRoute, private service: Service) {
  }

  ngOnInit(): void {

    this.route.params.subscribe(params => {
      this.id = +params['id'];
      this.service.getVacancies(this.id).subscribe(
        vacancies => {
          this.vacancies = vacancies;
          console.log("Vacancies data:", vacancies);
        },
        error => {
          console.error("Error fetching vacancies:", error);
        }
      );

    });

  }
}
