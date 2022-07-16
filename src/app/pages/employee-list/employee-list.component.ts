import { Component, OnInit } from "@angular/core";
import { FormControl, FormGroup } from "@angular/forms";
import { Router } from "@angular/router";
import {
  ConfirmationService,
  MessageService,
  PrimeNGConfig,
} from "primeng/api";
import { Employee } from "src/app/models/employee.model";
import { EmployeesService } from "src/app/services/employees.service";

@Component({
  selector: "app-employee-list",
  templateUrl: "./employee-list.component.html",
  styleUrls: ["./employee-list.component.scss"],
})
export class EmployeeListComponent implements OnInit {
  title(title: any) {
    throw new Error("Method not implemented.");
  }
  displayEditDialog = false;
  displayDeleteDialog = false;
  displayAddDialog = false;
  public employees: Employee[];
  employeeId: number;

  employeeForm = new FormGroup({
    firstName: new FormControl(""),
    lastName: new FormControl(""),
    grade: new FormControl(""),
    matricule: new FormControl(""),
    email: new FormControl(""),
  });

  constructor(
    private employeesService: EmployeesService,
    private confirmationService: ConfirmationService,
    private messageService: MessageService,
    private primengConfig: PrimeNGConfig,
    private router: Router
  ) {}

  openPopupDelete() {
    this.confirmationService.confirm({
      message: "Are you sure that you want to delete?",
      icon: "pi pi-exclamation-triangle",
      accept: () => {
        this.deleteEmployee();
      },
      reject: () => {
        this.messageService.add({
          severity: "error",
          summary: "Rejected",
          detail: "You have rejected",
        });
      },
    });
  }

  createEmployee() {
    this.employeesService.addEmployee(this.employeeForm.value).subscribe(() => {
      this.messageService.add({
        severity: "info",
        summary: "Confirmed",
        detail: "You have created",
      });
      this.getEmployees();
      this.displayAddDialog = false;
    });
  }
  editEmployee() {
    const employee = {
      ...this.employeeForm.value,
      employeeId: this.employeeId,
    };
    this.employeesService
      .updateEmployee(employee, this.employeeId)
      .subscribe(() => {
        this.messageService.add({
          severity: "info",
          summary: "Confirmed",
          detail: "You have updated",
        });
        this.getEmployees();
        this.displayEditDialog = false;
      });
  }
  deleteEmployee() {
    this.employeesService.deleteEmployee(this.employeeId).subscribe(() => {
      // display delete toast
      this.messageService.add({
        severity: "info",
        summary: "Confirmed",
        detail: "You have accepted",
      });
      this.getEmployees();
    });
  }

  ngOnInit() {
    this.getEmployees();
  }

  public getEmployees(): void {
    this.employeesService.getEmployees().subscribe((response: Employee[]) => {
      this.employees = response;
    });
  }

  // public onAddEmloyee(addForm: NgForm): void {
  //   this.employeesService
  //     .addEmployee(addForm.value)
  //     .subscribe((response: Employee) => {
  //       console.log(response);
  //       this.getEmployees();
  //       addForm.reset();
  //     });
  //   this.getEmployees();
  //   this.displayAddDialog = false;
  // }

  public onDeleteEmloyee(employeeId: number): void {
    this.employeesService
      .deleteEmployee(employeeId)
      .subscribe((response: void) => {
        console.log(response);
        this.getEmployees();
        this.displayDeleteDialog = false;
      });
  }

  public searchEmployees(key: string): void {
    console.log(key);
    const results: Employee[] = [];
    for (const employee of this.employees) {
      if (
        employee.firstName.toLowerCase().indexOf(key.toLowerCase()) !== -1 ||
        employee.email.toLowerCase().indexOf(key.toLowerCase()) !== -1 ||
        employee.lastName.toLowerCase().indexOf(key.toLowerCase()) !== -1 ||
        employee.grade.toLowerCase().indexOf(key.toLowerCase()) !== -1 ||
        employee.matricule.toLowerCase().indexOf(key.toLowerCase()) !== -1
      ) {
        results.push(employee);
      }
    }
    this.employees = results;
    if (results.length === 0 || !key) {
      this.getEmployees();
    }
  }

  openModal(employee: Employee, mode: string): void {
    if (mode === "add") {
      this.employeeForm.reset();
      this.displayAddDialog = true;
    }
    if (mode === "delete") {
      this.employeeId = employee.id;
      this.openPopupDelete();
    }
    if (mode === "edit") {
      this.employeeId = employee.id;
      this.employeeForm.patchValue(employee);
      this.displayEditDialog = true;
    }
  }

  viewEmployee(id: number) {
    this.router.navigate(["/employees", id]);
  }

  // construct items for employee
  getItems(employee) {
    return [
      {
        icon: "pi pi-pencil",
        command: () => {
          this.openModal(employee, "edit");
        },
      },
      {
        icon: "pi pi-eye",
        command: () => {
          this.viewEmployee(employee.id);
        },
      },
      {
        icon: "pi pi-trash",
        command: () => {
          this.openModal(employee, "delete");
        },
      },
    ];
  }
}
