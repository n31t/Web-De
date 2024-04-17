import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {CompanyComponent} from "./company/company.component";
import {VacancyComponent} from "./vacancy/vacancy.component";

const routes: Routes = [
  {path: 'companies', component: CompanyComponent},
  {path: '', redirectTo: '/companies', pathMatch: 'full'},
  {path: 'vacancy/:id', component: VacancyComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
