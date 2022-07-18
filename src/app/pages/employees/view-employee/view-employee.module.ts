import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { SkeletonModule } from "primeng/skeleton";
import { ViewEmployeeComponent } from "./view-employee.component";
import { ButtonModule } from "primeng/button";
import { NgbModule } from "@ng-bootstrap/ng-bootstrap";
import { TabViewModule } from "primeng/tabview";
import { DialogModule } from "primeng/dialog";
import { MapComponent } from "../../map/map.component";
import { BrowserModule } from "@angular/platform-browser";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    SkeletonModule,
    ButtonModule,
    NgbModule,
    TabViewModule,
    DialogModule,
    BrowserModule,
    BrowserAnimationsModule,
  ],
  exports: [],
})
export class SeletonLoaderModule {}
