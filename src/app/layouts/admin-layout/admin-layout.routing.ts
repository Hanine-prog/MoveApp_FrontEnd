import { Routes } from "@angular/router";

import { DashboardComponent } from "../../pages/dashboard/dashboard.component";
import { IconsComponent } from "../../pages/icons/icons.component";
import { MapComponent } from "../../pages/map/map.component";
import { NotificationsComponent } from "../../pages/notifications/notifications.component";

import { TablesComponent } from "../../pages/tables/tables.component";
// import { CardsComponent } from "src/app/pages/card/card.component";
import { EmployeesComponent } from "src/app/pages/employees/employees.component";
import { SignupComponent } from "src/app/signup/signup.component";
import { DeplacementComponent } from "src/app/pages/deplacement/deplacement.component";
import { ViewEmployeeComponent } from "src/app/pages/employees/view-employee/view-employee.component";
import { EmployeeListComponent } from "src/app/pages/employee-list/employee-list.component";

// import { RtlComponent } from "../../pages/rtl/rtl.component";

export const AdminLayoutRoutes: Routes = [
  { path: "dashboard", component: DashboardComponent },
  { path: "icons", component: IconsComponent },
  { path: "maps", component: MapComponent },
  { path: "notifications", component: NotificationsComponent },
  // { path: "user", component: UserComponent },
  { path: "tables", component: TablesComponent },

  { path: "deplacements", component: DeplacementComponent },

  { path: "employees", component: EmployeeListComponent },
  { path: "employees/:id", component: ViewEmployeeComponent },
  // { path: "signup", component: SignupComponent },
  // { path: "rtl", component: RtlComponent }
];
