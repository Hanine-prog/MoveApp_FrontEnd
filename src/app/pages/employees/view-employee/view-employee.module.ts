import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { SkeletonModule } from "primeng/skeleton";
import { ViewEmployeeComponent } from "./view-employee.component";
import { ButtonModule } from "primeng/button";
import { NgbModule } from "@ng-bootstrap/ng-bootstrap";
import { TabViewModule } from "primeng/tabview";
@NgModule({
  declarations: [ViewEmployeeComponent],
  imports: [
    CommonModule,
    SkeletonModule,
    ButtonModule,
    NgbModule,
    TabViewModule,
  ],
  exports: [ViewEmployeeComponent],
})
export class SeletonLoaderModule {}
