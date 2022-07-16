import { Component, Input, OnInit } from "@angular/core";
import {
  ActivatedRoute,
  ActivatedRouteSnapshot,
  Router,
} from "@angular/router";
import { Avatar } from "primeng/avatar";
import { Employee } from "src/app/models/employee.model";
import { EmployeesService } from "src/app/services/employees.service";

@Component({
  selector: "app-view-employee",
  templateUrl: "./view-employee.component.html",
  template: ` <div [ngStyle]="getMyStyles()" class="skelt-load loader"></div> `,

  styleUrls: ["./view-employee.component.scss"],
})
export class ViewEmployeeComponent implements OnInit {
  @Input() Cwidth;
  @Input() Cheight;
  @Input() circle: boolean;

  employeeId: number;
  employee: Employee;

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private employeeService: EmployeesService
  ) {}

  ngOnInit(): void {
    this.employeeId = this.route.snapshot.params.id;
    this.getEmployee();
  }

  getMyStyles() {
    const myStyles = {
      "width.px": this.Cwidth ? this.Cwidth : "",
      "height.px": this.Cheight ? this.Cheight : "",
      "border-radius": this.circle ? "50%" : "",
    };
    return myStyles;
  }
  getEmployee() {
    this.employeeService
      .getEmployeeById(this.employeeId)
      .subscribe((employee) => {
        this.employee = employee;
      });
  }

  viewLocation(location) {
    this.router.navigate(["maps"]);
  }
}
