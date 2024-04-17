import { Component } from '@angular/core';
import { Company } from '../../models/company';
import { Service } from '../service';
@Component({
  selector: 'app-company',
  templateUrl: './company.component.html',
  styleUrl: './company.component.css'
})
export class CompanyComponent {
companies: Company[] = [];
  constructor(private service: Service) {
    service.getCompanies().subscribe(companies => this.companies = companies);
  }
  ngOnInit() {
    this.service.getCompanies().subscribe(companies => this.companies = companies);
    console.log(this.companies);
  }
}
