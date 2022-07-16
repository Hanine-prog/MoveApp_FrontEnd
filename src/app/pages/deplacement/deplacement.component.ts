import { ConfirmPopupModule } from "primeng/confirmpopup";
import { HttpErrorResponse } from "@angular/common/http";
import { Component, OnInit, NgModule, Injectable } from "@angular/core";
import { FormControl, FormGroup, NgForm } from "@angular/forms";
import { SelectItemGroup } from "primeng/api";

import {
  ConfirmationService,
  MessageService,
  PrimeNGConfig,
} from "primeng/api";
import { Deplacement } from "src/app/models/deplacement.model";
import { DeplacementService } from "src/app/services/deplacement.service";

interface City {
  name: string;
  code: string;
}
interface Country {
  name: string;
  code: string;
}

@Component({
  selector: "app-deplacement",
  templateUrl: "./deplacement.component.html",
  styleUrls: ["./deplacement.component.scss"],
  styles: [
    `
      :host ::ng-deep .ui-listbox {
        width: 20em;
      }
    `,
  ],
})
export class DeplacementComponent implements OnInit {
  title(title: any) {
    throw new Error("Method not implemented.");
  }
  displayEditDialog = false;
  displayDeleteDialog = false;
  displayAddDialog = false;
  public deplacements: Deplacement[];
  deplacementId: number;

  deplacementForm = new FormGroup({
    startingPoint: new FormControl(""),
    arrivalPoint: new FormControl(""),
    statuts: new FormControl(""),
    meansOfTransport: new FormControl(""),
  });

  cities: City[];
  countries: any[];

  selectedCity: City;

  selectedCountries: any[];

  groupedCities: SelectItemGroup[];

  constructor(
    private deplacementService: DeplacementService,
    private confirmationService: ConfirmationService,
    private messageService: MessageService,
    private primengConfig: PrimeNGConfig
  ) {
    this.cities = [
      { name: "New York", code: "NY" },
      { name: "Rome", code: "RM" },
      { name: "London", code: "LDN" },
      { name: "Istanbul", code: "IST" },
      { name: "Paris", code: "PRS" },
    ];

    this.countries = [
      { name: "Australia", code: "AU" },
      { name: "Brazil", code: "BR" },
      { name: "China", code: "CN" },
      { name: "Egypt", code: "EG" },
      { name: "France", code: "FR" },
      { name: "Germany", code: "DE" },
      { name: "India", code: "IN" },
      { name: "Japan", code: "JP" },
      { name: "Spain", code: "ES" },
      { name: "United States", code: "US" },
    ];

    this.groupedCities = [
      {
        label: "Germany",
        value: "de",
        items: [
          { label: "Berlin", value: "Berlin" },
          { label: "Frankfurt", value: "Frankfurt" },
          { label: "Hamburg", value: "Hamburg" },
          { label: "Munich", value: "Munich" },
        ],
      },
      {
        label: "USA",
        value: "us",
        items: [
          { label: "Chicago", value: "Chicago" },
          { label: "Los Angeles", value: "Los Angeles" },
          { label: "New York", value: "New York" },
          { label: "San Francisco", value: "San Francisco" },
        ],
      },
      {
        label: "Japan",
        value: "jp",
        items: [
          { label: "Kyoto", value: "Kyoto" },
          { label: "Osaka", value: "Osaka" },
          { label: "Tokyo", value: "Tokyo" },
          { label: "Yokohama", value: "Yokohama" },
        ],
      },
    ];
  }

  openPopupDelete(event: Event) {
    this.confirmationService.confirm({
      target: event.target,
      message: "Are you sure that you want to delete?",
      icon: "pi pi-exclamation-triangle",
      accept: () => {
        this.deleteDeplacement();
      },
      reject: () => {
        this.messageService.add({
          severity: "error",
          summary: "Rejected",
          detail: "You have rejected ",
        });
      },
    });
  }

  createDeplacement() {
    this.deplacementService
      .addDeplacements(this.deplacementForm.value)
      .subscribe(() => {
        this.messageService.add({
          severity: "info",
          summary: "Confirmed",
          detail: "You have created",
        });
        this.getDeplacements();
        this.displayAddDialog = false;
      });
  }
  editDeplacement() {
    const deplacement = {
      ...this.deplacementForm.value,
      employeeId: this.deplacementId,
    };
    this.deplacementService
      .updateDeplacements(deplacement, this.deplacementId)
      .subscribe(() => {
        this.messageService.add({
          severity: "info",
          summary: "Confirmed",
          detail: "You have updated",
        });
        this.getDeplacements();
        this.displayEditDialog = false;
      });
  }
  deleteDeplacement() {
    this.deplacementService
      .deleteDeplacements(this.deplacementId)
      .subscribe(() => {
        // display delete toast
        this.messageService.add({
          severity: "info",
          summary: "Confirmed",
          detail: "You have deleted",
        });
        this.getDeplacements();
      });
  }

  ngOnInit() {
    this.getDeplacements();
    this.primengConfig.ripple = true;
  }

  public getDeplacements(): void {
    this.deplacementService
      .getDeplacements()
      .subscribe((response: Deplacement[]) => {
        this.deplacements = response;
      });
  }

  // public onAddDeplacements(addForm: NgForm): void {
  //   this.deplacementService
  //     .addDeplacements(addForm.value)
  //     .subscribe((response: Deplacement) => {
  //       console.log(response);
  //       this.getDeplacements();
  //       addForm.reset();
  //     });
  //   this.getDeplacements();
  //   this.displayAddDialog = false;
  // }

  public onDeleteDeplacements(employeeId: number): void {
    this.deplacementService
      .deleteDeplacements(employeeId)
      .subscribe((response: void) => {
        console.log(response);
        this.getDeplacements();
        this.displayDeleteDialog = false;
      });
  }

  public searchDeplacements(key: string): void {
    console.log(key);
    const results: Deplacement[] = [];
    for (const deplacement of this.deplacements) {
      if (
        deplacement.startingPoint.toLowerCase().indexOf(key.toLowerCase()) !==
          -1 ||
        deplacement.arrivalPoint.toLowerCase().indexOf(key.toLowerCase()) !==
          -1 ||
        deplacement.statuts.toLowerCase().indexOf(key.toLowerCase()) !== -1 ||
        deplacement.meansOfTransport
          .toLowerCase()
          .indexOf(key.toLowerCase()) !== -1
      ) {
        results.push(deplacement);
      }
    }
    this.deplacements = results;
    if (results.length === 0 || !key) {
      this.getDeplacements();
    }
  }

  openModal(deplacement: Deplacement, mode: string, event?): void {
    if (mode === "add") {
      this.deplacementForm.reset();
      this.displayAddDialog = true;
    }
    if (mode === "delete") {
      this.deplacementId = deplacement.id;
      this.openPopupDelete(event);
    }
    if (mode === "edit") {
      this.deplacementId = deplacement.id;
      this.deplacementForm.patchValue(deplacement);
      this.displayEditDialog = true;
    }
  }
}
