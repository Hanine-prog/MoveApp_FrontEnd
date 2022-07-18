import { NgModule } from "@angular/core";
import { HttpClientModule } from "@angular/common/http";
import { RouterModule } from "@angular/router";
import { CommonModule } from "@angular/common";
import { FormsModule } from "@angular/forms";

import { AdminLayoutRoutes } from "./admin-layout.routing";
import { DashboardComponent } from "../../pages/dashboard/dashboard.component";
import { IconsComponent } from "../../pages/icons/icons.component";
import { MapComponent } from "../../pages/map/map.component";
import { NotificationsComponent } from "../../pages/notifications/notifications.component";

import { TablesComponent } from "../../pages/tables/tables.component";

// import { RtlComponent } from "../../pages/rtl/rtl.component";

import { NgbModule } from "@ng-bootstrap/ng-bootstrap";
import { ViewEmployeeComponent } from "src/app/pages/employees/view-employee/view-employee.component";
import { DialogModule } from "primeng/dialog";
import { TabViewModule } from "primeng/tabview";
import { ButtonModule } from "primeng/button";
import { DynamicDialogModule } from "primeng/dynamicdialog";

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(AdminLayoutRoutes),
    FormsModule,
    HttpClientModule,
    NgbModule,
    TabViewModule,
    DialogModule,
    ButtonModule,
    DynamicDialogModule,
  ],
  declarations: [
    DashboardComponent,

    TablesComponent,
    IconsComponent,
    NotificationsComponent,
    MapComponent,
    ViewEmployeeComponent,
    // RtlComponent
  ],
})
export class AdminLayoutModule {}
