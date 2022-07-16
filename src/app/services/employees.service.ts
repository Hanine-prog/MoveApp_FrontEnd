import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { environment } from "src/environments/environment.prod";

import { Employee } from "../models/employee.model";

@Injectable({
  providedIn: "root",
})
export class EmployeesService {
  private apiServerUrl = environment.apiBaseUrlEmployee;

  constructor(private http: HttpClient) {}

  public getEmployees(): Observable<Employee[]> {
    return this.http.get<Employee[]>(`${this.apiServerUrl}/employees`);
  }

  public addEmployee(employee: Employee): Observable<Employee> {
    return this.http.post<Employee>(`${this.apiServerUrl}/employees`, employee);
    console.log(employee);
  }
  public updateEmployee(
    employee: Employee,
    employeeId: number
  ): Observable<Employee> {
    return this.http.put<Employee>(
      `${this.apiServerUrl}/employees/${employeeId}`,
      employee
    );
  }

  public deleteEmployee(employeeId: number): Observable<void> {
    return this.http.delete<void>(
      `${this.apiServerUrl}/employees/${employeeId}`
    );
  }

  getEmployeeById(id: number): Observable<Employee> {
    return this.http.get<Employee>(`${this.apiServerUrl}/employees/${id}`);
  }
}
