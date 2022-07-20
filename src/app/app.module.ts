import { BrowserAnimationsModule } from "@angular/platform-browser/animations";

import { ReactiveFormsModule } from "@angular/forms";
import { FormsModule, FormGroup } from "@angular/forms";
import { HttpClientModule } from "@angular/common/http";
import { RouterModule } from "@angular/router";
import { ToastrModule } from "ngx-toastr";
import { DialogModule } from "primeng/dialog";
import { NgModule } from "@angular/core";

import { ToastModule } from "primeng/toast";
import { ButtonModule } from "primeng/button";
import { AppComponent } from "./app.component";
import { AdminLayoutComponent } from "./layouts/admin-layout/admin-layout.component";
import { AuthLayoutComponent } from "./layouts/auth-layout/auth-layout.component";

import { NgbModule } from "@ng-bootstrap/ng-bootstrap";

import { AppRoutingModule } from "./app-routing.module";

import { EmployeesComponent } from "./pages/employees/employees.component";
import { SignupComponent } from "./signup/signup.component";

import { ComponentsModule } from "./components/components.module";
import { InputTextModule } from "primeng/inputtext";
import { ConfirmPopupModule } from "primeng/confirmpopup";
import { ConfirmationService, MessageService } from "primeng/api";
import { DeplacementComponent } from "./pages/deplacement/deplacement.component";
import { CardModule } from "primeng/card";
import { AvatarModule } from "primeng/avatar";
import { AvatarGroupModule } from "primeng/avatargroup";
import { CommonModule } from "@angular/common";
import { SkeletonModule } from "primeng/skeleton";
import { BadgeModule } from "primeng/badge";
import { ListboxModule } from "primeng/listbox";
import { GMapModule } from "primeng/gmap";
import { SpeedDialModule } from "primeng/speeddial";
import { ProfileComponent } from "./pages/profile/profile.component";
import { TabViewModule } from "primeng/tabview";
import { EmployeeListComponent } from "./pages/employee-list/employee-list.component";
import { ToolbarModule } from "primeng/toolbar";
import { TableModule } from "primeng/table";
import { MapComponent } from "./pages/map/map.component";

@NgModule({
  imports: [
    BrowserAnimationsModule,
    FormsModule,
    HttpClientModule,
    ComponentsModule,
    NgbModule,
    RouterModule,
    ReactiveFormsModule,
    ConfirmPopupModule,
    CardModule,
    ToastModule,
    ButtonModule,
    InputTextModule,
    AvatarGroupModule,
    AvatarModule,
    GMapModule,
    CommonModule,
    DialogModule,
    AppRoutingModule,
    SkeletonModule,
    BadgeModule,
    ListboxModule,
    SpeedDialModule,
    TabViewModule,
    ToolbarModule,
    TableModule,

    ToastrModule.forRoot(),
  ],

  declarations: [
    AppComponent,
    AdminLayoutComponent,
    AuthLayoutComponent,
    ProfileComponent,
    EmployeesComponent,
    SignupComponent,
    DeplacementComponent,
    EmployeeListComponent,
  ],
  providers: [ConfirmationService, MessageService],
  bootstrap: [AppComponent],
})
export class AppModule {}
