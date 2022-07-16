import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { RouterModule } from "@angular/router";
import { NgbModule } from "@ng-bootstrap/ng-bootstrap";
import { AppComponent } from "../app.component";
import { SidebarComponent } from "./sidebar/sidebar.component";
import { FooterComponent } from "./footer/footer.component";
import { NavbarComponent } from "./navbar/navbar.component";

@NgModule({
  imports: [CommonModule, RouterModule, NgbModule],
  declarations: [SidebarComponent, FooterComponent, NavbarComponent],
  exports: [SidebarComponent, FooterComponent, NavbarComponent],
})
export class ComponentsModule {}
