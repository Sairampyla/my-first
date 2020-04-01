import { Component, OnInit, Input } from '@angular/core';
import { RestApiService } from '../shared/rest-api.service';
import { Router } from '@angular/router';
import {FormsModule,NgForm} from '@angular/forms';

@Component({
  selector: 'app-employees-create',
  templateUrl: './employees-create.component.html',
  styleUrls: ['./employees-create.component.css']
})
export class EmployeesCreateComponent implements OnInit {

  @Input() employeeDetails = { name: '', email: '', phone: 0}
 

  constructor(public restApi: RestApiService, public router: Router) { }

  ngOnInit() {
  }

  onSubmit() {
    this.restApi.createEmployee(this.employeeDetails)
      .subscribe((data: {}) => {
        this.router.navigate(['/employees-list'])
      })
  }

}
