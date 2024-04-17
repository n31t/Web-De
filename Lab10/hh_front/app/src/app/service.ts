import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {catchError, Observable, throwError} from 'rxjs'
import {Company} from "../models/company";
import {Vacancy} from "../models/vacancy";

@Injectable({
  providedIn: 'root'
})
export class Service {
  url = 'http://127.0.0.1:8000/api/companies';

  constructor(private http: HttpClient) {
  }

  getCompanies(): Observable<Company[]> {
    return this.http.get<Company[]>(this.url);
  }

  getVacancies(id: number): Observable<Vacancy[]> {
    return this.http.get<Vacancy[]>(this.url + `/${id}/vacancies`).pipe(
      catchError(error => {
        console.error('Error fetching vacancies', error);
        return throwError(error);
      })
    );
  }
}

